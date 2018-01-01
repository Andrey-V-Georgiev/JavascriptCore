function findPairCount(matrix) {
    let pairCount = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length - 1; col++) {
            if (matrix[row][col] == matrix[row][col + 1]) {
                pairCount++;
            }
        }
    }
    for (let row = 0; row < matrix.length -1; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] == matrix[row + 1][col]) {
                pairCount++;
            }
        }
    }
    console.log(pairCount);
}

findPairCount([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]);