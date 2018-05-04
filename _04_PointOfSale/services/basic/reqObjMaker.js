let reqObjMaker = (() => {

    function getObj(url, auth) {
        return {
            method: 'GET',
            url: url,
            headers: auth
        };
    }

    function postObj(url, auth, data) {
        return {
            method: 'POST',
            url: url,
            headers: auth,
            contentType: 'application/json',
            data: data
        };
    }

    function delObj(url, auth) {
        return {
            method: 'DELETE',
            url: url,
            headers: auth
        };
    }

    function putObj(url, auth, data) {
        return {
            method: 'PUT',
            url: url,
            headers: auth,
            contentType: 'application/json',
            data: data
        };
    }

    return {
        getObj,
        postObj,
        delObj,
        putObj
    }
})();