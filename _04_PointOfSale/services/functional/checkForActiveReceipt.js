function checkForActiveReceipt() {
    getActiveReceipt()
        .then(function (res) {
            if (res.length === 0) {
                createNewReceipt();
            }
        })
        .catch(function (err) {
            notif.showError(err.responseText);
        })
}
