function renderEdit(context) {

    if(support.isLogged()) {
        let flightId = context.params.flightId.substring(1);
        context.flightId = flightId;

        let partials = {
            footer: './templates/common/footer.hbs',
            notif: './templates/common/notif.hbs',
            nav: './templates/common/nav.hbs'
        };

        context.username = sessionStorage.getItem('username');
        context.isLogged = support.isLogged();
        context.loadPartials(partials).then(function () {
            this.partial("./templates/editFlightView/editFlightView.hbs");
        })

    } else {
        context.redirect('#/register');
    }

}