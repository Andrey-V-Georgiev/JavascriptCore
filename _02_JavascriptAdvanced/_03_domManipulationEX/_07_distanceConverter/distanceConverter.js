function attachEventsListeners() {
    let btnConvert = document.getElementById('convert');
    btnConvert.addEventListener('click', convert);

    function convert() {
        let inputNum = Number(document.getElementById('inputDistance').value);
        let fromOption = document.getElementById("inputUnits");
        let valueFrom = fromOption.options[fromOption.selectedIndex].value;
        let toOption = document.getElementById("outputUnits");
        let valueTo = toOption.options[toOption.selectedIndex].value;

        let fromInMeters = 0;
        let result = 0;

        switch (valueFrom) {
            case 'km':
                fromInMeters = inputNum * 1000;
                break;
            case 'm':
                fromInMeters = inputNum;
                break;
            case 'cm':
                fromInMeters = inputNum * 0.01;
                break;
            case 'mm':
                fromInMeters = inputNum * 0.001;
                break;
            case 'mi':
                fromInMeters = inputNum * 1609.34;
                break;
            case 'yrd':
                fromInMeters = inputNum * 0.9144;
                break;
            case 'ft':
                fromInMeters = inputNum * 0.3048;
                break;
            case 'in':
                fromInMeters = inputNum * 0.0254;
                break;
        }
        switch (valueTo) {
            case 'km':
                result = fromInMeters / 1000;
                break;
            case 'm':
                result = fromInMeters;
                break;
            case 'cm':
                result = fromInMeters / 0.01;
                break;
            case 'mm':
                result = fromInMeters / 0.001;
                break;
            case 'mi':
                result = fromInMeters / 1609.34;
                break;
            case 'yrd':
                result = fromInMeters / 0.9144;
                break;
            case 'ft':
                result = fromInMeters / 0.3048;
                break;
            case 'in':
                result = fromInMeters / 0.0254;
                break;
        }
       let outputBox = document.getElementById('outputDistance');
        outputBox.removeAttribute('disabled');
        outputBox.value = result.toString();
    }
}
