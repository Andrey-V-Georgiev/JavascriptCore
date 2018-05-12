$(() => {
    Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        //REGISTER
        this.get('index.html', (context) => renderRegister(context));
        this.get('#/register', (context) => renderRegister(context));
        this.post('#/register', (context) => register(context));

        //LOGIN
        this.get('#/login', (context) => renderLogin(context));
        this.post('#/login', (context) => login(context));

        //HOME
        this.get('#/home', (context) => renderHome(context));

        //LOGOUT
        this.get('#/logout', (context) => logout(context));

        //ADD FLIGHT
        this.get('#/addFlight', (context) => renderAddFlight(context));
        this.post('#/addFlight', (context) => addFlight(context));

        //DETAILS
        this.get('#/details/:flightId', (context) => renderDetails(context));

        //EDIT
        this.get('#/edit/:flightId', (context) => renderEdit(context));
        this.post('#/edit/:flightId', (context) => edit(context));

        //MY FLIGHTS
        this.get('#/myFlights', (context) => renderMyFlights(context));

        //REMOVE
        this.get('#/remove/:flightId', (context) => removeFlight(context));

    }).run();
});