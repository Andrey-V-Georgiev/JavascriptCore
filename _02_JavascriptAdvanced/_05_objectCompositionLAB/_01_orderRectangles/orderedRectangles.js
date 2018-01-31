function sortRectangles(arr){
    function createRectangles(width, height){
        let rect = {
            width: width,
            height: height,
            area: () => rect.width * rect.height,
            compareTo: function(other) {
                let result = other.area() - rect.area();
                return result || (other.width - rect.width);
            }

        };
        return rect;
    }
    let rects = [];
    for (let str of arr) {
        let [width, height] = str;
        let rect = createRectangles(width, height);
        rects.push(rect);
    }
    return rects.sort((a, b) => a.compareTo(b));
}

console.log(sortRectangles([[10, 5], [3, 20], [5, 12]]));