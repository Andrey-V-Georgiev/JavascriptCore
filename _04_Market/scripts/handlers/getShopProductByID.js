function getShopProductByID(productId) {
    let url = urlMaker.getShopProductByID(productId);
    let auth = support.kinveyAuth();
    let reqObj =  requestMaker.getObj(url, auth);
    return $.ajax(reqObj);
}