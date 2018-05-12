$(() => {
    Sammy('#container', function () {
        this.use('Handlebars', 'hbs');
        //WELCOME
        this.get('index.html', (context) => welcomePage(context));
        //REGISTER
        this.post('#/register', (context) => register(context));
        //LOGIN
        this.post('#/login', (context) => login(context));
        //LOGOUT
        this.get('#/logout', (context) => logout(context));
        //GET ACTIVE RECEIPT
        this.get('#/editor', (context) => editor(context));
        //ADD NEW ENTRY
        this.post('#/add/entry', (context) => addEntry(context));
        //REMOVE ENTRY
        this.get('#/delete:entryId', (context) => deleteEntry(context));
        //CHECKOUT
        this.get('#/checkout', (context) => checkout(context));
        //OVERVIEW
        this.get('#/overview', (context) => overview(context));
        //RECEIPT DETAILS
        this.get('#/details:receiptId', (context) => details(context));

    }).run();
});