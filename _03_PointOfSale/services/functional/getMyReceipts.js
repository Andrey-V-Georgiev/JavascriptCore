function getMyReceipts() {
    let userId = sessionStorage.getItem('userId');
    let url = urlMaker.getMyReceiptsUrl(userId);
    let auth = support.kinveyAuth();
    let reqObj = reqObjMaker.getObj(url, auth);
    return $.ajax(reqObj).then(function (res) {
        if (res.length === 0) {
            return [];
        } else {
            return res;
        }
    })
}