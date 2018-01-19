function radar(arr){
    const SPEEDING = 'speeding';
    const EXCESSIVE = 'excessive speeding';
    const RECKLESS = 'reckless driving';

    let motorwaySpeed = 130;
    let interstateSpeed = 90;
    let citySpeed = 50;
    let residentialSpeed = 20;

    let currentSpeed = arr[0];
    let currentArea = arr[1];

    switch(currentArea){
        case 'motorway':
            speedValue(currentSpeed - motorwaySpeed);
            break;
        case 'interstate':
            speedValue(currentSpeed - interstateSpeed);
            break;
        case 'city':
            speedValue(currentSpeed - citySpeed);
            break;
        case 'residential':
            speedValue(currentSpeed - residentialSpeed);
            break;
    }

    function speedValue(speedDiff){
        if(speedDiff > 0 && speedDiff <= 20){
            console.log(SPEEDING);
        } else if(speedDiff > 20 && speedDiff <= 40){
            console.log(EXCESSIVE);
        } else if(speedDiff > 40){
            console.log(RECKLESS);
        } else {
            console.log();
        }
    }
}

radar([70, 'city']);