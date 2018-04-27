async function countFollowing() {
    let username = sessionStorage.getItem('username');
    let url = urlMaker.countFollowing(username);
    let auth = support.kinveyAuth();
    let reqObj = requestMaker.getObj(url, auth);
    return $.ajax(reqObj);
}