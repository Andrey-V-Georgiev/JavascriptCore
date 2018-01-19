function checkThePoints(arr){
    let xBox = 50;
    let yBox = 80;
    let zBox = 50;

    for (let i = 0; i < arr.length; i+=3) {
        let x = arr[i];
        let y = arr[i + 1];
        let z = arr[i + 2];

        if(x >= 0 && x <= xBox && y >= 0 && y <= yBox && z >= 0 && z <= zBox){
            console.log('inside');
        } else {
            console.log('outside');
        }
    }
}

checkThePoints([13.1, 50, 31.5,50, 80, 50, -5, 18, 43]);

