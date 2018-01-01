function findTHeDiagonals(matrix) {
    let firstDiagonal = findFirstDiagonal();
    let secondDiagonal = findSecondDiagonal();
    function findFirstDiagonal() {
        let sum = 0;
        let position = 0;
        for (let row = 0; row < matrix.length; row++) {
                sum += Number(matrix[row][position]);
                position++;
        }
        return sum;
    }
    function findSecondDiagonal() {
        let sum = 0;
        let position = matrix[0].length - 1;
        for (let row = 0; row < matrix.length; row++) {
                sum += Number(matrix[row][position]);
                position--;
        }
        return sum;
    }
    console.log(`${firstDiagonal} ${secondDiagonal}`);
}

findTHeDiagonals([[20, 40],[10, 60]]);
