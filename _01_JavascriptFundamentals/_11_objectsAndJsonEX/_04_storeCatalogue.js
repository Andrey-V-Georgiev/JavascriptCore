function catalogue(arr) {
    let mainMap = new Map();
    for (let string of arr) {
        let firstLetter = string.substring(0, 1);
        let [keyProduct, valueProduct] = string.split(':').map(x => x.trim());
        if (mainMap.has(firstLetter)) {
            mainMap.get(firstLetter).set(keyProduct, valueProduct);
        } else {
            mainMap.set(firstLetter, new Map().set(keyProduct, valueProduct));
        }
    }
    let sortedMainMap = new Map([...mainMap.entries()].sort());
    for (let sectionName of sortedMainMap.keys()) {
        console.log(sectionName);
        let sectionProducts = sortedMainMap.get(sectionName);
        let sortedSectionProducts = new Map([...sectionProducts.entries()].sort());
        for (let product of sortedSectionProducts) {
            let [key, value] = product;
            console.log(` ${key}: ${value}`);
        }
    }
}

catalogue([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10"
]);
