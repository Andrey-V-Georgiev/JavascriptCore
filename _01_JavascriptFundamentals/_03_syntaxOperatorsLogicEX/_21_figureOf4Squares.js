function printFigure(n){
    let rows = n % 2 === 0 ? n-1 : n;
    let rowsRep = (rows - 3) / 2;
    let cols = 2 * n - 1;
    let colRep = (cols - 3) / 2;
    //first row
    let result = `+${'-'.repeat(colRep)}+${'-'.repeat(colRep)}+\n`;
    for (let i = 0; i < rowsRep; i++) {
        result += `|${' '.repeat(colRep)}|${' '.repeat(colRep)}|\n`;
    }
    //middle row
    result += `+${'-'.repeat(colRep)}+${'-'.repeat(colRep)}+\n`;
    for (let i = 0; i < rowsRep; i++) {
        result += `|${' '.repeat(colRep)}|${' '.repeat(colRep)}|\n`;
    }
    //bottom row
    result += `+${'-'.repeat(colRep)}+${'-'.repeat(colRep)}+`;
    console.log(result);
}

printFigure(2);