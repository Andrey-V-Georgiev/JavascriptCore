async function renderCart(context) {

    let partials = {
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
        notify: './templates/common/notify.hbs',
        myProduct: './templates/cartView/myProduct.hbs'
    };

    let myDetails = await getMyDetails();
    let myCart = myDetails['cart'];

    for(let i in myCart) {
        let product = myCart[i];
        let quantity = Number(product.quantity);
        let price = Number(product.product.price);
       let totalPrice = quantity * price;
        myCart[i]['totalPrice'] = totalPrice;
        myCart[i]['productId'] = i;
    }

    context.myCart = myCart;
    context.isLogged = support.isLogged();
    context.user = sessionStorage.getItem('username');
    context.loadPartials(partials).then(function () {
        this.partial('./templates/cartView/cartView.hbs')
    })
}