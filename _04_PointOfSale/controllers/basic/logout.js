function logout(context) {
    let url = urlMaker.logoutUrl();
    let auth = support.kinveyAuth();
    let reqObj = reqObjMaker.postObj(url, auth);
    $.ajax(reqObj).then(function (res) {
        notif.showInfo('Logout successful.');
        sessionStorage.clear();
        context.redirect('#/index.html');
    }).catch(function (err) {
        sessionStorage.clear();
        notif.showError(err.responseText);
        context.redirect('#/index.html');
    })
}
