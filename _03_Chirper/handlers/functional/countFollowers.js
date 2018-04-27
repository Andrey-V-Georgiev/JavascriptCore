function countFollowers(username) {
    let url = urlMaker.countFollowers(username);
    let auth = support.kinveyAuth();
    let reqObj = requestMaker.getObj(url, auth);
    return $.ajax(reqObj);
}