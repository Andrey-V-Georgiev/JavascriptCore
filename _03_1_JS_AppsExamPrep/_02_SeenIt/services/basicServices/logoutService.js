let logoutService = (() => {

    //LOGOUT REQUEST
    function logoutRequest() {
        let baseUrl = authService.get('base_url');
        let appKey = authService.get('app_key');
        let req = {
            method: 'POST',
            url: `${baseUrl}/user/${appKey}/_logout`,
            headers: authService.kinveyAuth()
        };
        return $.ajax(req);
    }

    //LOGOUT LOGIC
    function logout(context) {
        logoutRequest()
            .then(function(){
                sessionStorage.clear();
                notifyService.showInfo('You are logged out!');
                context.redirect('#/index.html');
            })
            .catch((res) => {
                notifyService.showError(res);
                context.redirect('index.html');
            })
        }

    return {
        logout,
    }
})();