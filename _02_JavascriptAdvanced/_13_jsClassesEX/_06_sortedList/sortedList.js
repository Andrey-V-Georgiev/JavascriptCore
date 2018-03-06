(function () {
    return class SortedList {
        constructor() {
            this.arr = [];
            this.size = 0;
        }

        add(element) {
            this.arr.push(element);
            this.size++;
            this.arr.sort(function (a, b) {
                return Number(a) - Number(b)
            });
        };

        remove(index) {
            if (index >= 0 && index < this.arr.length) {
                this.arr.splice(index, 1);
                this.size--;
                this.arr.sort(function (a, b) {
                    return Number(a) - Number(b)
                });
            } else {
                throw new Error('Out of bound exception');
            }
        };

        get(index) {
            if (index >= 0 && index < this.arr.length) {
                return this.arr[index];
            } else {
                throw new Error('Out of bound exception');
            }
        }
    }
})();

let list = solve();
list.add(-5);
list.add(10);
list.add(24);


console.log(list.get(1));