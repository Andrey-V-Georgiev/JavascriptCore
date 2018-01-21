function rotate(arr) {
    let turns = Number(arr.pop());
    turns %= arr.length;
    for (let i = 0; i < turns; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));
}

rotate([1, 2, 3, 4, 2]);