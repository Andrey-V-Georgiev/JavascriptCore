async function purchase(context) {
    let productId = context.params.productId.substring(1);
    let theProduct = await getShopProductByID(productId);
    let myDetails = await getMyDetails();
    let myCart = myDetails['cart'];
    if(myCart === undefined) {
        myCart = {};
    } else {
        myCart = myDetails['cart'];
    }

    if(myCart.hasOwnProperty(productId)) {
        myCart[productId] = {
            quantity: Number(myCart[productId]['quantity']) + 1,
            product: {
                name: theProduct['name'],
                description: theProduct['description'],
                price: theProduct['price']
            }
        }
    } else {
        myCart[productId] = {
            quantity: 1,
            product: {
                name: theProduct['name'],
                description: theProduct['description'],
                price: theProduct['price']
            }
        }
    }

    myDetails.cart = myCart;
    updateUser(myDetails)
        .then(function(res) {
            notify.showInfo('Product purchased.');
            setTimeout(() => {context.redirect('#/shop')}, 2000);
        })
        .catch(function(err) {
            notify.showError(err);
            setTimeout(() => {context.redirect('#/shop')}, 3000);
        })
}