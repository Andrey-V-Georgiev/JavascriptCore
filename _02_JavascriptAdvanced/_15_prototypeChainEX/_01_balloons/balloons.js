function result() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }

        get color() {
            return this._color;
        }

        set color(value) {
            this._color = value;
        }

        get gasWeight() {
            return this._gasWeight;
        }

        set gasWeight(value) {
            this._gasWeight = value;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this.ribbon = [ribbonColor, ribbonLength];
            this.ribbonColor = ribbonColor;
            this.ribbonLength = ribbonLength;
        }

        get ribbonColor() {
            return this._ribbonColor;
        }

        set ribbonColor(value) {
            this._ribbonColor = value;
        }

        get ribbonLength() {
            return this._ribbonLength;
        }

        set ribbonLength(value) {
            this._ribbonLength = value;
        }

        get ribbon() {
            return this._ribbon;
        }

        set ribbon(args) {
            let [ribbonColor, ribbonLength] = args;
            this._ribbon = {
                color: ribbonColor,
                length: ribbonLength
            }
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this.text = text;
        }

        get text() {
            return this._text;
        }

        set text(text) {
            this._text = text;
        }
    }

    return {
        Balloon: Balloon,
        PartyBalloon: PartyBalloon,
        BirthdayBalloon: BirthdayBalloon
    }
}

let classes = result();

let test = new classes.PartyBalloon("Tumno-bqlo", 20.5, "Svetlo-cherno", 10.25);
let ribbon = test.ribbon;

console.log(test);
console.log(ribbon);
