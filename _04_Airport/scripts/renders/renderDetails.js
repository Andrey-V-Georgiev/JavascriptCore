async function renderDetails(context) {

    if (support.isLogged()) {
        let partials = {
            footer: './templates/common/footer.hbs',
            notif: './templates/common/notif.hbs',
            nav: './templates/common/nav.hbs'
        };
        let flightId = context.params.flightId.substring(1);

        let flightDetails = await details(flightId);
        console.log(flightDetails);
        context.flightDetails = flightDetails;

        context.username = sessionStorage.getItem('username');
        context.isLogged = support.isLogged();
        context.loadPartials(partials).then(function () {
            this.partial("./templates/flightDetailsView/flightDetailsView.hbs");
        })
    } else {
        context.redirect('#/register');
    }
}