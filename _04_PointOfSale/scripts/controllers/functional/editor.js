function editor (context) {
  checkForActiveReceipt()
  getEntriesByReceiptID()
    .then(function (entries) {
      context.isLogged = support.isLogged()
      context.cashier = sessionStorage.getItem('username')
      context.total = 0
      if (entries.length !== 0) {
        let total = 0
        for (let entry of entries) {
          let subTotal = entry.qty * entry.price
          entry.subTotal = subTotal.toFixed(2)
          total += subTotal
        }
        context.productCount = entries.length
        context.total = total.toFixed(2)
        context.receiptEntries = entries
      }

      let partials = {
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
        notif: './templates/common/notif.hbs',
        editorRow: './templates/editor/editorRow.hbs'
      }
      context.loadPartials(partials).then(function () {
        this.partial('./templates/editor/editorPage.hbs')
      })
    })
}
