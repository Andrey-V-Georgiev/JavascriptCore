function modifyAverage(num) {
    let stringNum = num.toString();
    while (true) {
        let sum = 0;
        let average = 0;
        for (let letter of stringNum) {
            sum += Number(letter);
        }
        average = sum / stringNum.length;
        if (average > 5) {
            console.log(stringNum);
            return;
        } else {
            stringNum += '9';
        }
    }
}

modifyAverage(5835);