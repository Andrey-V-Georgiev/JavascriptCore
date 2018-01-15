function gradsToRadians(input){
    let num = Number(input) % 400;
    let degreePerGrad = 360 / 400;
    let grad = num < 0 ? 400 + num : num;
    let degree = grad * degreePerGrad;
    console.log(degree);
}

gradsToRadians(400);
