let authService = (() => {
    // authService.get(prop)

    function get(prop) {
        switch(prop) {
            case 'base_url': return 'https://baas.kinvey.com';
            case 'app_key': return 'kid_BJiI9lnjf';
            case 'app_secret': return 'ec9413bd725f4fe79604a894b3684837';
        }
    }
    //  authService.basicAuth()
    function basicAuth() {
        return {'Authorization': 'Basic ' + btoa(`${get('app_key')}:${get('app_secret')}`)};
    }
     //  authService.kinveyAuth()
    function kinveyAuth() {
        return {'Authorization': 'Kinvey ' + sessionStorage.getItem('authtoken')};
    }
    //  authService.isLogged()
    function isLogged() {
        return sessionStorage.getItem('authtoken') !== null;
    }

    function saveSession(res) {
        sessionStorage.setItem('authtoken', res._kmd.authtoken);
        sessionStorage.setItem('username', res.username);
        sessionStorage.setItem('userId', res._id);
    }

    return {
        isLogged,
        saveSession,
        get,
        basicAuth,
        kinveyAuth
    }
})();