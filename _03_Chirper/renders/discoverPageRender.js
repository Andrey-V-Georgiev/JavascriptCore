async function discoverPageRender(context) {

    if (support.isLogged() === true) {
        let partials = {
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            menu: './templates/common/menu.hbs',
            userbox: './templates/discoverView/userbox.hbs'
        };

        let allUsers = await discoverPage();
        for (let user of allUsers) {
            let username = user.username;
            user.userFollowers = (await countFollowers(username)).length;
        }
        context.allUsers = allUsers;

        context.loadPartials(partials).then(function () {
            this.partial('./templates/discoverView/discoverPage.hbs');
        })
    } else {
        context.redirect('#/login');
    }
}