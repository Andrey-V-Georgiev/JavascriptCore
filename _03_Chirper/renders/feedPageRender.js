async function feedPageRender(context) {

    if(support.isLogged() === true) {
        let partials = {
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            menu: './templates/common/menu.hbs',
            chirp: './templates/feedView/chirp.hbs'
        };
        await setContext(context);

        context.loadPartials(partials).then(function() {
            this.partial('./templates/feedView/feedPage.hbs');
        })
    } else {
        context.redirect('#/login');
    }

    async function setContext(context) {
        let username = sessionStorage.getItem('username');
        context.username = username;
        let allChirps = await listAllChirps(username);
        context.allChirps = allChirps;
        context.noChirps = allChirps.length === 0;
        context.chirps = (await userChirps()).length;
        context.following = (await countFollowing()).length;
        context.followers = (await countFollowers()).length;
    }
}