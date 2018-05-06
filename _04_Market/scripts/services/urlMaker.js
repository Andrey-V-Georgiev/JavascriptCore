let urlMaker = (() => {

    function register () {
        return `${support.baseUrl()}/user/${support.appKey()}`;
    }

    function login () {
        return `${support.baseUrl()}/user/${support.appKey()}/login`;
    }

    function logout() {
        return `${support.baseUrl()}/user/${support.appKey()}/_logout`;
    }

    function getShopProducts() {
        return `${support.baseUrl()}/appdata/${support.appKey()}/products`;
    }

    function getShopProductByID(productId) {
        return `${support.baseUrl()}/appdata/${support.appKey()}/products/${productId}`;
    }

    function getMyDetails(myId) {
        return `${support.baseUrl()}/user/${support.appKey()}/${myId}`;
    }

    function updateUser(userId) {
        return `${support.baseUrl()}/user/${support.appKey()}/${userId}`;
    }

    return {
        register,
        login,
        logout,
        getShopProducts,
        getShopProductByID,
        getMyDetails,
        updateUser
    }
})();