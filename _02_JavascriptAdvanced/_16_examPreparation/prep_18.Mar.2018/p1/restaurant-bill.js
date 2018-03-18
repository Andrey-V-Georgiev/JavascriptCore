function addProduct() {
    let input = $(':input');
    let product = $(input[0]).val();
    let price = $(input[1]).val();
    let tfoot = $('#bill').find('tfoot');
    let tfootTr = $(tfoot).find('tr');
    let tdS = $(tfootTr).find('td');
    let totalElement = $(tdS[1]);
    let oldTotal = $(totalElement).text();
    let newTotal = Number(price) + Number(oldTotal);
    if(product !== '' && price !== ''){
        update(product, price);
    }
    function update(product, price){
        $(totalElement).text(newTotal);
        let newElement = $('<tr>');
        let newProduct = $('<td>').text(product);
        let newPrice = $('<td>').text(price);
        newElement.append(newProduct);
        newElement.append(newPrice);
        $('#product-list').append(newElement);
        $(input[0]).val('');
        $(input[1]).val('');
    }
}