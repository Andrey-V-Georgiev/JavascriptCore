function compaundInterest(arr) {
    let p = Number(arr[0]);
    let i = Number(arr[1]) / 100;
    let n = 12 / Number(arr[2]);
    let t = Number(arr[3]);
    let result = p * Math.pow(1 + (i / n), n * t);
    console.log(result);
}

compaundInterest([1500, 4.3, 3, 6]);

