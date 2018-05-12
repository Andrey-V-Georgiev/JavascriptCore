async function renderMyFlights(context) {

    if (support.isLogged()) {
        let partials = {
            footer: './templates/common/footer.hbs',
            notif: './templates/common/notif.hbs',
            nav: './templates/common/nav.hbs',
            myFlight: './templates/myFlightsView/myFlight.hbs'
        };
        let myFlights = await getMyFlights();
        context.myFlights = myFlights;

        context.username = sessionStorage.getItem('username');
        context.isLogged = support.isLogged();
        context.loadPartials(partials).then(function () {
            this.partial("./templates/myFlightsView/myFlightsView.hbs");
        })
    } else {
        context.redirect('#/register');
    }
}