function printNth(arr){
    let num = arr.pop();
    for (let i = 0; i < arr.length; i++) {
        if(i % num === 0){
            console.log(arr[i]);
        }
    }
}

printNth([5,20,31,4,20,2]);