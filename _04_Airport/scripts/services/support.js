let support = (() => {

    function baseUrl() {
        return 'https://baas.kinvey.com'
    }

    function appKey() {
        return 'kid_HJOIlCApz';
    }

    function appSecret() {
        return '6411ef1319b5405da7f140543c1e183a';
    }

    function basicAuth() {
        return {'Authorization': 'Basic ' + btoa(`${appKey()}:${appSecret()}`)};
    }

    function kinveyAuth() {
        return {'Authorization': 'Kinvey ' + sessionStorage.getItem('authtoken')};
    }

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
        basicAuth,
        kinveyAuth,
        baseUrl,
        appKey,
        appSecret,
    }
})();