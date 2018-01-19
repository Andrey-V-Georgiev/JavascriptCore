function cooking(arr){
   let number = Number(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        number = makeChanges(number, arr[i]);
        console.log(number);
    }

    function makeChanges(num, command){
        switch(command){
            case 'chop':
                return num / 2;
            case 'dice':
                return Math.sqrt(num, 2);
            case 'spice':
                return num + 1;
            case 'bake':
                return num * 3;
            case 'fillet':
                return (num * 80) / 100;
        }
    }
}

cooking([32, 'chop', 'chop', 'chop', 'chop', 'chop']);