function quadraticEquation(a,b,c) {
    // let a = arr[0];
    // let b = arr[1];
    // let c = arr[2];
    let d = Math.pow(b, 2) - 4 * a * c;
    let result = '';

    if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        result = `${x2}\n${x1}`;
    } else if (d === 0) {parseInt()
        let x = -b / (2 * a);
        result = x;
    } else {
        result = 'No';
    }
    return result;
}

console.log(quadraticEquation(6, 11, -35));;

