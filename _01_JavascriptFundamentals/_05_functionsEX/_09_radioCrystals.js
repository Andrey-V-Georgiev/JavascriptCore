function calibrate(arr){
    let finalThickness = Number(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        let thickness = Number(arr[i]);
        console.log(`Processing chunk ${thickness} microns`);

        let cutCounter = 0;
        while(thickness > finalThickness || thickness > finalThickness - 1){
            if(cut(thickness) < finalThickness - 1){
                break;
            } else {
                thickness = cut(thickness);
            }
            cutCounter++;
        }
        if(cutCounter > 0){
            exitAction('Cut', cutCounter);
        }
        if(thickness === finalThickness - 1){
            targetMinusOne(thickness);
            break;
        }

        let lapCounter = 0;
        while(thickness > finalThickness || thickness > finalThickness - 1){
            if(lap(thickness) < finalThickness - 1){
                break;
            } else {
                thickness = lap(thickness);
            }
            lapCounter++;
        }
        if(lapCounter > 0){
            exitAction('Lap', lapCounter);
        }
        if(thickness === finalThickness - 1){
            targetMinusOne(thickness);
            break;
        }

        let grindCounter = 0;
        while(thickness > finalThickness || thickness > finalThickness - 1){
            if(grind(thickness) < finalThickness - 1){
                break;
            } else {
                thickness = grind(thickness);
            }
            grindCounter++;
        }
        if(grindCounter > 0){
            exitAction('Grind', grindCounter);
        }
        if(thickness === finalThickness - 1){
            targetMinusOne(thickness);
            break;
        }

        let etchCounter = 0;
        while(thickness > finalThickness || thickness > finalThickness - 1){
            if(etch(thickness) < finalThickness - 1){
                break;
            } else {
                thickness = etch(thickness);
            }
            etchCounter++;
        }
        if(etchCounter > 0){
            exitAction('Etch', etchCounter);
        }
        if(thickness === finalThickness - 1){
            targetMinusOne(thickness);
            break;
        }

        console.log(`Finished crystal ${finalThickness} microns`);
    }

    function exitAction(actionType, counter){
        console.log(`${actionType} x${counter}`);
        console.log(`Transporting and washing`);
    }

    function targetMinusOne(currentCristal){
        currentCristal = xRay(currentCristal);
        console.log(`X-ray x1`);
        console.log(`Finished crystal ${finalThickness} microns`);
    }

    function cut(thickness){
        let newThickness = thickness / 4;
        newThickness = transportAndWash(newThickness);
        return newThickness;
    }

    function lap(thickness){
        let newThickness = thickness * 0.8;
        newThickness = transportAndWash(newThickness);
        return newThickness;
    }

    function grind(thickness){
        let newThickness = thickness - 20;
        newThickness = transportAndWash(newThickness);
        return newThickness;
    }

    function etch(thickness) {
        let newThickness = thickness - 2;
        newThickness = transportAndWash(newThickness);
        return newThickness;
    }

    function xRay(thickness){
        let newThickness = thickness + 1;
        newThickness = transportAndWash(newThickness);
        return newThickness;
    }

    function transportAndWash(thickness) {
        let newThickness = Math.floor(thickness);
        return newThickness;
    }
}

calibrate([1000, 4000, 8100]);
