const URL_AD = 'https://baas.kinvey.com/';
const APP_KEY_AD = 'kid_rJ1tf-jcG';
const APP_SECRET_AD = 'a4c9f283cea043cdabd75db8251b110d';
const AUTHORIZATION_APP_AD = {'Authorization': "Basic " + btoa(APP_KEY_AD + ":" + APP_SECRET_AD)};
const COLLECTION_AD = '/prodavachnik/';

function saveAuthToken(res) {
    sessionStorage.setItem('username', res.username);
    sessionStorage.setItem('authToken', res._kmd.authtoken);
    sessionStorage.setItem('userId', res._id);
}

function authorizationKinvey() {
    return {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')};
}

//////////////////////////////////////////////////////////////////////////////////////////////
function homeView() {
    loadView('viewHome');
}

//////////////////////////////////////////////////////////////////////////////////////////////
function registerView() {
    loadView('viewRegister');
}

function clickRegister() {

    let formRegisterEl = $('#formRegister');
    let username = formRegisterEl.find('input[name=username]').val();
    let password = formRegisterEl.find('input[name=passwd]').val();
    formRegisterEl.find('input[name=username]').val('');
    formRegisterEl.find('input[name=passwd]').val('');

    let dataJSON = JSON.stringify({username: username, password: password});

    $.ajax({
        method: 'POST',
        url: URL_AD + "user/" + APP_KEY_AD,
        headers: AUTHORIZATION_APP_AD,
        contentType: "application/json",
        data: dataJSON,
        success: registrationSuccessful,
        error: displayError
    });

    function registrationSuccessful(res) {
        saveAuthToken(res);
        loadView('viewLogin');
        displayInfoBox(`You are successfully registrated!`);
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////
function loginView() {

    loadView('viewLogin')
}

function clickLogin() {

    let formLoginEl = $('#formLogin');
    let username = formLoginEl.find('input[name=username]').val();
    let password = formLoginEl.find('input[name=passwd]').val();
    formLoginEl.find('input[name=username]').val('');
    formLoginEl.find('input[name=passwd]').val('');

    let dataJSON = JSON.stringify({username: username, password: password});
    $.ajax({
        method: 'POST',
        url: URL_AD + "user/" + APP_KEY_AD + "/login",
        headers: AUTHORIZATION_APP_AD,
        contentType: 'application/json',
        data: dataJSON,
        success: successfulLogin,
        error: displayError
    });

    function successfulLogin(res) {
        saveAuthToken(res);
        updateNavBar();
        listTheDB();
        displayInfoBox(`Hello ${username}, you are now logged in!`);
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////
function listTheDB() {

    loadView('viewAds');
    //attach header of table
    let advContainer = $('#ads').find('table');
    advContainer.empty();
    advContainer.append($('<tr>').append(
        $('<th>Title</th>'),
        $(' <th>Description</th>'),
        $(' <th>Publisher</th>'),
        $(' <th>Date Published</th>'),
        $(' <th>Price</th>'),
        $(' <th>Actions</th>')
    ));

    //get all object from DB
    $.ajax({
        method: 'GET',
        url: URL_AD + 'appdata/' + APP_KEY_AD + COLLECTION_AD,
        contentType: 'application/json',
        headers: authorizationKinvey(),
        success: showAllAds,
        error: displayError
    });

    function showAllAds(res) {
        res.sort(function(a,b) {
            if(a.views <= b.views) {
                return 1;
            } else {
                return -1;
            }
        });

        for (let advertObj of res) {
            let title = advertObj.title;
            let description = advertObj.description;
            let date = advertObj.date;
            let price = advertObj.price;
            let publisher = advertObj.publisher;
            let newAdvert = createNewAdvert(title, description, date, price, publisher, advertObj);
            advContainer.append(newAdvert);
        }
    }
}

function createNewAdvert(title, description, date, price, publisher, advertObj) {
    return $('<tr>').append(
        $('<td>').text(title),
        $('<td>').text(description),
        $('<td>').text(publisher),
        $('<td>').text(date),
        $('<td>').text(price),
        $('<td>').append(
            $('<a href="#">[Read more]</a>').click(() => displayAdvert(advertObj)),
            $('<a href="#">[Delete]</a>').click(() => deleteAdvert(advertObj._id)),
            $('<a href="#">[Edit]</a>').click(() => editAdvert(advertObj._id))
        ),
    );
}

//////////////////////////////////////////////////////////////////////////////////////////////
function displayAdvert(advert) {
    let advertViews = null;
    let advertImage = null;

    $.ajax({
        method: 'GET',
        url: URL_AD + 'appdata/' + APP_KEY_AD + COLLECTION_AD + advert._id,
        headers: authorizationKinvey(),
        contentType: 'application/json'
    }).then(updateTheDB).catch(displayError);

    function updateTheDB(res) {
        let editedDataJSON = JSON.stringify({
            title: 'newTitle',
            description: res.description,
            date: res.date,
            price: res.price,
            publisher: res.publisher,
            image: res.image,
            views: Number(res.views + 1)
        });

        //update the DB
        $.ajax({
            method: 'PUT',
            url: URL_AD + 'appdata/' + APP_KEY_AD + COLLECTION_AD + advert._id,
            headers: authorizationKinvey(),
            contentType: 'application/json',
            data: editedDataJSON,
            success: showAdFullInfo,
            error: displayError
        });

        function showAdFullInfo() {
            let viewDetailsAdEl = $('#viewDetailsAd');
            viewDetailsAdEl.empty();
            let advertInfo = $('<div>').append(
                $('<img>').attr('src',`${res.image}`),
                $('<br>'),
                $('<label>').text('Title'),
                $('<h1>').text(advert.title),
                $('<label>').text('Description:'),
                $('<p>').text(advert.description),
                $('<label>').text('Publisher:'),
                $('<div>').text(advert.publisher),
                $('<label>').text('Date:'),
                $('<div>').text(advert.datePublished)
            );
            viewDetailsAdEl.append(advertInfo);
            loadView('viewDetailsAd');
        }
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////
function deleteAdvert(adId) {
    $.ajax({
        method: 'DELETE',
        url: URL_AD + 'appdata/' + APP_KEY_AD + COLLECTION_AD + adId,
        headers: authorizationKinvey(),
        contentType: 'application/json',
        success: deletedSuccessfully,
        error: displayError
    });

    function deletedSuccessfully() {
        listTheDB()
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////
function editAdvert(adId) {
    //show edit form
    loadView('viewEditAd');

    //load the advert for editing
    $.ajax({
        method: 'GET',
        url: URL_AD + 'appdata/' + APP_KEY_AD + COLLECTION_AD + adId,
        headers: authorizationKinvey(),
        contentType: 'application/json',
        success: fillEditFormFields,
        error: displayError
    });

    //set edit-form fields by the data from the request
    function fillEditFormFields(res) {
        let formEditAd = $('#formEditAd');

        formEditAd.find('input[name=title]').val(res.title);
        formEditAd.find('textarea[name=description]').text(res.description);
        formEditAd.find('input[name=datePublished]').val(res.date);
        formEditAd.find('input[name=price]').val(res.price);
        formEditAd.find('input[name=image]').val(res.image);
    }

    $('#buttonEditAd').click(saveEditedChanges);

    function saveEditedChanges() {
        let formEditAd = $('#formEditAd');

        //get the changed data
        let editedTitle = formEditAd.find('input[name=title]').val();
        let editedDescription = formEditAd.find('textarea[name=description]').val();
        let editedDate = formEditAd.find('input[name=datePublished]').val();
        let editedPrice = Number(formEditAd.find('input[name=price]').val());
        let publisher = sessionStorage.getItem('username');
        let editedImage = formEditAd.find('input[name=image]').val();

        let editedDataJSON = JSON.stringify({
            title: editedTitle,
            description: editedDescription,
            date: editedDate,
            price: editedPrice,
            publisher: publisher,
            image: editedImage
        });
        //update the DB
        $.ajax({
            method: 'PUT',
            url: URL_AD + 'appdata/' + APP_KEY_AD + COLLECTION_AD + adId,
            headers: authorizationKinvey(),
            contentType: 'application/json',
            data: editedDataJSON,
            success: listTheDB,
            error: displayError
        });
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////

function createView() {
    loadView('viewCreateAd')
}

function clickCreateAdvert() {

    //get the input details
    let formCreateAdEl = $('#formCreateAd');
    let title = formCreateAdEl.find('input[name=title]').val();
    let description = formCreateAdEl.find('textarea[name=description]').val();
    let date = formCreateAdEl.find('input[name=datePublished]').val();
    let price = Number(formCreateAdEl.find('input[name=price]').val());
    let image = formCreateAdEl.find('input[name=image]').val();
    let publisher = sessionStorage.getItem('username');

    //empty the input fields
    formCreateAdEl.find('input[name=title]').val('');
    formCreateAdEl.find('textarea[name=description]').val('');
    formCreateAdEl.find('input[name=datePublished]').val('');
    formCreateAdEl.find('input[name=price]').val(null);
    formCreateAdEl.find('input[name=image]').val('');

    //make JSON face of the advert
    let dataJSON = JSON.stringify({
        title: title,
        description: description,
        date: date,
        price: price,
        publisher: publisher,
        image: image,
        views: 0
    });

    //do request to add the new advert to the DB
    $.ajax({
        method: 'POST',
        url: URL_AD + 'appdata/' + APP_KEY_AD + COLLECTION_AD,
        headers: authorizationKinvey(),
        data: dataJSON,
        contentType: 'application/json',
        success: createSuccessful,
        error: displayError
    });

    function createSuccessful(res) {
        listTheDB();
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////
function logoutView() {
    sessionStorage.clear();
    updateNavBar();
    loadView('viewHome');
    displayInfoBox(`You are logged out!`);
}

//////////////////////////////////////////////////////////////////////////////////////////////
function displayError(response) {
    let errorBoxEl = $('#errorBox');
    let errorMsg = JSON.stringify(response);
    if (response.readyState === 0)
        errorMsg = "Cannot connect due to network error.";
    if (response.responseJSON && response.responseJSON.description)
        errorMsg = response.responseJSON.description;
    errorBoxEl.show().text("ERROR: " + errorMsg).click(() => errorBoxEl.text('').hide());
}


function displayInfoBox(message) {
    let infoBox = $('#infoBox');
    infoBox.text(message).show();
    setTimeout(function () {
        $('#infoBox').fadeOut()
    }, 2500)
}
