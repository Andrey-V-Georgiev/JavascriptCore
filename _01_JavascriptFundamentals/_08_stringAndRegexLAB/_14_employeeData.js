function parseEmployeeData(data) {
    let regex = /^([A-Z][a-zA-Z]*)\s-\s([1-9]\d*)\s-\s(.+)$/;
    let result = [];
    for (let employee of data) {
        let match = regex.exec(employee);
        if (match === null) {
            continue;
        }
        let [fullMatch, name, salary, position] = match;
        result.push(`Name: ${name}\nPosition: ${position}\nSalary: ${salary}`);
    }
    for (let employee of result) {
        console.log(employee);
    }
}
parseEmployeeData([`Isacc - 1000 - CEO`,
    `Ivan - 500 - Employee`,
    `Peter - 500 - Employee`
]);


