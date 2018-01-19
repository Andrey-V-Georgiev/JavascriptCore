function xml(arr) {
    let output = '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<quiz>\n';
    for (let i = 0; i < arr.length; i+=2) {
        let question = arr[i];
        let answer = arr[i + 1];
        output +=
            '  <question>\n' +
            `    ${question}\n` +
            '  </question>\n' +
            '  <answer>\n' +
            `    ${answer}\n` +
            '  </answer>\n';
    }
    output += '</quiz>\n';
    console.log(output);
}

xml(["Who was the forty-second president of the U.S.A.?", "William Jefferson Clinton"]);

