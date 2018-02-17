function modifyStrings(arr){
    let output = '';

    function append(value) {
        output += value;
    }

    function removeStart(value) {
        let n = Number(value);
        output = output.substring(n);
    }

    function removeEnd(value) {
        let n = Number(value);
        output = output.slice(0, -n);
    }

    function printOutput() {
        console.log(output);
    }

    for (let str of arr) {
        let [command, value] = str.split(' ');
        switch(command){
            case ("append"):
                append(value);
                break;
            case ("removeStart"):
                removeStart(value);
                break;
            case ("removeEnd"):
                removeEnd(value);
                break;
            case ("print"):
                printOutput();
                break;
        }
    }
}

modifyStrings(['append hello','append again','removeStart 3','removeEnd 4','print']);
