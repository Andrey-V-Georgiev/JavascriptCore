function calcTriangleArea(a, b, c) {
    "use strict"
    let p = (a + b + c) / 2;
    let S = Math.sqrt(p * (p - a) * (p - b) * (p - c));
     return S;
}

console.log(calcTriangleArea(2, 3.5, 4));

