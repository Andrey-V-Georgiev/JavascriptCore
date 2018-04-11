$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        //INDEX.HTML LOGIC
        this.get('index.html', (context) => render.homepageComponent(context));

        //HOME LOGIC
        this.get('#/home', (context) => render.homepageComponent(context));

        //ABOUT LOGIC
        this.get('#/about', (context) => render.aboutComponent(context));

        //REGISTER LOGIC
        this.get('#/register', (context) => render.registerComponent(context));
        this.post('#/register', (context) => handle.registration(context));

        //LOGIN LOGIC
        this.get('#/login', (context) => render.loginComponent(context));
        this.post('#/login', (context) => handle.loggingIn(context));

        //CATALOG LOGIC
        this.get('#/catalog', (context) => render.catalogComponent(context));

        //CREATE TEAM LOGIC
        this.get('#/create', (context) => render.createComponent(context));
        this.post('#/create', (context) => handle.creatingTeam(context));

        //TEAM DETAILS LOGIC
        this.get('#/catalog/:ID', (context) => render.teamDetails(context));

        //LOGOUT LOGIC
        this.get('#/logout', () => handle.loggingOut());

        //JOIN LOGIC
        this.get('#/join/:ID', (context) => handle.joining(context));

        //EDIT LOGIC
        this.get('#/edit/:ID', (context) => render.editComponent(context));
        this.post('#/edit/:ID', (context) => handle.updateTeam(context));

        //LEAVE LOGIC
        this.get('#/leave', (context) => handle.leaveTeam(context));


    ///////////////////////////////////////////////////////////////////////
    }).run();
});
