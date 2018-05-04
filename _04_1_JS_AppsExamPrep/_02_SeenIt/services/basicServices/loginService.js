let loginService = (() => {

    //LOGIN REQUEST
    function loginRequest(username, password) {
        let base_url = authService.get('base_url');
        let app_key = authService.get('app_key');
        let req = {
            method: 'POST',
            url: `${base_url}/user/${app_key}/login`,
            headers: authService.basicAuth(),
            data: {username, password}
        };
        return $.ajax(req);
    }

    //LOGIN LOGIC
    function login(context) {
        let username = context.params.username;
        let password = context.params.password;
        // if (!/[\w]{3,}/.test(username)) {
        //     notifyService.showError('Username must be 3 or more letters long!')
        // } else if (!/[\d\w]{6,}/.test(password)) {
        //     notifyService.showError('Password must be 6 or more letters/digits long!')
        // } else {

            loginRequest(username, password)
                .then(function(res) {
                    authService.saveSession(res);
                    notifyService.showInfo('You are logged in!');
                    context.redirect('#/catalog');
                })
                .catch((res) => {
                    notifyService.showError('Invalid username or password');
                    context.redirect('index.html');
                })

       // }
    }

    return {
        login
    }
})();