async function userChirps(username) {
    let url = urlMaker.userChirps(username);
    let auth = support.kinveyAuth();
    let reqObj = requestMaker.getObj(url, auth);
    let userChirps = await $.ajax(reqObj);
    for (let chirp of userChirps) {
        chirp.time = calcTime(chirp._kmd.ect);
    }
    return userChirps;
}