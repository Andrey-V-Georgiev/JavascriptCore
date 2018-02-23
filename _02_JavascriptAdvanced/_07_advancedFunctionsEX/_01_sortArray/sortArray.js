function solve(arr, direction){
    let ascendingComparator = function (a, b){
        return a - b;
    };
    let descendingComparator = function (a, b){
        return b - a;
    };
    let sortingStrategies = {
        'asc': ascendingComparator,
        'desc': descendingComparator
    };
    return arr.sort(sortingStrategies[direction]);
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));
