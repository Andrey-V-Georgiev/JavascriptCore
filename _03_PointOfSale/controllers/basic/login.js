function login(context) {
    let url = urlMaker.loginUrl();
    let auth = support.basicAuth();
    let username = context.params.username;
    let password = context.params.password;

    // if (!/[\w]{5,}/.test(username)) {
    //     notifyService.showError('Username must be 5 or more letters long!')
    // } else if (password.length === 0) {
    //     notifyService.showError('Password can not be empty!')
    // } else {

    let data = JSON.stringify({username: username, password: password});
    let reqObj = reqObjMaker.postObj(url, auth, data);
    $.ajax(reqObj)
        .then(function (res) {
            support.saveSession(res);
            notif.showInfo('Login successful.');
            context.redirect('#/editor');
        }).catch(function (err) {
        notif.showError(err.responseText);
        context.redirect('index.html');
    })
    // }
}
