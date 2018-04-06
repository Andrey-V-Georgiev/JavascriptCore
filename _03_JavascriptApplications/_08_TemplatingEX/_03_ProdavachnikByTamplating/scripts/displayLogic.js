function switchNavbar() {
    if (sessionStorage.length !== 0) {
        switchToLoggedIn();
        async function switchToLoggedIn() {
            let navbarTemplateRaw = await $.get('templates/loggedIn.html');
            let navbarTemplate = Handlebars.compile(navbarTemplateRaw);
            let navbarEl = navbarTemplate();
            let body = $('#menu');
            body.empty();
            body.append(navbarEl);
            body.find('a').css('display', 'inline-block');
            $('#linkHome').click(homeBtnView);
            $('#linkCreateAd').click(showCreateForm);
            $('#linkListAds').click(listTheAdverts);
            $('#linkLogout').click(loggingOut);
        }
    } else {
        switchToLoggedOut();
        async function switchToLoggedOut() {
            let navbarTemplateRaw = await $.get('templates/loggedOut.html');
            let navbarTemplate = Handlebars.compile(navbarTemplateRaw);
            let navbarEl = navbarTemplate();
            let body = $('#menu');
            body.empty();
            body.append(navbarEl);
            body.find('a').css('display', 'inline-block');
            $('#linkHome').click(homeBtnView);
            $('#linkRegister').click(showRegisterForm);
            $('#buttonRegisterUser').click(btnRegister);
            $('#linkLogin').click(showLoginForm);
        }
    }

}

