const URL_AD = 'https://baas.kinvey.com/';
const APP_KEY_AD = 'kid_rJ1tf-jcG';
const APP_SECRET_AD = 'a4c9f283cea043cdabd75db8251b110d';
const AUTHORIZATION_APP_AD = {'Authorization': "Basic " + btoa(APP_KEY_AD + ":" + APP_SECRET_AD)};
const COLLECTION_AD = '/prodavachnik/';

const LOGIN_OBJ = {
    viewId: "viewLogin",
    viewClass: "viewLogin",
    greeting: "Please login",
    formId: "formLogin",
    btnId: "buttonLoginUser",
    btnValue: "Login"
};

const REGISTER_OBJ = {
    viewId: "viewRegister",
    viewClass: "viewRegister",
    greeting: "Please register here",
    formId: "formRegister",
    btnId: "buttonRegisterUser",
    btnValue: "Register"
};

let CREATE_OBJ = {
    viewId: "viewCreateAd",
    viewClass: "viewCreateAd",
    greeting: "Create new Advertisement",
    formId: "formCreateAd",
    btnId: "buttonCreateAd",
    btnValue: "Create"
};

let EDIT_OBJ = {
    viewId: "viewEditAd",
    viewClass: "viewEditAd",
    greeting: "Edit existing advertisement",
    formId: "formEditAd",
    btnId: "buttonEditAd",
    btnValue: "Edit"
};


function saveAuthToken(res) {
    sessionStorage.setItem('username', res.username);
    sessionStorage.setItem('authToken', res._kmd.authtoken);
    sessionStorage.setItem('userId', res._id);
}

