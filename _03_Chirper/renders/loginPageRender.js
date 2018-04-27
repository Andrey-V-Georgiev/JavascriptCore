function loginPageRender(context) {
    let partials = {
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
    };
    context.loadPartials(partials).then(function () {
        this.partial("./templates/loginView/login_Page.hbs");
    })

}