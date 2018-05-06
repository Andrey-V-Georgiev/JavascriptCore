let support = (() => {

    function baseUrl() {
        return 'https://baas.kinvey.com'
    }

    function appKey() {
        return 'kid_HkrfSfqaM'
    }

    function appSecret() {
        return '4a0caa43af5046dab3aa91ff35066306'
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
    }
})();