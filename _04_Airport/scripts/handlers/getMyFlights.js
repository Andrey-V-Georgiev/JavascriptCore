function getMyFlights() {
    let userId = sessionStorage.getItem('userId');
    let url = urlMaker.myFlights(userId);
    let auth = support.kinveyAuth();
    let reqObj = requestMaker.getObj(url, auth);
    return $.ajax(reqObj);
}