function register(context) {

    let url = urlMaker.registrationUrl();
    let auth = support.basicAuth();

    let username = context.params.username;
    let password = context.params.password;
    let repeatPass = context.params.repeatPass;

    // if (!/[\w]{5,}/.test(username)) {
    //     notifyService.showError('Username must be 5 or more letters long!')
    // } else if (password.length === 0) {
    //     notifyService.showError('Password can not be empty!')
    // } else if (password !== repeatPass) {
    //     notifyService.showError('Password and repeated password must match!')
    // } else {

    let data = JSON.stringify({username: username, password: password});
    let requestObj = reqObjMaker.postObj(url, auth, data);
    $.ajax(requestObj)
        .then(function (res) {
            support.saveSession(res);
            notif.showInfo('User registration successful.');
            context.redirect('#/editor');
        })
        .catch(function (err) {
            notif.showError(err.responseText);
            context.redirect('#/editor');
        })

    // }
}
