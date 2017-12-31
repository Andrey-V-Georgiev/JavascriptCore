function firstAndLastKNumbers(arr) {
    let k = arr[0];
    arr.slice(1, 1 + k).forEach(e=> console.log(e));
    arr.slice(arr.length - k, arr.length).forEach(e=> console.log(e));
}

firstAndLastKNumbers([2 ,7, 8, 9]);
