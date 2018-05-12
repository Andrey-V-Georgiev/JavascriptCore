function getEntriesByReceiptID () {
  return getActiveReceipt()
    .then(function (activeReceipts) {
      if (activeReceipts.length === 0) {
        return []
      } else {
        let activeReceiptID = activeReceipts[0]._id
        let url = urlMaker.getEntriesByReceiptIDUrl(activeReceiptID)
        let auth = support.kinveyAuth()
        let reqObj = reqObjMaker.getObj(url, auth)
        return $.ajax(reqObj)
      }
    })
}
