function pitagor(arr) {
    let x1 = Number(arr[0]);
    let y1 = Number(arr[1]);
    let z1 = Number(arr[2]);
    let x2 = Number(arr[3]);
    let y2 = Number(arr[4]);
    let z2 = Number(arr[5]);

    let xDiff = Math.abs(x1 - x2);
    let yDiff = Math.abs(y1 - y2);
    let secondSide = Math.abs(z1 - z2);
    let firstSide = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
    let thirdSide = Math.sqrt(Math.pow(firstSide, 2) + Math.pow(secondSide, 2));
    console.log(thirdSide);
}

pitagor([1, 1, 0, 5, 4, 0]);