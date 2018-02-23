function evaluateData(name, age, weight, height) {
    let dataObj = {};
    dataObj['name'] = name;
    function personalInfo() {
        return {
            age: age,
            weight: weight,
            height: height
        }
    }
    dataObj['personalInfo'] = personalInfo();
    function bmiFunc() {
        return Math.round(weight / ((height / 100) * (height / 100)));
    }
    dataObj['BMI'] = bmiFunc();
    function bmiStatus() {
        let bmi = dataObj['BMI'];
        if (bmi < 18.5) {
            return 'underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            return 'normal';
        } else if (bmi >= 25 && bmi < 30) {
            return 'overweight';
        } else if (bmi >= 30) {
            return 'obese';
        }
    }
    dataObj['status'] = bmiStatus();
    if (dataObj['status'] === 'obese') {
        dataObj['recommendation'] = 'admission required';
    }
    return dataObj;
}

console.log(evaluateData('Honey Boo Boo', 9, 57, 137));