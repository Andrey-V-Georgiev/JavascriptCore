function renderRegister(context) {

    let partials = {
        footer: './templates/common/footer.hbs',
        notif: './templates/common/notif.hbs',
        nav: './templates/common/nav.hbs'
    };
    context.isLogged = support.isLogged();
    context.loadPartials(partials).then(function () {
        this.partial("./templates/registerView/registerView.hbs");
    })
}