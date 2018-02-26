function assembleCar(requirements) {

    function chooseEngine() {
        let requiredPower = requirements.power;
        if (requiredPower <= 90) {
            return {power: 90, volume: 1800};
        } else if(requiredPower <= 120){
            return {power: 120, volume: 2400};
        } else {
            return {power: 200, volume: 3500};
        }
    }

    function chooseCarriage() {
        let requiredCarriage = requirements.carriage;
        let requiredColor = requirements.color;
        if(requiredCarriage === 'hatchback'){
            return { type: 'hatchback', color: `${requiredColor}`};
        } else {
            return { type: 'coupe', color: `${requiredColor}`};
        }
    }

    function chooseWheels() {
        let wheelsSize = requirements.wheelsize;
        if(wheelsSize % 2 === 0){
            wheelsSize -= 1;
        }
        return [wheelsSize, wheelsSize, wheelsSize, wheelsSize];
    }

    return {
        model: requirements.model,
        engine: chooseEngine(),
        carriage: chooseCarriage(),
        wheels: chooseWheels()
    }
}

let requirements = { model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }

console.log(assembleCar(requirements));
