function sortArrays(input) {
    let map = new Map();
    let counter = 0;
    for (let arrJSON of input) {
        let arr = JSON.parse(arrJSON);
        arr.sort((a, b) => b - a);
        let currentKey = arr.join(', ').toString();
        if (map.size === 0) {
            map.set(currentKey, counter++);
        } else {
            if(!map.has(currentKey)){
                map.set(currentKey, counter++);
            }
        }
    }

    let output = new Map([...map.entries()].sort(
        function(a, b){
            let [aKey, aValue] = a;
            let [bKey, bValue] = b;
            if(aKey.length < bKey.length){
                return -1;
            } else if(aKey.length > bKey.length){
                return 1;
            } else {
                return aValue - bValue;
            }
        }
    ));

    for (let entry of output) {
        let [key, value] = entry;
        console.log(`[${key}]`);
    }
}

sortArrays(
    ["[-3, -2, -1, 0, 1, 2, 3, 4]",
        "[10, 1, -17, 0, 2, 13]",
        "[4, -3, 3, -2, 2, -1, 1, 0]"]
);