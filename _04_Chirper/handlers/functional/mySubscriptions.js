async function mySubscriptions() {
    let username = sessionStorage.getItem('username');
    let url = urlMaker.countFollowing(username);
    let auth = support.kinveyAuth();
    let reqObj = requestMaker.getObj(url, auth);
    return (await $.ajax(reqObj))[0].subscriptions;
}