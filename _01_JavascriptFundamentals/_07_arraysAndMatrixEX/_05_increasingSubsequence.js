function extract(nums) {
    let currentMax = 0;
    for (let num of nums) {
        if(num >= currentMax){
            currentMax = num;
            console.log(currentMax);
        }
    }
}

extract([1, 3, 8, 4, 10, 12, 3, 2, 24]);
