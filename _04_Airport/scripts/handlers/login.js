function login(context) {

    let url = urlMaker.login();
    let auth = support.basicAuth();

    let username = context.params.username;
    let password = context.params.pass;

    if(!/[\w]{5,}/.exec(username)) {
        notify.showError('Username must be 5 or mor letters!');
    } else if(password.length === 0) {
        notify.showError('Password can not be empty!');
    } else {
        let data = JSON.stringify({username: username, password: password});

        let requestObj = requestMaker.postObj(url, auth, data);
        $.ajax(requestObj)
            .then(function (res) {
                support.saveSession(res);
                notify.showInfo('Login successful.');
                context.redirect('#/home');
            })
            .catch(function (err) {
                notify.handleError(err);
                context.redirect('#/login');
            })
    }

}