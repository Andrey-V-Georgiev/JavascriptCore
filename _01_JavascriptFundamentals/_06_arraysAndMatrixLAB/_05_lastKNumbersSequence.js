function lastKNumSequence(n, k) {
    let outputArr = new Array();
    outputArr.push(1);
    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        let end = i;
        let currentArr = outputArr.slice(start, end);
        let nextNum = 0;
        for (let num of currentArr) {
            nextNum += num;
        }
        outputArr.push(nextNum);
    }
    console.log(outputArr.join(' '));
}

lastKNumSequence(6, 3);