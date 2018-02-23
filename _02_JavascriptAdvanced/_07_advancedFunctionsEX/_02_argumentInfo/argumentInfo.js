function result(){
    let tally = {};
    for (let arg of arguments) {
        let type = typeof arg;
        console.log(`${type}: ${arg}`);
        if(!tally[type]){
            tally[type] = 1;
        } else {
            tally[type]++;
        }
    }
    let sortedTally = [];
    for (let key in tally) {
        sortedTally.push([key, tally[key]]);
    }
    sortedTally.sort((a, b) => {
        return b[1] - a[1];
    });
    for (let arr of sortedTally) {
        console.log(`${arr[0]} = ${arr[1]}`);
    }
}

result({ name: 'bob'}, 3.333, 9.999);

