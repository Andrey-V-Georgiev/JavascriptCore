function createNewReceipt () {
  let url = urlMaker.createReceiptUrl()
  let auth = support.kinveyAuth()
  let data = JSON.stringify({active: true, productCount: 0, total: 0})
  let reqObj = reqObjMaker.postObj(url, auth, data)
  $.ajax(reqObj)
    .catch(function (err) {
      notify.handleError(err)
    })
}
