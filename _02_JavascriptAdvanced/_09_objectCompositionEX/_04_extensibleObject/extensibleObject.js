function madafaka(template) {
    let myObj = {
        extend: function (template) {
            for (let i in template) {
                let typeOfField = typeof template[i];
                if (typeOfField === 'function') {
                    Object.getPrototypeOf(this)[i] = template[i];
                } else {
                    this[i] = template[i];
                }
            }
        }
    };
    myObj.extend(template);
    return myObj;
}

let template = {
    prop1: function prop1() {
        console.log('prop1');
    },
    prop2: function prop2() {
        console.log('prop2');
    },
    prop3: 'prop3',
    prop4: 4
};

let test = madafaka;
console.log(test(template));







