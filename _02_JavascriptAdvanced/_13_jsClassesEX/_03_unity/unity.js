class Rat {
    constructor(name){
        this.name = '' + name;
        this.unitedRats = [];
    }

    unite(obj) {
        if(obj.constructor.name === 'Rat'){
            this.unitedRats.push(obj);
        }
    }

    getRats() {
        return this.unitedRats;
    }

    toString() {
        let info = this.name + '\n';
        for (let rat of this.unitedRats) {
            info += `##${rat.name}${'\n'}`;
        }
        return info;
    }
}

let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho
