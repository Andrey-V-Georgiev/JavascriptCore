async function userPageRender(context) {

    if (support.isLogged() === true) {
        let partials = {
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            menu: './templates/common/menu.hbs',
            chirp: './templates/feedView/chirp.hbs'
        };
        await setContext(context);

        context.loadPartials(partials).then(function() {
            this.partial('./templates/userView/userPage.hbs');
        })
    } else {
        context.redirect('#/login');
    }

    async function setContext(context) {
        let author = context.params.author.substring(1);
        context.author = author;
        let allChirps = await userChirps(author);
        context.allChirps = allChirps;
        context.chirps = allChirps.length;
        context.noChirps = allChirps.length === 0;
        context.following = (await countFollowing()).length;
        context.followers = (await countFollowers()).length;
        context.isFollowed = await isFollowed(author);
    }
}