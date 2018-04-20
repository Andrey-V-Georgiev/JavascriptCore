function getActiveReceipt() {
    let userId = sessionStorage.getItem('userId');
    let url = urlMaker.getActiveReceiptUrl(userId);
    let auth = support.kinveyAuth();
    let reqObj = reqObjMaker.getObj(url, auth);
    return $.ajax(reqObj);
}
