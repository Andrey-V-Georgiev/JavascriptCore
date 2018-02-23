(function() {
    return {
        add: function (a, b) {
            let [xA, yA] = a;
            let [xB, yB] = b;
            return [(xA + xB), (yA + yB)];
        },
        multiply: function (a, s) {
            let [xA, yA] = a;
            return [(xA * s), (yA * s)];
        },
        length: function (a) {
            let [xA, yA] = a;
            return Math.sqrt((xA * xA) + (yA * yA));
        },
        dot: function (a, b) {
            let [xA, yA] = a;
            let [xB, yB] = b;
            return (xA * xB) + (yA * yB);
        },
        cross: function (a, b) {
            let [xA, yA] = a;
            let [xB, yB] = b;
            return (xA * yB) - (yA * xB);
        }
    }
})();

