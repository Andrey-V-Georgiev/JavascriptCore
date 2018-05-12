async function renderHome(context) {

    if (support.isLogged()) {
        let partials = {
            footer: './templates/common/footer.hbs',
            notif: './templates/common/notif.hbs',
            nav: './templates/common/nav.hbs',
            publishedFlight: "./templates/homeView/publishedFlight.hbs"
        };
        let publishedFlights = await getPublishedFlights();

        context.publishedFlights = publishedFlights;
        context.username = sessionStorage.getItem('username');
        context.isLogged = support.isLogged();
        context.loadPartials(partials).then(function () {
            this.partial("./templates/homeView/homeView.hbs");
        })
    } else {
        context.redirect('#/register');
    }
}