function expedition(matrix, second, coordinates, start) {
    var flag = false;
    let loc = {row: start[0], col: start[1]};
    let prev = [];
    let steps = 1;
    let matrixRows = matrix.length;
    let matrixCols = matrix[0].length;
    let halfRows = matrixRows / 2;
    let halfCols = matrixCols / 2;

    (function decipherTheMap() {
        for (let currCoordinates of coordinates) {
            let [startRow, startCol] = [currCoordinates[0], currCoordinates[1]];
            for (let row = 0; row < second.length; row++) {
                for (let col = 0; col < second[0].length; col++) {
                    if (row + startRow < matrix.length && col + startCol < matrix[0].length) {
                        let [matrixRow, matrixCol] = [row + startRow, col + startCol];
                        if (second[row][col] === 1) {
                            matrix[matrixRow][matrixCol] = matrix[matrixRow][matrixCol] === 0 ? 1 : 0;
                        }
                    }
                }
            }
        }
    })();

    startingPrevStep();
    kalashnikov();

    function startingPrevStep() { // return array of one or two elements
        if (loc.row === 0 && loc.col === 0) {
            prev = ['top', 'left'];
        } else if (loc.row === 0 && loc.col === matrixCols - 1) {
            prev = ['top', 'right'];
        } else if (loc.row === matrixRows - 1 && loc.col === matrixCols - 1) {
            prev = ['bottom', 'right'];
        } else if (loc.row === matrixRows - 1 && loc.col === 0) {
            prev = ['bottom', 'left'];
        } else if (loc.row === 0) {
            prev = ['top'];
        } else if (loc.col === matrixCols - 1) {
            prev = ['right'];
        } else if (loc.row === matrixRows - 1) {
            prev = ['bottom'];
        } else {
            prev = ['left'];
        }
    }

    function kalashnikov() {
        while (true) {
            let [checkUp, checkRight, checkDown, checkLeft] = [true, true, true, true];
            if (prev.length === 1) {
                setFalse(prev[0]);
            } else {
                setFalse(prev[0]);
                setFalse(prev[1]);
            }

            function setFalse(direction) {
                if (direction === 'top') {
                    checkUp = false;
                }
                if (direction === 'right') {
                    checkRight = false;
                }
                if (direction === 'bottom') {
                    checkDown = false;
                }
                if (direction === 'left') {
                    checkLeft = false;
                }
            }

            let deadEndTrue = 0;
            if (checkUp === true) {
                if (flag === true) {
                    return;
                }
                switch (checkNextStep('up')) {
                    case 0:
                        setLocation(loc.row - 1, loc.col, 'bottom');
                        continue;
                    case 1:
                        deadEndTrue++;
                        break;
                    case -1:
                        touchBorder();
                }
            }
            if (checkRight === true) {
                if (flag === true) {
                    return;
                }
                switch (checkNextStep('right')) {
                    case 0:
                        setLocation(loc.row, loc.col + 1, 'left');
                        continue;
                    case 1:
                        deadEndTrue++;
                        break;
                    case -1:
                        touchBorder();
                }
            }
            if (checkDown === true) {
                if (flag === true) {
                    return;
                }
                switch (checkNextStep('down')) {
                    case 0:
                        setLocation(loc.row + 1, loc.col, 'top');
                        continue;
                    case 1:
                        deadEndTrue++;
                        break;
                    case -1:
                        touchBorder();
                }
            }
            if (checkLeft === true) {
                if (flag === true) {
                    return;
                }
                switch (checkNextStep('left')) {
                    case 0:
                        setLocation(loc.row, loc.col - 1, 'right');
                        continue;
                    case 1:
                        deadEndTrue++;
                        break;
                    case -1:
                        touchBorder();
                }
            }
            if (deadEndTrue === 3) {
                deadEnd();
            }

            function setLocation(setRow, setCol, prevPosition) {
                prev = [prevPosition];
                loc.row = setRow;
                loc.col = setCol;
                steps++;
            }

            function checkNextStep(direction) {
                let result = null;
                switch (direction) {
                    case 'up':
                        try {
                            result = matrix[loc.row - 1][loc.col];
                        } catch (e) {
                        }
                        if (result === undefined || result === null) {
                            return -1;
                        }
                        return result;

                    case 'right':
                        try {
                            result = matrix[loc.row][loc.col + 1];
                        } catch (e) {
                        }
                        if (result === undefined || result === null) {
                            return -1;
                        }
                        return result;

                    case 'down':
                        try {
                            result = matrix[loc.row + 1][loc.col];
                        } catch (e) {
                        }
                        if (result === undefined || result === null) {
                            return -1;
                        }
                        return result;

                    case 'left':
                        try {
                            result = matrix[loc.row][loc.col - 1];
                        } catch (e) {
                        }
                        if (result === undefined || result === null) {
                            return -1;
                        }
                        return result;
                }
            }

            function deadEnd() {
                function printDeadEnd(secondLine) {
                    console.log(steps);
                    console.log(secondLine);
                    flag = true;
                }

                let r = loc.row;
                let c = loc.col;
                if (r >= 0 && r < halfRows && c >= 0 && c < halfCols) {
                    printDeadEnd('Dead end 2');
                } else if (r >= 0 && r < halfRows && c >= halfCols && c < matrixCols) {
                    printDeadEnd('Dead end 1');
                } else if (r >= halfRows && r < matrixRows && c >= 0 && c < halfCols) {
                    printDeadEnd('Dead end 3');
                } else if (r >= halfRows && r < matrixRows && c >= halfCols && c < matrixCols) {
                    printDeadEnd('Dead end 4');
                }
            }
        }

        function touchBorder() {
            function printBorder(secondLine) {
                console.log(steps);
                console.log(secondLine);
                flag = true;
            }

            let r = loc.row;
            let c = loc.col;
            if (r === 0) {
                printBorder('Top');
            } else if (c === matrixCols - 1) {
                printBorder('Right');
            } else if (r === matrixRows - 1) {
                printBorder('Bottom');
            } else if (c === 0) {
                printBorder('Left');
            }
        }
    }
}









