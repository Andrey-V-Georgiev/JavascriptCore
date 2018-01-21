function printDNA(num) { //AT CG TT AG GG
    let list = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G'];
    let counter = 1;
    for (let i = 0; i < num; i++) {
        let left = list.shift();
        let right = list.shift();
        if (counter === 1) {
            console.log(`${'*'.repeat(2)}${left}${'-'.repeat(0)}${right}${'*'.repeat(2)}`);
        } else if (counter === 2) {
            console.log(`${'*'.repeat(1)}${left}${'-'.repeat(2)}${right}${'*'.repeat(1)}`);
        } else if (counter === 3) {
            console.log(`${'*'.repeat(0)}${left}${'-'.repeat(4)}${right}${'*'.repeat(0)}`);
        } else if (counter === 4) {
            console.log(`${'*'.repeat(1)}${left}${'-'.repeat(2)}${right}${'*'.repeat(1)}`);
        }
        list.push(left);
        list.push(right);
        ++counter;
        if (counter === 5) {
            counter = 1;
        }
    }
}

printDNA(10);