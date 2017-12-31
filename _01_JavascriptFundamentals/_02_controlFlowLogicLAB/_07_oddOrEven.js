function oddEven(num) {
    let reminder = num % 2;
    if (reminder == 0) {  // no reminder
        console.log("even");
    } else if (reminder == Math.round(reminder)) { //reminder and rounded reminder are same
        console.log("odd");
    } else {
        console.log("invalid");
    }
}

oddEven(5);