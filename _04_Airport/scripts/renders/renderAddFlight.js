function renderAddFlight(context) {

    if(support.isLogged()) {
        let partials = {
            footer: './templates/common/footer.hbs',
            notif: './templates/common/notif.hbs',
            nav: './templates/common/nav.hbs'
        };
        context.username = sessionStorage.getItem('username');
        context.isLogged = support.isLogged();
        context.loadPartials(partials).then(function () {
            this.partial("./templates/addFlightView/addFlightView.hbs");
        })
    } else {
        context.redirect('#/register');
    }
}