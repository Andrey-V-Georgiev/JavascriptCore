function validityChecker(arr){
    let [x1, y1, x2, y2] = arr;
    let first = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    let second = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    let xDiff = Math.abs(x1 - x2);
    let yDiff = Math.abs(y1 - y2);
    let third = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));

    let firstStatement = first % 1 === 0 ? 'valid' : 'invalid';
    let secondStatement = second % 1 === 0 ? 'valid' : 'invalid';
    let thirdStatement = third % 1 === 0 ? 'valid' : 'invalid';
    console.log(`{${x1}, ${y1}} to {0, 0} is ${firstStatement}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${secondStatement}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${thirdStatement}`);
}

validityChecker([2, 1, 1, 1]);