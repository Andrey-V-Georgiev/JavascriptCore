async function discard(context) {
    let productId = context.params.productId.substring(1);
    let myDetails = await getMyDetails();
    let myCart = myDetails.cart;
    delete myCart[productId];
    myDetails.cart = myCart;

    let myId = sessionStorage.getItem('userId');
    let url = urlMaker.updateUser(myId);
    let auth = support.kinveyAuth();
    let data = JSON.stringify(myDetails);
    let reqObj = requestMaker.putObj(url, auth, data);
    $.ajax(reqObj)
        .then(function(res) {
            notify.showInfo('Product discarded.');
            setTimeout(() => {context.redirect('#/cart')}, 2000);
        })
        .catch(function(err) {
            notify.showError(err);
            setTimeout(() => {context.redirect('#/cart')}, 3000);
        })
}