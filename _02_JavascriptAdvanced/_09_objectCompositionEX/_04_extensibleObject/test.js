function result() {

    let myObj = {}
    myObj.extend = function (template) {
        for (let a in template) {
            if( typeof template[a] == 'function'){
                Object.getPrototypeOf(myObj)[a]=template[a]
            } else {
                myObj[a] = template[a]
            }
        }
    }
    return myObj
}


var template = {
    extensionMethod: function () {
        console.log("From extension method")
    }
};

let test = result();
console.log(test.extend(template));
//test.extensionMethod()