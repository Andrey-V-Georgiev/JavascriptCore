function checkout (context) {
  getActiveReceipt()
    .then(function (res) {
      let activeReceiptID = res[0]._id
      getEntriesByReceiptID(activeReceiptID)
        .then(function (entries) {
          if (entries.length !== 0) {
            let total = 0
            entries.forEach((e, i) => {
              total += e.price * e.qty
            })
            let productCount = entries.length
            saveReceipt(total, productCount, activeReceiptID)
          } else {
            context.redirect('#/editor')
          }
        })
        .catch(function (err) {
          notify.handleError(err)
        })
    })
    .catch(function (err) {
      notify.handleError(err)
    })

  function saveReceipt (total, productCount, activeReceiptID) {
    let url = urlMaker.commitReceiptUrl(activeReceiptID)
    let auth = support.kinveyAuth()
    let data = JSON.stringify({
      total: total,
      productCount: productCount,
      active: false
    })
    let reqObj = reqObjMaker.putObj(url, auth, data)
    $.ajax(reqObj)
      .then(function (res) {
        notify.showInfo('Receipt checked out.')
        context.redirect('#/editor')
      })
      .catch(function (err) {
        notify.handleError(err)
      })
  }
}
