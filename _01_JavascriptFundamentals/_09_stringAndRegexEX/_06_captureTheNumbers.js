function findNumbers(arr){
   let nums = [];
   let regex = /\d+/g;
    for (let str of arr) {
        let result = regex.exec(str);
        while(result !== null){
            nums.push(result[0]);
            result = regex.exec(str);
        }
    }
    console.log(nums.join(' '));
}

findNumbers(['The300kgg987','What is that?','I think it’s the 3rd movie.','Lets watch it at 22:45']);


