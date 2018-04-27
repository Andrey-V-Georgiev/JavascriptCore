function deleteChirp(context) {

    let chirpId = context.params.chirpId.substring(1);
    let url = urlMaker.deleteChirp(chirpId);
    let auth = support.kinveyAuth();
    let reqObj = requestMaker.delObj(url, auth);
    $.ajax(reqObj).then(function(){
        notif.showInfo('Chirp deleted.');
        window.history.back();
    });
}