class Repository {
    constructor(obj) {
        this.id = 0;
        this.props = obj;
        this.propsKeys = Object.keys(this.props);
        this.data = new Map();
    }

    validEntity(entity) {
        let entityKeys = Object.keys(entity);
        for (let k of this.propsKeys) {
            if (entityKeys.includes(k)) {
                if (typeof entity[k] !== this.props[k]) {
                    throw new TypeError(`Property ${k} is of incorrect type!`);
                }
            } else {
                throw new Error(`Property ${k} is missing from the entity!`);
            }
        }
        return true;
    }

    idExists(id) {
       if(this.data.has(id)){
           return true;
       } else {
           throw new Error(`Entity with id: ${id} does not exist!`);
       }
    }

    add(entity) {
        if (this.validEntity(entity)) {
            this.data.set(this.id, entity);
            return this.id++;
        }
    };

    get(id) {
        if(this.idExists(id)) {
            return this.data.get(id);
        }
    };

    update(id, newEntity) {
        if(this.idExists(id)) {
            if(this.validEntity(newEntity)){
                this.data.set(id, newEntity);
            }
        }
    };

    del(id) {
        if(this.idExists(id)) {
            this.data.delete(id);
        }
    };

    get count() {
        return this.data.size;
    };

}

// Initialize props object
let properties = {
    name: "string",
    age: "number",
    birthday: "object"
};
//Initialize the repository
let repository = new Repository(properties);
// Add two entities
let entity = {
    name: "Kiril",
    age: 19,
    birthday: new Date(1998, 0, 7)
};
repository.add(entity); // Returns 0
repository.add(entity); // Returns 1
console.log(repository.get(0));
// {"name":"Kiril","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
console.log(repository.get(1));
//{"name":"Kiril","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
//Update an entity
entity = {
    name: 'Valio',
    age: 19,
    birthday: new Date(1998, 0, 7)
};
repository.update(1, entity);
console.log(repository.get(1));
// {"name":"Valio","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
// Delete an entity
repository.del(0);
console.log(repository.count); // Returns 1
let anotherEntity = {
    name1: 'Nakov',
    age: 26,
    birthday: new Date(1991, 0, 21)
};
// repository.add(anotherEntity); // should throw an Error
// anotherEntity = {
//     name: 'Nakov',
//     age: 26,
//     birthday: 1991
// };
// repository.add(anotherEntity); // should throw a TypeError
// repository.del(-1); // should throw Error for invalid id
