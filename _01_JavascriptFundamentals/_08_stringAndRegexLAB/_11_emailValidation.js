function validate(email){
    let regex = /^[a-zA-Z0-9]+@[a-z]+(\.[a-z]+){1,2}$/;
    console.log(regex.test(email)?'Valid':'Invalid');
}

validate('invalid@email.co.uk');