function discoverPage() {

    let url = urlMaker.discoverPage();
    let auth = support.kinveyAuth();
    let reqObj = requestMaker.getObj(url, auth);
    return $.ajax(reqObj);
}