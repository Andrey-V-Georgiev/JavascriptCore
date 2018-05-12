function deleteEntry (context) {
  let entryId = context.params.entryId.substring(1)
  let url = urlMaker.deleteEntryUrl(entryId)
  let auth = support.kinveyAuth()
  let reqObj = reqObjMaker.delObj(url, auth)
  $.ajax(reqObj)
    .then(function (res) {
      notify.showInfo('Entry removed.')
      context.redirect('#/editor')
    })
    .catch(function (err) {
      notify.handleError(err)
      context.redirect('#/editor')
    })
}
