function updateUser(myDetails) {
    let myId = sessionStorage.getItem('userId');
    let url = urlMaker.updateUser(myId);
    let auth = support.kinveyAuth();
    let data = JSON.stringify(myDetails);
    let reqObj = requestMaker.putObj(url, auth, data);
    return $.ajax(reqObj);
}