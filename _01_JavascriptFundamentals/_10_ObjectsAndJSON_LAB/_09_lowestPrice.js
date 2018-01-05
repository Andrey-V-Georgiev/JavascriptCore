function lowestPrice(stringArray){
    let map = new Map();
    for (let arr of stringArray) {
        let [town, product, price] = arr.split(' | ');
        if(!map.has(product)){
            map.set(product, {price: Number(price), town: town});
        } else {
            let existingPrice = map.get(product).price;
            if(price < existingPrice){
                map.set(product, {price: Number(price), town: town});
            }
        }
    }
    for (let key of map.keys()) {
        console.log(`${key} -> ${map.get(key).price} (${map.get(key).town})`);
    }
}

lowestPrice([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);