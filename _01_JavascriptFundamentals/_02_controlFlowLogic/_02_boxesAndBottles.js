function calculateBoxes(numBottles, oneBoxCapacity){
        let neededBoxes = Math.ceil(numBottles / oneBoxCapacity);
        return neededBoxes;
}

console.log(calculateBoxes(15, 7));