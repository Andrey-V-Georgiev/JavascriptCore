function overview(context) {
    getMyReceipts()
        .then(function (receipts) {
            let total = 0;
            for (let receipt of receipts) {
                let timeArr = receipt._kmd.ect.split(/[T.]/);
                let date = timeArr[0];
                let hour = timeArr[1];
                receipt.creationTime = `${date} ${hour}`;
                total += receipt.total;
            }
            context.isLogged = support.isLogged();
            context.cashier = sessionStorage.getItem('username');
            context.total = total.toFixed(2);
            context.allReceipts = receipts;

            let partials = {
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                notif: './templates/common/notif.hbs',
                overviewRow: "./templates/overview/overviewRow.hbs"
            };
            context.loadPartials(partials).then(function () {
                this.partial("./templates/overview/overviewPage.hbs");
            })
        });
}