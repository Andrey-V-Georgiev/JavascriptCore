let urlMaker = (() => {

    function register () {
        //Authorization: Basic
        //POST https://baas.kinvey.com/user/app_key/
        return `${support.baseUrl()}/user/${support.appKey()}`;
    }

    function login () {
        //Authorization: Basic
        //POST https://baas.kinvey.com/user/app_key/login
        return `${support.baseUrl()}/user/${support.appKey()}/login`;
    }

    function logout() {
        //Authorization: Kinvey
        //POST https://baas.kinvey.com/user/app_key/_logout
        return `${support.baseUrl()}/user/${support.appKey()}/_logout`;
    }

    function listAllChirps(subscriptions) {
        //Authorization: Kinvey
        //GET https://baas.kinvey.com/appdata/app_key/chirps?query={"author":{"$in": [subs]}}&sort={"_kmd.ect": 1}
        return `${support.baseUrl()}/appdata/${support.appKey()}/chirps?query={"author":{"$in":${subscriptions}}}&sort={"_kmd.ect": 1}`;
    }

    function createChirp() {
        //Authorization: Kinvey
        //POST https://baas.kinvey.com/appdata/app_key/chirps
        return `${support.baseUrl()}/appdata/${support.appKey()}/chirps`;
    }

    function deleteChirp(chirpId) {
        //Authorization: Kinvey
        //DELETE https://baas.kinvey.com/appdata/app_key/chirps/chirp_id
        return `${support.baseUrl()}/appdata/${support.appKey()}/chirps/${chirpId}`;
    }

    function userChirps(username) {
        //Authorization: Kinvey
        //GET https://baas.kinvey.com/appdata/app_key/chirps?query={"author":"username"}&sort={"_kmd.ect": 1}
        return `${support.baseUrl()}/appdata/${support.appKey()}/chirps?query={"author":"${username}"}&sort={"_kmd.ect": 1}`;
    }

    function countChirps(username) {
        //Authorization: Kinvey
        //GET https://baas.kinvey.com/appdata/app_key/chirps?query={"author":"username"}
        return `${support.baseUrl()}/appdata/${support.appKey()}/chirps?query={"author":"${username}"}`;
    }

    function countFollowing(username) {
        //Authorization: Kinvey
        //GET https://baas.kinvey.com/user/app_key/?query={"username":"username"}
        return `${support.baseUrl()}/user/${support.appKey()}/?query={"username":"${username}"}`;
    }

    function countFollowers(username) {
        //Authorization: Kinvey
        //GET https://baas.kinvey.com/user/app_key/?query={"subscriptions":"username"}
        return `${support.baseUrl()}/user/${support.appKey()}/?query={"subscriptions":"${username}"}`;
    }

    function discoverPage() {
        //Authorization: Kinvey
        //GET https://baas.kinvey.com/user/app_key/
        return `${support.baseUrl()}/user/${support.appKey()}`;
    }

    function follow(userId) {
        //Authorization: Kinvey
        //PUT https://baas.kinvey.com/user/app_key/user_id
        return `${support.baseUrl()}/user/${support.appKey()}/${userId}`;
    }

    function unfollow(userId) {
        //Authorization: Kinvey
        //PUT https://baas.kinvey.com/user/app_key/user_id
        return `${support.baseUrl()}/user/${support.appKey()}/${userId}`;
    }

    return {
        register,
        login,
        logout,
        listAllChirps,
        createChirp,
        deleteChirp,
        userChirps,
        countChirps,
        countFollowing,
        countFollowers,
        discoverPage,
        follow,
        unfollow
    }
})();