function authorizationKinvey() {
    return {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')};
}

//////////////////////////////////////////////////////////////////////////////////////////////
async function homeBtnView() {
    switchNavbar();
    let homeHtml = await $.get('homeView.html');
    let mainEl = $('main');
    mainEl.empty();
    mainEl.append(homeHtml);
    mainEl.find('section').css('display', 'block');
}

//////////////////////////////////////////////////////////////////////////////////////////////
async function showRegisterForm() {
    let registerTemplateRaw = await $.get('templates/loginAndRegister.html');
    let registerTemplate = Handlebars.compile(registerTemplateRaw);
    let registerElement = registerTemplate(REGISTER_OBJ);
    let mainEl = $('main');
    mainEl.empty();
    mainEl.append(registerElement);
    mainEl.find('section').css('display', 'block');
}

function btnRegister() {

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
        //showRegister();
        displayInfoBox(`You are successfully registrated!`);
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////

async function showLoginForm() {
    let loginTemplateRaw = await $.get('templates/loginAndRegister.html');
    let loginTemplate = Handlebars.compile(loginTemplateRaw);
    let loginElement = loginTemplate(LOGIN_OBJ);
    let mainEl = $('main');
    mainEl.empty();
    mainEl.append(loginElement);
    mainEl.find('section').css('display', 'block');
    $('#buttonLoginUser').on('click', btnLogin);
}

function btnLogin() {

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
        switchNavbar();
        listTheAdverts();
        displayInfoBox(`Hello ${username}, you are now logged in!`);
        homeBtnView();
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////

async function showCreateForm() {
    let createTemplateRaw = await $.get('templates/createAndEdit.html');
    let createTemplate = Handlebars.compile(createTemplateRaw);
    let createEl = createTemplate(CREATE_OBJ);
    let mainEl = $('main');
    mainEl.empty();
    mainEl.append(createEl);
    mainEl.find('section').css('display', 'block');
    $('#buttonCreateAd').click(btnCreate);
}

function btnCreate() {

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
        success: createAd,
        error: displayError
    });

    function createAd(res) {
        listTheAdverts()
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////
function listTheAdverts() {

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
        //sort response by view count
        res.sort(function (a, b) {
            if (a.views <= b.views) {
                return 1;
            } else {
                return -1;
            }
        });

        fillTemplate();
        async function fillTemplate() {

            let listTemplateRaw = await $.get('templates/listAdverts.html');
            let listTemplate = Handlebars.compile(listTemplateRaw);
            let listElement = listTemplate({adverts: res});
            let mainEl = $('main');
            mainEl.empty();
            mainEl.append(listElement);
            mainEl.find('section').css('display', 'block');
            attachEdit();
            attachDelete();
            attachMoreInfo()
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////
function attachMoreInfo() {
    let advertId;
    $('.more-info').on('click', function () {
        advertId = $($(this).parent()).attr('id');
        $.ajax({
            method: 'GET',
            url: URL_AD + 'appdata/' + APP_KEY_AD + COLLECTION_AD + advertId,
            headers: authorizationKinvey(),
            contentType: 'application/json'
        }).then(updateTheDB).catch(displayError);
    });

    function updateTheDB(res) {
        let editedDataJSON = JSON.stringify({
            title: res.title,
            description: res.description,
            date: res.date,
            price: Number(res.price),
            publisher: res.publisher,
            image: res.image,
            views: Number(res.views + 1)
        });

        //update the DB
        $.ajax({
            method: 'PUT',
            url: URL_AD + 'appdata/' + APP_KEY_AD + COLLECTION_AD + advertId,
            headers: authorizationKinvey(),
            contentType: 'application/json',
            data: editedDataJSON,
            success: renderMoreInfoForm,
            error: displayError
        });

        function renderMoreInfoForm(res) {

            showAdFullInfo();
            async function showAdFullInfo() {
                let moreInfoTemplateRaw = await $.get('templates/moreInfoView.html');
                let moreInfoTemplate = Handlebars.compile(moreInfoTemplateRaw);
                let moreInfoObj = {
                    image: res.image,
                    title: res.title,
                    description: res.description,
                    publisher: res.publisher,
                    date: res.date
                };
                let moreInfoEl = moreInfoTemplate(moreInfoObj);
                let mainEl = $('main');
                mainEl.empty();
                mainEl.append(moreInfoEl);
                mainEl.find('section').css('display', 'block');
            }
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////
function attachDelete() {
    let advertId;
    $('.delete-advert').on('click', function () {
        advertId = $($(this).parent()).attr('id');
        $.ajax({
            method: 'DELETE',
            url: URL_AD + 'appdata/' + APP_KEY_AD + COLLECTION_AD + advertId,
            headers: authorizationKinvey(),
            contentType: 'application/json',
            success: listTheAdverts,
            error: displayError
        });
    });
}

//////////////////////////////////////////////////////////////////////////////////////////////
function attachEdit() {
    $('.edit-advert').on('click', function () {
        advertId = $($(this).parent()).attr('id');
        $.ajax({
            method: 'GET',
            url: URL_AD + 'appdata/' + APP_KEY_AD + COLLECTION_AD + advertId,
            headers: authorizationKinvey(),
            contentType: 'application/json',
            success: renderEditForm,
            error: displayError
        });
    });

    function renderEditForm(res) {
        editView();
        let editObj = {
            viewId: 'viewEditAd',
            viewClass: 'viewEditAd',
            greeting: 'Edit existing advertisement',
            formId: 'formEditAd',
            btnId: 'buttonEditAd',
            btnValue: 'Edit',
            title: res.title,
            description: res.description,
            date: res.date,
            price: Number(res.price),
            image: res.image
        };

        async function editView() {
            let editTemplateRaw = await $.get('templates/createAndEdit.html');
            let editTemplate = Handlebars.compile(editTemplateRaw);
            let editElement = editTemplate(editObj);
            let mainEl = $('main');
            mainEl.empty();
            mainEl.append(editElement);
            mainEl.find('section').css('display', 'block');
            $('#buttonEditAd').click(saveEditedChanges);
        }

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
                url: URL_AD + 'appdata/' + APP_KEY_AD + COLLECTION_AD + advertId,
                headers: authorizationKinvey(),
                contentType: 'application/json',
                data: editedDataJSON,
                success: listTheAdverts,
                error: displayError
            });
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////
function loggingOut() {
    sessionStorage.clear();
    switchNavbar();
    homeBtnView();
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
