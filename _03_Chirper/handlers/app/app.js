$(() => {
    Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        //register view
        this.get('index.html', (context) => loginPageRender(context));
        this.get('#/register', (context) => renderRegisterPage(context));
        this.post('#/register', (context) => register(context));

        //login view
        this.get('#/login', (context) => loginPageRender(context));
        this.post('#/login',(context) => login(context));

        //feedPage
        this.get('#/feedPage', (context) => feedPageRender(context));

        //logout
        this.get('#/logout', (context) => logout(context));

        //discoverPage
        this.get('#/discoverPage', (context) => discoverPageRender(context));

        //mePage
        this.get('#/mePage', (context) => myPageRender(context));

        //userPage
        this.get('#/profile/:author', (context) => userPageRender(context));

        //create chirp
        this.get('#/createChirp', (context) => createChirp(context));

        //delete chirp
        this.get('#/deleteChirp/:chirpId', (context) => deleteChirp(context))

    }).run();
});