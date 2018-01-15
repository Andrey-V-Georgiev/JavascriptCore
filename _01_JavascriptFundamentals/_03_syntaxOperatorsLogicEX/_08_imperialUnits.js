function inchesToFoots(input){
    let feet = input / 12;
    let inches = input % 12;
    let first = feet.toString().split('.')[0];

    console.log(`${first}'-${inches}"`);
}

inchesToFoots(55);
