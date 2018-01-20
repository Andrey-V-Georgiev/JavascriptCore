function tripLength(arr){
    let [x1, y1, x2, y2, x3, y3] = arr;
    let x1x2Diff = Math.abs(x1 - x2);
    let y1y2Diff = Math.abs(y1 - y2);
    let diff1_2 = Math.sqrt(Math.pow(x1x2Diff, 2) + Math.pow(y1y2Diff, 2));

    let x2x3Diff = Math.abs(x2 - x3);
    let y2y3Diff = Math.abs(y2 - y3);
    let diff2_3 = Math.sqrt(Math.pow(x2x3Diff, 2) + Math.pow(y2y3Diff, 2));

    let x1x3Diff = Math.abs(x1 - x3);
    let y1y3Diff = Math.abs(y1 - y3);
    let diff1_3 = Math.sqrt(Math.pow(x1x3Diff, 2) + Math.pow(y1y3Diff, 2));

    let result = '';
    if(diff1_2 > diff2_3 && diff1_2 > diff1_3){
        result = `1->3->2: ${diff1_3 + diff2_3}`;
    }else if(diff2_3 > diff1_2 && diff2_3 > diff1_3){
        result = `2->1->3: ${diff1_2 + diff1_3}`;
    } else {
        result = `1->2->3: ${diff1_2 + diff2_3}`;
    }
    console.log(result);
}

tripLength([0, 0, 2, 0, 4, 0]);