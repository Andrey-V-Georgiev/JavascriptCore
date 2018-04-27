async function listAllChirps() {

    let subscriptions = JSON.stringify(await mySubscriptions());
    let url = urlMaker.listAllChirps(subscriptions);
    let auth = support.kinveyAuth();
    let reqObj = requestMaker.getObj(url, auth);
    let allChirps = await $.ajax(reqObj);
    for (let chirp of allChirps) {
            chirp.time = calcTime(chirp._kmd.ect);
    }
    return allChirps;
}