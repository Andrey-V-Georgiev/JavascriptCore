function register(context) {

    let url = urlMaker.register();
    let auth = support.basicAuth();

    //if (registerValidation(context)) {
        let username = context.params.username;
        let password = context.params.password;

        let data = JSON.stringify({username: username, password: password, subscriptions: []});
        let requestObj = requestMaker.postObj(url, auth, data);
        $.ajax(requestObj)
            .then(function (res) {
                support.saveSession(res);
                notif.showInfo('User registration successful.');
                context.redirect('#/feedPage');
            })
            .catch(function (err) {
                notif.handleError(err);
                context.redirect('#/registerPage');
            })
    //}
}



