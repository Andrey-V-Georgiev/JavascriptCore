function cone(radius, hight) {
    "use strict"
    let s = Math.sqrt(Math.pow(radius, 2) + Math.pow(hight, 2));
    let B = Math.PI * Math.pow(radius, 2);
    let L = Math.PI * radius * s;
    let V = (Math.PI * Math.pow(radius, 2) * hight) / 3;
    let A = L + B;
    console.log("volume = " + V.toFixed(4));
    console.log("area = " + A.toFixed(4));
}