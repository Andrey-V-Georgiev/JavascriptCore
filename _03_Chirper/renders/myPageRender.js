async function myPageRender(context) {

    if (support.isLogged() === true) {
        let partials = {
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            menu: './templates/common/menu.hbs',
            myChirp: './templates/meView/myChirp.hbs'
        };
        await setContext(context);

        context.loadPartials(partials).then(function() {
            this.partial('./templates/meView/myPage.hbs');
        })
    } else {
        context.redirect('#/login');
    }

    async function setContext(context) {
        let username = sessionStorage.getItem('username');
        let myChirps = await userChirps(username);
        context.myChirps = myChirps;
        context.chirps = myChirps.length;
        context.noChirps = myChirps.length === 0;

        context.following = (await countFollowing()).length;
        context.followers = (await countFollowers()).length;
    }
}