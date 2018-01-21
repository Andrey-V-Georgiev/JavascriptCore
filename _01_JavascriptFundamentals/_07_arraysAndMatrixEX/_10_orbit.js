function orbit(arr) {
    let [rows, cols, row, col] = arr;
    rows = Math.abs(Number(rows));
    cols = Math.abs(Number(cols));
    row = Math.abs(Number(row));
    col = Math.abs(Number(col));

    let topRow = row - 1;
    let bottomRow = row + 1;
    let horizontalStart = col - 1;
    let horizontalEnd = col + 2;

    let rightCol = col + 1;
    let leftCol = col - 1;
    let verticalStart = row - 1;
    let verticalEnd = row + 2;

    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = '0'.repeat(cols).split('').map(Number);
    }
    matrix[row][col] = 1;
    let initial = 2;
    let counter = 1;

    for (let i = 0; i <= rows; i++) {
        top();
        bottom();
        --horizontalStart;
        ++horizontalEnd;

        right();
        left();
        --verticalStart;
        ++verticalEnd;

        ++initial;
        ++counter;
    }
    print();

    function print() {
        for (let i = 0; i < rows; i++) {
            console.log(matrix[i].join(' '));
        }
    }

    function top() {
        if (topRow < 0) {
            return;
        }
        for (let c = Math.max(horizontalStart, 0); c < Math.min(horizontalEnd, cols); c++) {
            matrix[topRow][c] = initial;
        }
        --topRow;
    }

    function bottom() {
        if (bottomRow === rows) {
            return;
        }
        for (let c = Math.max(horizontalStart, 0); c < Math.min(horizontalEnd, cols); c++) {
            matrix[bottomRow][c] = initial;
        }
        ++bottomRow;
    }

    function right() {
        if (rightCol === cols) {
            return;
        }
        for (let r = Math.max(0, verticalStart); r < Math.min(verticalEnd, rows); r++) {
            matrix[r][rightCol] = initial;
        }
        ++rightCol;
    }

    function left() {
        if (leftCol === cols) {
            return;
        }
        for (let r = Math.max(0, verticalStart); r < Math.min(verticalEnd, rows); r++) {
            matrix[r][leftCol] = initial;
        }
        --leftCol;
    }
}

orbit([5, 4, -2, 2]);

