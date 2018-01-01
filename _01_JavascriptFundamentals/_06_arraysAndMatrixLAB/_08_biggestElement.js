function findBiggestNum(matrix) {
    let maxNum = Number.NEGATIVE_INFINITY;
    for (let row of matrix) {
        for (let col of row) {
            if (col > maxNum) {
                maxNum = col;
            }
        }
    }
    console.log(maxNum);
}

findBiggestNum([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);


