class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.products = [];
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId() {
        return this._clientId;
    }

    set clientId(value) {
        let properLength = value.length === 6;
        let properType = typeof value === 'string';
        if (properLength && properType) {
            this._clientId = value;
        } else {
            throw new TypeError('Client ID must be a 6-digit number');
        }
    }

    get email() {
        return this._email;
    }

    set email(value) {
        let reg = /[a-zA-Z0-9]+@[a-zA-Z\s]+/g;
        if (reg.test(value)) {
            this._email = value;
        } else {
            throw new TypeError('Invalid e-mail');
        }
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        let properLength = value.length >= 3 && value.length <= 20;
        let onlyLatin = /^[a-zA-Z]+$/g.test(value);
        if(!properLength){
            throw new TypeError('First name must be between 3 and 20 characters long');
        }else if(!onlyLatin) {
            throw new TypeError('First name must contain only Latin characters');
        } else {
            this._firstName = value;
        }
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        let properLength = value.length >= 3 && value.length <= 20;
        let onlyLatin = /^[a-zA-Z]+$/g.test(value);
        if(!properLength){
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }else if(!onlyLatin) {
            throw new TypeError('Last name must contain only Latin characters');
        } else {
            this._firstName = value;
        }
    }
}


let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');
console.log(acc);