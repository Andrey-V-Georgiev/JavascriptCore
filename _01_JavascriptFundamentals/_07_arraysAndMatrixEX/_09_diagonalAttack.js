function checkDiagonals(arr) {
    let matrix = [];
    for (let row = 0; row < arr.length; row++) {
        matrix[row] = arr[row].split(' ').map(Number);
    }
    let firstDiagonalArr = [];
    let secondDiagonalArr = [];

    let firstDiagonalCol = 0;
    for (let row = 0; row < matrix.length; row++) {
        firstDiagonalArr.push(matrix[row][firstDiagonalCol++]);
    }

    let secondDiagonalCol = matrix[0].length - 1;
    for (let row = 0; row < matrix.length; row++) {
        secondDiagonalArr.push(matrix[row][secondDiagonalCol--]);
    }

    let firstDiagonalSum = firstDiagonalArr.reduce((a, b) => a + b);
    let secondDiagonalSum = secondDiagonalArr.reduce((a, b) => a + b);

    if (firstDiagonalSum === secondDiagonalSum ){
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[0].length; col++) {
                matrix[row][col] = firstDiagonalSum;
            }
        }
        firstDiagonalCol = 0;
        for (let row = 0; row < matrix.length; row++) {
            matrix[row][firstDiagonalCol++] = firstDiagonalArr.shift();
        }
        secondDiagonalCol = matrix[0].length - 1;
        for (let row = 0; row < matrix.length; row++) {
            matrix[row][secondDiagonalCol--] = secondDiagonalArr.shift();
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        console.log(matrix[row].join(' '));
    }
}

checkDiagonals(['5 3 12 3 1',
               '11 4 23 2 5',
               '101 12 3 21 10',
               '1 4 5 2 2',
               '5 22 33 11 1']);
