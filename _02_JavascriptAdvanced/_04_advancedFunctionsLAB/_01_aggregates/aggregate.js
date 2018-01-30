function aggregate(arr){
    function reduce(arr, func) {
        let result = arr[0];
        for (let nextElement of arr.slice(1))
            result = func(result, nextElement);
        return result;
    }

    let sum = reduce(arr, (a, b)=> a + b)
    console.log(`Sum = ${sum}`);
    let min = reduce(arr, (a, b) => Math.min(a, b));
    console.log(`Min = ${min}`);
    let max = reduce(arr, (a, b) => Math.max(a, b));
    console.log(`Max = ${max}`);
    let product = reduce(arr, (a, b) => a * b);
    console.log(`Product = ${product}`);
    let join = reduce(arr, (a, b) => a.toString() + b.toString());
    console.log(`Join = ${join}`);
}

aggregate([2,3,10,5]);
