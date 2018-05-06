async function renderShop(context) {

    let partials = {
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
        notify: './templates/common/notify.hbs',
        shopProduct: './templates/shopView/shopProduct.hbs'
    };
    context.isLogged = support.isLogged();
    context.user = sessionStorage.getItem('username');
    let shopProducts = await getShopProducts();
    for(let product of shopProducts) {
        product['price'] = product['price'].toFixed(2);
    }
    context.shopProducts = shopProducts;
    context.loadPartials(partials).then(function() {
        this.partial('./templates/shopView/shopView.hbs');
    });
}
