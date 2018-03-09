function result() {

    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError('Abstract class cannot be instantiated directly');
            }
            this.weight = Number(weight);
            this.melonSort = melonSort;
        }

        elementType() {
            let className = this.constructor.name;
            switch (className) {
                case 'Watermelon':
                    return 'Water';
                case 'Firemelon':
                    return 'Fire';
                case 'Earthmelon':
                    return 'Earth';
                case 'Airmelon':
                    return 'Air';
            }
        }

    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.melonSort = melonSort;
            this.elementIndex = [weight, melonSort];
        }

        get elementIndex() {
            return this._elementIndex;
        }

        set elementIndex(value) {
            let weight = value[0];
            let melonSort = value[1];
            this._elementIndex = weight * melonSort.length;
        }

        toString() {
            return `Element: ${super.elementType()}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.elementIndex = [weight, melonSort];
        }

        get elementIndex() {
            return this._elementIndex;
        }

        set elementIndex(value) {
            let weight = value[0];
            let melonSort = value[1];
            this._elementIndex = weight * melonSort.length;
        }

        toString() {
            return `Element: ${super.elementType()}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.elementIndex = [weight, melonSort];
        }

        get elementIndex() {
            return this._elementIndex;
        }

        set elementIndex(value) {
            let weight = value[0];
            let melonSort = value[1];
            this._elementIndex = weight * melonSort.length;
        }

        toString() {
            return `Element: ${super.elementType()}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.elementIndex = [weight, melonSort];
        }

        get elementIndex() {
            return this._elementIndex;
        }

        set elementIndex(value) {
            let weight = value[0];
            let melonSort = value[1];
            this._elementIndex = weight * melonSort.length;
        }

        toString() {
            return `Element: ${super.elementType()}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.elementIndex = [weight, melonSort];
            this.elementType = 'Water';
            this.types = ['Fire', 'Earth', 'Air', 'Water'];
        }

        morph() {
            this.elementType = this.types.shift();
            this.types.push(this.elementType);
        }

        get elementIndex() {
            return this._elementIndex;
        }

        set elementIndex(value) {
            let weight = value[0];
            let melonSort = value[1];
            this._elementIndex = weight * melonSort.length;
        }

        toString() {
            return `Element: ${this.elementType}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    return {
        Melon: Melon,
        Watermelon: Watermelon,
        Firemelon: Firemelon,
        Earthmelon: Earthmelon,
        Airmelon: Airmelon,
        Melolemonmelon: Melolemonmelon
    }
}

let classes = result();

let test = new classes.Melolemonmelon(150, "Melo");
console.log(test.toString());
test.morph();
console.log(test.toString());
test.morph();
console.log(test.toString());
