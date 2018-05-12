function getPublishedFlights() {

    let url = urlMaker.getPublishedFlights();
    let auth = support.kinveyAuth();
    let reqObj = requestMaker.getObj(url, auth);
    return $.ajax(reqObj);
}