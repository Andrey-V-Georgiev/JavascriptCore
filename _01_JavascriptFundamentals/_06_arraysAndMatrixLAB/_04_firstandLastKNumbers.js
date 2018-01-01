function firstAndLastKNumbers(arr) {
    let k = arr.shift();
    arr.slice(0, k).forEach(e=> console.log(e));
    arr.slice(-k).forEach(e=>console.log(e));
}

firstAndLastKNumbers([4, 1, 2, 3, 4, 5, 6]);
