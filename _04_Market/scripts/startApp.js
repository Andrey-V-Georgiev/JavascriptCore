function startApp() {

    let app = Sammy('#app', function () {
        this.use('Handlebars', 'hbs');

        //HOME VIEW
        this.get('market.html', (context) => renderHomePage(context));
        this.get('#/home', (context) => renderHomePage(context));

        //REGISTER
        this.get('#/register', (context) => renderRegister(context));
        this.post('#/register', (context) => register(context));

        //LOGIN
        this.get('#/login', (context) => renderLogin(context));
        this.post('#/login', (context) => login(context));

        //LOGOUT
        this.get('#/logout', (context) => logout(context));

        //SHOP
        this.get('#/shop', (context) => renderShop(context));

        //PURCHASE
        this.get('#/purchase/:productId', (context) => purchase(context));

        //CART
        this.get('#/cart', (context) => renderCart(context));

        //DISCARD
        this.get('#/discard/:productId', (context) => discard(context));

    });

    app.run();
};