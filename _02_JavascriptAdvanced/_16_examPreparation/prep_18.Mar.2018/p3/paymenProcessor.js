class PaymentProcessor {
    constructor(options)  {
        this.options = {types: ["service", "product", "other"], precision: 2};
        if(options !== undefined) {this.setOptions(options)}
        this._registerPayment = new Map();
        this.balance = 0;
    }

    registerPayment(id, name, type, value) {
        if(arguments.length !== 4){
            throw new Error('wrong arguments count');
        }
        if(this._registerPayment.has(id) || id === ''){
            throw new Error('Wrong ID');
        }
        if(name === ''){
            throw new Error('Name can`t be empty string');
        }

        if(!this.options.types.includes(type)){
            throw new Error('invalid type');
        }
        if(typeof value !== 'number' || value < 0){
            throw new Error('invalid value');
        }

        let newPayment = {
            id: id,
            name: name,
            type: type,
            value: Number(parseFloat(value).toFixed(2))
        };

        this._registerPayment.set(id, newPayment);
        this.balance = this.balance + Number(parseFloat(value).toFixed(2));
    }

    deletePayment(id){
        if(this._registerPayment.has(id)){
            this._registerPayment.delete(id);
        } else {
            throw new Error('ID not found');
        }
    }

    get(id){
        if(this._registerPayment.has(id)){
            let output = `Details about payment ID: ${id}\n- Name: ${this._registerPayment.get(id).name}\n- Type: ${this._registerPayment.get(id).type}\n- Value: ${this._registerPayment.get(id).value}`;
            return output;
        } else {
            throw new Error('ID not found');
        }
    }

    setOptions(options) {
       if(options.hasOwnProperty('types')){
           this.options.types = options.types;
       }
       if(options.hasOwnProperty('precision')){
           this.options.precision = options.precision;
       }
    }

    toString() {
        return `Summary:\n- Payments: ${this._registerPayment.size}\n- Balance: ${Number(parseFloat(this.balance).toFixed(2))}`
    }
}



const generalPayments = new PaymentProcessor();

    //generalPayments.registerPayment('', 'Microchips', 'product', 15000);

    //generalPayments.registerPayment('0001', '', 'product', 15000);

    //generalPayments.registerPayment('0001', 'Microchips', 'material', 15000);

    generalPayments.registerPayment('0001', 'Microchips', 'product', 'money');

    //const entry = generalPayments.get('0001');

    //generalPayments.deletePayment('0001');

//expect(error1, "Invalid ID was not detected").to.throw();
//expect(error2, "Invalid name was not detected").to.throw();
//expect(error3, "Invalid type was not detected").to.throw();
//expect(error4, "Invalid value was not detected").to.throw();
//expect(error5, "Getting missing entry should throw").to.throw();
//expect(error6, "Deleting missing entry should throw").to.throw();

    //generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);

    //generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);

//expect(error7, "Adding duplicate ID should throw").to.throw();


