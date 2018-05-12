function details (context) {
  let receiptId = context.params.receiptId.substring(1)
  let url = urlMaker.getEntriesByReceiptIDUrl(receiptId)
  let auth = support.kinveyAuth()
  let reqObj = reqObjMaker.getObj(url, auth)
  $.ajax(reqObj)
    .then(function (entries) {
      context.isLogged = support.isLogged()
      context.cashier = sessionStorage.getItem('username')
      context.allEntriesDetails = entries
      for (let entry of entries) {
        entry.subTotal = entry.qty * entry.price
      }
      let partials = {
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
        notif: './templates/common/notif.hbs',
        detailsRow: './templates/details/detailsRow.hbs'
      }
      context.loadPartials(partials).then(function () {
        this.partial('./templates/details/detailsPage.hbs')
      })
    })
}
