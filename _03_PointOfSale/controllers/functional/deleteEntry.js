function deleteEntry(context) {
    let entryId = context.params.entryId.substring(1);
    let url = urlMaker.deleteEntryUrl(entryId);
    let auth = support.kinveyAuth();
    let reqObj = reqObjMaker.delObj(url, auth);
    $.ajax(reqObj)
        .then(function (res) {
            notif.showInfo('Entry removed.');
            context.redirect('#/active/receipt');
        })
        .catch(function (err) {
            notif.showError(err.responseText);
            context.redirect('#/active/receipt');
        })
}
