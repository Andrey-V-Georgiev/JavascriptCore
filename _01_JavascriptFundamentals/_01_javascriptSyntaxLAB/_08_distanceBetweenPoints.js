function findDistance(x1, y1, x2, y2){

    let point1 = {x: x1, y: y1};
    let point2 = {x: x2, y: y2};
    let xDiff = Math.abs(point1.x - point2.x);
    let yDiff = Math.abs(point1.y - point2.y);
    let diagonal =  Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
    console.log(diagonal);
}

findDistance(2.34,15.66,-13.55,-2.9985);


