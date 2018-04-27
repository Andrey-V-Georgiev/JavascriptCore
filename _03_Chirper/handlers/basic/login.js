function login(context) {
    let url = urlMaker.login();
    let auth = support.basicAuth();

    //if (loginValidation(context)) {
    // let username = context.params.username;
    // let password = context.params.password;
    let username = 'az';
    let password = 'az';
    let data = JSON.stringify({username: username, password: password});
    let requestObj = requestMaker.postObj(url, auth, data);
    $.ajax(requestObj)
        .then(function (res) {
            support.saveSession(res);
            notif.showInfo('Login successful.');
            context.redirect('#/feedPage');
        })
        .catch(function (err) {
            notif.handleError(err);
            context.redirect('#/loginPage');
        })
    //}
}