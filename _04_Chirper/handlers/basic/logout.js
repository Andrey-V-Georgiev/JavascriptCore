function logout(context) {
    let url = urlMaker.logout();
    let auth = support.kinveyAuth();
    let reqObj = requestMaker.postObj(url, auth);
    $.ajax(reqObj)
        .then(function (res) {
            sessionStorage.clear();
            notif.showInfo('Logout successful');
            context.redirect('#/register');
        })
        .catch(function (err) {
            notif.handleError(err);
            context.redirect('#/login');
        })
}