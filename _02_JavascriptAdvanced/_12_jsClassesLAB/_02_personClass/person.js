class Person {
    constructor(firstName, lastName,age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    toString(){
       return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

let pesho = new Person('Petur','Peshev',23,'pesho@abv.bg');
console.log(pesho.toString());