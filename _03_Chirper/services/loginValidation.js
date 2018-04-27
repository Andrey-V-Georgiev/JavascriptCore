function loginValidation(context) {
    let username = context.params.username;
    let password = context.params.password;

    // if (!/[\w]{5,}/.test(username)) {
    //     //TODO notification
    //     console.log('Username must be 5 or more letters long!');
    //     return false;
    // } else if (password.length === 0) {
    //     //TODO notification
    //     console.log('Password can not be empty!');
    //     return false;
    // } else {
        return true;
    //}
}