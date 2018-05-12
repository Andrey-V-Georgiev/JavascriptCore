function logout(context) {
    let url = urlMaker.logout();
    let auth = support.kinveyAuth();
    let reqObj = requestMaker.postObj(url, auth);
    $.ajax(reqObj)
        .then(function (res) {
            sessionStorage.clear();
            notify.showInfo('Logout successful');
            context.redirect('#/register');
        })
        .catch(function (err) {
            notify.handleError(err);
            context.redirect('#/login');
        })
}