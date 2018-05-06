function getMyDetails() {
    let myId = sessionStorage.getItem('userId');
    let url = urlMaker.getMyDetails(myId);
    let auth = support.kinveyAuth();
    let reqObj = requestMaker.getObj(url, auth);
    return $.ajax(reqObj);
}