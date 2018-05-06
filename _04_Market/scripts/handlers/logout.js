function logout(context) {

    let url = urlMaker.logout();
    let auth = support.kinveyAuth();
    let reqObj = requestMaker.postObj(url, auth);
    $.ajax(reqObj)
        .then(function(res) {
            sessionStorage.clear();
            notify.showInfo('Logout successful');
            setTimeout(() => {context.redirect('#/home')}, 2000);
        })
        .catch(function(err) {
            notify.showError(err);
            setTimeout(() => {context.redirect('#/home')}, 3000);
        })
}