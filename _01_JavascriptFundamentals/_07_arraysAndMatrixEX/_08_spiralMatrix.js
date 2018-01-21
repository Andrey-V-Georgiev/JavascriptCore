function spiralMatrix(rows, cols){
    let matrix = [];
    let counter = 0;
    let exit = rows * cols;

    let topRow = 0;
    let topStart = 0;
    let topLength = cols - 1;

    let rightCol = cols - 1;
    let rightStart = 0;
    let rightLength = rows - 1;

    let bottomRow = rows -1;
    let  bottomStart = cols -1;
    let bottomLength = 0;

    let leftCol = 0;
    let leftStart = rows - 1;
    let leftLength = 0;

    for (let r = 0; r < rows; r++) {
        matrix[r] = [];
        for (let c = 0; c < cols; c++) {
            matrix[r].push(0);
        }
    }

    while(counter < exit){
        try {
            fillTopRow();
            fillRightCol();
            fillBottomRow();
            fillLeftCol();
        }catch(err){
            printMatrix();
            return;
        }
    }
    printMatrix();

    function printMatrix(){
        for (let row = 0; row < rows; row++) {
            console.log(matrix[row].join(' '));
        }
    }

    function fillTopRow(){
        if(topStart === topLength){
            matrix[topRow][topStart] = ++counter;
            throw 'err';
        }
        for (let col = topStart; col < topLength; col++) {
            matrix[topRow][col] = ++counter;
            if(counter === exit){
                return;
            }
        }
        ++topRow;
        ++topStart;
        --topLength;
    }

    function fillRightCol(){
        if(rightStart === rightLength){
            matrix[rightStart][rightCol] = ++counter;
            throw 'err';
        }
        for (let row = rightStart; row < rightLength; row++) {
               matrix[row][rightCol] = ++counter;
            if(counter === exit){
                return;
            }
        }
        --rightCol;
        ++rightStart;
        --rightLength;
    }

    function fillBottomRow(){
        if(bottomStart === bottomLength){
            matrix[bottomRow][bottomStart] = ++counter;
            throw 'err';
        }
        for (let col = bottomStart; col > bottomLength ; col--) {
            matrix[bottomRow][col] = ++counter;
            if(counter === exit){
                return;
            }
        }
        --bottomRow;
        --bottomStart;
        ++bottomLength;
    }

    function fillLeftCol(){
        if(leftStart === leftLength){
            matrix[leftStart][leftCol] = ++counter;
            throw 'err';
        }
        for (let row = leftStart; row > leftLength; row--) {
            matrix[row][leftCol] = ++counter;
            if(counter === exit){
                return;
            }
        }
        ++leftCol;
        --leftStart;
        ++leftLength;
    }
}

spiralMatrix(4, 4);