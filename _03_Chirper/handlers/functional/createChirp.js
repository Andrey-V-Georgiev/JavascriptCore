function createChirp(context) {

    let text = context.params.text;
    let author = sessionStorage.getItem('username');
    let url = urlMaker.createChirp();
    let auth = support.kinveyAuth();
    let data = JSON.stringify({
        text: text,
        author: author
    });
    let reqObj = requestMaker.postObj(url, auth, data);
    $.ajax(reqObj).then(function(){
        notif.showInfo('Chirp published.');
        window.history.back();
    });
}