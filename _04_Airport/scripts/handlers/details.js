function details(flightId) {

    let url = urlMaker.flightDetails(flightId);
    let auth = support.kinveyAuth();
    let reqObj = requestMaker.getObj(url, auth);
    return $.ajax(reqObj);
}