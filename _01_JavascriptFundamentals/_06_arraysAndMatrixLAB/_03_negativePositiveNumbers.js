function manageTheDeque(arr) {
    let deque = new Array();
    for (let num of arr) {
        if (Number(num) < 0) {
            deque.unshift(num);
        } else {
            deque.push(num);
        }
    }
    deque.forEach(e => console.log(e));
}

manageTheDeque([7, -2, 8, 9]);