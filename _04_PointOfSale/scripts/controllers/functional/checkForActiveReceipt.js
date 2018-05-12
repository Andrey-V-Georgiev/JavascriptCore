function checkForActiveReceipt () {
  getActiveReceipt()
    .then(function (res) {
      if (res.length === 0) {
        createNewReceipt()
      }
    })
    .catch(function (err) {
      notify.handleError(err)
    })
}
