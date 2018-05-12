function register(context) {

    let url = urlMaker.register();
    let auth = support.basicAuth();

    let username = context.params.username;
    let password = context.params.pass;
    let checkPass = context.params.checkPass;

    if(!/[\w]{5,}/.exec(username)) {
        notify.showError('Username must be 5 or mor letters!');
    } else if(password.length === 0) {
        notify.showError('Password can not be empty!');
    } else if(password !== checkPass) {
        notify.showError('Password and repeated password must match!');
    } else {
        let data = JSON.stringify({username: username, password: password});

        let requestObj = requestMaker.postObj(url, auth, data);
        $.ajax(requestObj)
            .then(function (res) {
                support.saveSession(res);
                notify.showInfo('User registration successful.');
                context.redirect('#/home');
            })
            .catch(function (err) {
                notify.handleError(err);
                context.redirect('#/register');
            })
    }

}