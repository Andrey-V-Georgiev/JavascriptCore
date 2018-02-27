function solve() {
    return new SortedList();

    function SortedList() {
        this.arr = [];
        this.size = 0;
        this.add = function (element) {
            this.arr.push(element);
            this.size++;
            this.arr.sort();
        };
        this.remove = function (index) {
            if (index >= 0 && index < this.arr.length) {
                this.arr.splice(index, 1);
                this.size--;
                this.arr.sort();
            } else {
                throw new Error('Out of bound exception');
            }
        };
        this.get = function (index) {
            if (index >= 0 && index < this.arr.length) {
                return this.arr[index];
            } else {
                throw new Error('Out of bound exception');
            }
        }
    }
}

let list = solve();
list.add(-5);
list.add(10);
list.add(24);


console.log(list.get(1));

