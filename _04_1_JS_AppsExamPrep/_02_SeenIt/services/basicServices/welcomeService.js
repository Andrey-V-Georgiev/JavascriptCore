let welcomeService = (() => {

    //WELCOME PAGE LOGIC
    function welcomePage(context) {
        context.isLogged = authService.isLogged();
        context.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            navbar: './templates/common/navbar.hbs',
            notifications:'./templates/common/notifications.hbs',
            registerForm: './templates/viewWelcome/registerForm.hbs',
            loginForm: './templates/viewWelcome/loginForm.hbs'
        }).then(function () {
            this.partial("./templates/viewWelcome/welcomePage.hbs");
        });
    }

    return {
        welcomePage
    }
})();
