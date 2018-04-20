function addEntry(context) {
    checkForActiveReceipt();
    let entryType = context.params.type;
    let quantity = context.params.qty;
    let pricePerUnit = context.params.price;

    if (entryType.length === 0) {
        notif.showInfo(`Product name can't be empty!`);
        context.redirect('#/editor');
        return;
    } else if (quantity.length === 0) {
        notif.showInfo(`Quantity field can't be empty!`);
        context.redirect('#/editor');
        return;
    } else if (isNaN(quantity)) {
        notif.showInfo(`Quantity must be number!`);
        context.redirect('#/editor');
        return;
    } else if (pricePerUnit.length === 0) {
        notif.showInfo(`Price field can't be empty!`);
        context.redirect('#/editor');
        return;
    } else if (isNaN(pricePerUnit)) {
        notif.showInfo(`Price must be number!`);
        context.redirect('#/editor');
        return;
    }

    getActiveReceipt()
        .then(function (res) {
            let activeReceiptID = res[0]._id;
            let url = urlMaker.addEntryUrl();
            let auth = support.kinveyAuth();
            let data = JSON.stringify({
                type: entryType,
                qty: quantity,
                price: pricePerUnit,
                receiptId: activeReceiptID
            });
            let reqObj = reqObjMaker.postObj(url, auth, data);
            $.ajax(reqObj)
                .then(function (res) {
                    notif.showInfo('Entry added.');
                    context.redirect('#/editor');
                })
                .catch(function (err) {
                    notif.showError(err.responseText);
                    context.redirect('#/editor');
                });
        })
        .catch(function (err) {
            notif.showError(err.responseText);
            context.redirect('#/editor');
        });
}
