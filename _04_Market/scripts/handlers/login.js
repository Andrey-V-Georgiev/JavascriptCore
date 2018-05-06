function login(context) {

    let url = urlMaker.login();
    let auth = support.basicAuth();
    let data = JSON.stringify({
        username: context.params.username,
        password: context.params.password,
    });
    let reqObj = requestMaker.postObj(url, auth, data);
    $.ajax(reqObj)
        .then(function(res) {
            support.saveSession(res);
            notify.showInfo('Login successful.');
            setTimeout(() => {context.redirect('#/home')}, 2000);
        })
        .catch(function(err) {
            notify.showError(err);
            setTimeout(() => {context.redirect('#/login')}, 3000);
        })
}