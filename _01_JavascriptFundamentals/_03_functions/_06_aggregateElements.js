function aggregateElements(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    let inverseSum = 0;
    for (let num of arr) {
        inverseSum += 1 / num;
    }
    let concatStr = "";
    for (let str of arr) {
        concatStr += str;
    }
    console.log(sum);
    console.log(inverseSum);
    console.log(concatStr);
}

aggregateElements([1,2,3]);