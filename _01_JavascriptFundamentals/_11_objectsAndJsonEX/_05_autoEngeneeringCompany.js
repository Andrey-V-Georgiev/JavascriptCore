function carRegister(array) {

    let mainMap = new Map();
    for (let line of array) {
        let [brand, model, quantity] = line.split('|').map(e => e.trim());
        if(!mainMap.has(brand)){
            mainMap.set(brand, new Map().set(model, Number(quantity)));
        } else {
            if(!mainMap.get(brand).has(model)){
                mainMap.get(brand).set(model, Number(quantity));
            } else {
                mainMap.get(brand).set(model, mainMap.get(brand).get(model) + Number(quantity));
            }
        }
    }
    for (let brand of mainMap.keys()) {
        console.log(brand);
        for (let car of mainMap.get(brand)) {
            let [model, quantity] = car;
            console.log(`###${model} -> ${Number(quantity)}`);
        }
    }
}

carRegister([
    "Audi | Q7 | 1000",
    "Audi | Q6 | 100",
    "BMW | X5 | 1000",
    "BMW | X6 | 100",
    "Citroen | C4 | 123",
    "Volga | GAZ-24 | 1000000",
    "Lada | Niva | 1000000",
    "Lada | Jigula | 1000000",
    "Citroen | C4 | 22",
    "Citroen | C5 | 10"]
);
