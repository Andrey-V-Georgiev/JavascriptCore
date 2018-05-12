function removeFlight(context) {

    let flightId = context.params.flightId.substring(1);
    let url = urlMaker.deleteFlight(flightId);
    let auth = support.kinveyAuth();
    let reqObj = requestMaker.delObj(url, auth);
    $.ajax(reqObj)
        .then(function(res) {
            notify.showInfo('Flight deleted.');
            window.history.back();
        })
        .catch(function (err) {
            notify.handleError(err);
            window.history.back();
        })
}