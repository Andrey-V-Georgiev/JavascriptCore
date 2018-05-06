function renderLogin(context) {

    let partials = {
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
        notify: './templates/common/notify.hbs'
    };

    context.loadPartials(partials).then(function() {
        this.partial('./templates/loginView/loginView.hbs')
    })
}