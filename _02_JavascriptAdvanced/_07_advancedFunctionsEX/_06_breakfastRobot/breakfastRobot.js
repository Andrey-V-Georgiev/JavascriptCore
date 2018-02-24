let manager = (function () {
    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    return function solve(args) {
        let tokens = args.split(' ');
        let command = tokens[0];
        let arg1 = tokens[1];
        let arg2 = Number(tokens[2]);

        function checkStock(ingredient, quantity) {
            switch (ingredient) {
                case 'protein':
                    if (stock.protein - quantity < 0) {
                        throw new Error('Error: not enough protein in stock');
                    }
                    break;
                case 'carbohydrate':
                    if (stock.carbohydrate - quantity < 0) {
                        throw new Error('Error: not enough carbohydrate in stock');
                    }
                    break;
                case 'fat':
                    if (stock.fat - quantity < 0) {
                        throw new Error('Error: not enough fat in stock');
                    }
                    break;
                case 'flavour':
                    if (stock.flavour - quantity < 0) {
                        throw new Error('Error: not enough flavour in stock');
                    }
                    break;
            }
        }

        let cook = {
            apple: (arg2) => {
                //1 carb and 2 flavour
                try {
                    checkStock('carbohydrate', (1 * arg2));
                    checkStock('flavour', (2 * arg2));
                    stock.carbohydrate -= 1 * arg2;
                    stock.flavour -= 2 * arg2;
                    return 'Success';
                } catch (err) {
                    throw new Error(`${err.message}`);
                }
            },
            coke: (arg2) => {
                //10 carb and 20 flavour
                try {
                    checkStock('carbohydrate', (10 * arg2));
                    checkStock('flavour', (20 * arg2));
                    stock.carbohydrate -= 10 * arg2;
                    stock.flavour -= 20 * arg2;
                    return 'Success';
                } catch (err) {
                    throw new Error(`${err.message}`);
                }
            },
            burger: (arg2) => {
                //5 carb, 7 fat and 3 flavour
                try {
                    checkStock('carbohydrate', (5 * arg2));
                    checkStock('fat', (7 * arg2));
                    checkStock('flavour', (3 * arg2));
                    stock.carbohydrate -= 5 * arg2;
                    stock.fat -= 7 * arg2;
                    stock.flavour -= 3 * arg2;
                    return 'Success';
                } catch (err) {
                    throw new Error(`${err.message}`);
                }
            },
            omelet: (arg2) => {
                //5 protein, 1 fat and 1 flavour
                try {
                    checkStock('protein', (5 * arg2));
                    checkStock('fat', (1 * arg2));
                    checkStock('flavour', (1 * arg2));
                    stock.protein -= 5 * arg2;
                    stock.fat -= 1 * arg2;
                    stock.flavour -= 1 * arg2;
                    return 'Success';
                } catch (err) {
                    throw new Error(`${err.message}`);
                }
            },
            cheverme: (arg2) => {
                //10 protein, 10 carb, 10 fat and 10 flavour
                try {
                    checkStock('protein', (10 * arg2));
                    checkStock('carbohydrate', (10 * arg2));
                    checkStock('fat', (10 * arg2));
                    checkStock('flavour', (10 * arg2));
                    stock.protein -= 10 * arg2;
                    stock.carbohydrate -= 10 * arg2;
                    stock.fat -= 10 * arg2;
                    stock.flavour -= 10 * arg2;
                    return 'Success';
                } catch (err) {
                    throw new Error(`${err.message}`);
                }
            }
        };

        switch (command) {
            case'restock':
                switch (arg1) {
                    case 'protein':
                        if (arg2 >= 0) {
                            stock.protein += arg2;
                            return 'Success';
                        }
                        break;
                    case 'carbohydrate':
                        if (arg2 >= 0) {
                            stock.carbohydrate += arg2;
                            return 'Success';
                        }
                        break;
                    case 'fat':
                        if (arg2 >= 0) {
                            stock.fat += arg2;
                            return 'Success';
                        }
                        break;
                    case 'flavour':
                        if (arg2 >= 0) {
                            stock.flavour += arg2;
                            return 'Success';
                        }
                        break;
                }
                break;
            case'prepare' :

                try {
                    switch (arg1) {
                        case 'apple':
                           return cook.apple(arg2);
                        case 'coke':
                            return cook.coke(arg2);
                        case 'burger':
                            return cook.burger(arg2);
                        case 'omelet':
                            return cook.omelet(arg2);
                        case 'cheverme':
                            return cook.cheverme(arg2);
                    }
                    break;
                } catch (err) {
                    return `${err.message}`;
                }

            case'report' :
                return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
        }
    }
})();

console.log(manager("restock protein 100"));
console.log(manager("restock carbohydrate 100"));
console.log(manager("restock fat 100"));
console.log(manager("restock flavour 100"));
console.log(manager("report"));
console.log(manager("prepare apple 2"));
console.log(manager("report"));
console.log(manager("prepare apple 1"));
console.log(manager("report"));



