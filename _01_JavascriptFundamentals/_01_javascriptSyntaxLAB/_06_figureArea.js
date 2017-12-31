function calcArea(w, h, W, H){
    let fig1 = {width: w, hight: h};
    let fig2 = {width: W, hight: H};
    let subFig = {width: Math.min(fig1.width, fig2.width), hight: Math.min(fig1.hight, fig2.hight)};
    let area1 = fig1.width * fig1.hight;
    let area2 = fig2.width * fig2.hight;
    let subFigArea = subFig.width * subFig.hight;
    let totalArea = (area1+area2) - subFigArea;
    console.log(totalArea);
}

calcArea(2, 4, 5, 3);