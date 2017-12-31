function elementsAtEvenPosition(arr){
    console.log(arr.filter((e, i)=>i%2==0).join(' '));
}

elementsAtEvenPosition(['20', '30','40']);