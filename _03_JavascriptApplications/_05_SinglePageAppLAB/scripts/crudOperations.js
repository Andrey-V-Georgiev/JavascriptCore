const URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_SyYV6cB9M';
const APP_SECRET = '9f35920ecf4d4257a92943d8daa64609';
const AUTHORIZATION_APP = {'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET)};

function authorizationKinvey() {
    return {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')};
}

function listBooks() {
    $('#books').empty();
    showView('viewBooks');
    $.ajax({
        method: 'GET',
        url: URL + 'appdata/' + APP_KEY + '/books',
        contentType: 'application/json',
        headers: authorizationKinvey(),
        success: loadBooksSuccess,
        error: handleAjaxError
    });

    function loadBooksSuccess(books) {
        showInfo('Books loaded');
        if (books.length === 0) {
            $('#books').text('No books in the library.');
        } else {
            let booksTable = $('<table>')
                .append($('<tr>').append(
                    '<th>Title</th><th>Author</th><th>Description</th><th>Actions</th>'
                ));
            for (let book of books) {
                appendBookRow(book, booksTable);
            }
            $('#books').append(booksTable);
        }
    }

    function appendBookRow(book, booksTable) {
        let links = [];
        if (book._acl.creator === sessionStorage['userId']) {
            let deleteLink = $('<a href="#">[Delete]</a>').click(deleteBook.bind(this, book));
            let editLink = $('<a href="#">[Edit]</a>').click(loadBookForEdit.bind(this, book));
            links = [deleteLink, ' ', editLink];
        }

        booksTable.append($('<tr>').append(
            $('<td>').text(book.title),
            $('<td>').text(book.author),
            $('<td>').text(book.description),
            $('<td>').append(links)
        ));
    }
}

function registerUser() {
    let formRegisterEl = $('#formRegister');
    let username = formRegisterEl.find('input[name=username]').val();
    let password = formRegisterEl.find('input[name=passwd]').val();
    let userDataJSON = JSON.stringify({username: username, password: password});

    $.ajax({
        method: 'POST',
        url: URL + "user/" + APP_KEY,
        headers: AUTHORIZATION_APP,
        contentType: "application/json",
        data: userDataJSON,
        success: registerSuccess,
        error: handleAjaxError
    });

    function registerSuccess(res) {
        saveAuthInSession(res);
        showHideMenuLinks();
        listBooks();
        showInfo('User registration successful.')
    }
}



function loginUser() {
    let formLoginEl = $('#formLogin');
    let username = formLoginEl.find('input[name=username]').val();
    let password = formLoginEl.find('input[name=passwd]').val();
    let userDataJSON = JSON.stringify({username: username, password: password});

    $.ajax({
        method: 'POST',
        url: URL + "user/" + APP_KEY + "/login",
        headers: AUTHORIZATION_APP,
        contentType: 'application/json',
        data: userDataJSON,
        success: loginSuccess,
        error: handleAjaxError
    });

    function loginSuccess(userInfo) {
        saveAuthInSession(userInfo);
        showHideMenuLinks();
        listBooks(username, password);
        showInfo('Login successful.');
    }
}

function createBook() {
    let formCreateBookEl = $('#formCreateBook');
    let bookData = {
        title: formCreateBookEl.find('input[name=title]').val(),
        author: formCreateBookEl.find('input[name=author]').val(),
        description: formCreateBookEl.find('textarea[name=description]').val()
    };
    $.ajax({
        method: 'POST',
        url: URL + 'appdata/' + APP_KEY + '/books',
        headers: authorizationKinvey(),
        data: bookData,
        success: createBookSuccess,
        error: handleAjaxError
    });

    function createBookSuccess(res) {
        listBooks();
        showInfo('Book created.');
    }
}


function deleteBook(book) {
    $.ajax({
        method: 'DELETE',
        url: URL + 'appdata/' + APP_KEY + '/books/' + book._id,
        headers: authorizationKinvey(),
        success: deleteBookSuccess,
        error: handleAjaxError
    });

     function deleteBookSuccess(res) {
        listBooks();
        showInfo('Book deleted.');
     }
}

function loadBookForEdit(book) {
    //get specific book
    $.ajax({
        method: 'GET',
        url: URL + 'appdata/' + APP_KEY + '/books/' + book._id,
        headers: authorizationKinvey(),
        success: loadBookForEditSuccess,
        error: handleAjaxError
    });
    //fill the edit form with the data from the book
    function loadBookForEditSuccess(book) {
        let formEditBookEl = $('#formEditBook');
        formEditBookEl.find('input[name=id]').val(book._id);
        formEditBookEl.find('input[name=title]').val(book.title);
        formEditBookEl.find('input[name=author]').val(book.author);
        formEditBookEl.find('textarea[name=description]').val(book.description);
        showView('viewEditBook');
    }
}

function editBook() {
   let formEditBookEl = $('#formEditBook');
   let bookData = {
       title: formEditBookEl.find('input[name=title]').val(),
       author: formEditBookEl.find('input[name=author]').val(),
       description: formEditBookEl.find('textarea[name=description]').val()
   };
   let hiddenId = formEditBookEl.find('input[name=id]').val();
   //get the data from the form and update DB
   $.ajax({
       method: 'PUT',
       url: URL + 'appdata/' + APP_KEY + '/books/' + hiddenId,
       headers: authorizationKinvey(),
       data: bookData,
       success: editBookSuccess,
       error: handleAjaxError
   });

   function editBookSuccess(res) {
      listBooks();
      showInfo('Book edited');
   }
}

function logoutUser() {
    sessionStorage.clear();
    $('#loggedInuser').text('');
    showHideMenuLinks();
    showView('viewHome');
    showInfo('Logout successful');
    $('#loggedInUser').val('').hide();
}


function saveAuthInSession(res) {
    sessionStorage.setItem('username', res.username);
    sessionStorage.setItem('authToken', res._kmd.authtoken);
    sessionStorage.setItem('userId', res._id);
}

function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response);
    if (response.readyState === 0) {
        errorMsg = "Cannot connect due to network error.";
    }
    if (response.responseJSON && response.responseJSON.description) {
        errorMsg = response.responseJSON.description;
    }
    showError(errorMsg);
}