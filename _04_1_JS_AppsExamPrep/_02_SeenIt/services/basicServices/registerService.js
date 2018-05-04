let registerService = (() => {

    //REGISTER REQUEST
    function registerRequest(username, password) {
        let base_url = authService.get('base_url');
        let app_key = authService.get('app_key');
        let url = `${base_url}/user/${app_key}`;
        let auth = authService.basicAuth();
        let data = {username, password};
        let req = {
            method: 'POST',
            url: url,
            headers: auth,
            data: data
        };
        return $.ajax(req);
    }

    //REGISTER LOGIC
    function register(context) {
        let username = context.params.username;
        let password = context.params.password;
        let repeatPass = context.params.repeatPass;

        // if (!/[\w]{3,}/.test(username)) {
        //     notifyService.showError('Username must be 3 or more letters long!')
        // } else if (!/[\d\w]{6,}/.test(password)) {
        //     notifyService.showError('Password must be 6 or more letters/digits long!')
        // } else if (password !== repeatPass) {
        //     notifyService.showError('Password and repeated password must match!')
        // } else {

        registerRequest(username, password)
            .then(function (res) {
                authService.saveSession(res);
                notifyService.showInfo('You are successfully registered!');
                context.redirect('#/catalog');
            })
            .catch(function (res) {
                notifyService.showError(res);
                context.redirect('index.html');
            })

        // }
    }

    return {
        register
    }
})();