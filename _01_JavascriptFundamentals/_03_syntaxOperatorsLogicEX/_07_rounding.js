function rounding(arr){
    let precision = Number(arr[1]);
    let numPartArr = arr[0].toString().split(".");
    let front = numPartArr[0];
    let back = numPartArr[1];
    let num = '';
    if(back.length > 15 ){
        num = front + '.' + back.substring(0, 15);
    } else {
        num = front + '.' + back;
    }

    console.log(parseFloat(Number(num).toFixed(precision)));
}


rounding([10.5, 3]);