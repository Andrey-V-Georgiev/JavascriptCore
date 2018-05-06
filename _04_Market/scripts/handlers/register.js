function register(context) {

    let url = urlMaker.register();
    let auth = support.basicAuth();
    let data = JSON.stringify({
        username: context.params.username,
        password: context.params.password,
        name: context.params.name
    });
    let reqObj = requestMaker.postObj(url, auth, data);
    $.ajax(reqObj)
        .then(function(res) {
            support.saveSession(res);
            notify.showInfo('User registration successful.');
            setTimeout(() => {context.redirect('#/home')}, 2000);
        })
        .catch(function(err) {
            notify.showError(err);
            setTimeout(() => {context.redirect('#/register')}, 3000);
        })
}