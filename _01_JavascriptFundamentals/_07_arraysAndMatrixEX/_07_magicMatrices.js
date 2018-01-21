function checkForMagic(matrix) {
    let baseValue = matrix[0].reduce((a, b) => a + b);

    for (let i = 0; i < matrix.length; i++) {
        let currentRowSum = matrix[i].reduce((a, b) => a + b);
        if (currentRowSum !== baseValue) {
            console.log('false');
            return;
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let currentColSum = 0;
        for (let row = 0; row < matrix.length; row++) {
           currentColSum += matrix[row][col];
        }
        if(currentColSum !== baseValue){
            console.log('false');
            return;
        }
    }
    console.log('true');
}

checkForMagic([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
