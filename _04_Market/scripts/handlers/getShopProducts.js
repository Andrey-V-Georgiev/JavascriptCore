function getShopProducts() {
    let url = urlMaker.getShopProducts();
    let auth = support.kinveyAuth();
    let reqObj = requestMaker.getObj(url, auth);
    return $.ajax(reqObj);
}