function renderHomePage(context) {

    let partials = {
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
        notify: './templates/common/notify.hbs'
    };

    context.loadPartials(partials).then(function() {
        context.isLogged = support.isLogged();
        context.user = sessionStorage.getItem('username');
        this.partial('./templates/homeView/homeView.hbs');
    })

}