(function() {

    String.prototype.ensureStart = function (str) {
        return this.startsWith(str) ? this.toString() : str + this.toString();
    };

    String.prototype.ensureEnd = function (str) {
       return this.endsWith(str) ? this.toString() : this.toString() + str;
    };

    String.prototype.isEmpty = function () {
        return !!this.isEmpty();
    };

    String.prototype.truncate = function (n) {
        if (this.length > n) {
            if (n < 3) {
                return '.'.repeat(n);
            } else if (/'\s'.exec(this)/g === null) {
                return this.toString().substring(0, n - 3) + '...';
            } else {
                let words = this.toString().split(' ');
                const wordsLength = words.length;
                for (let i = 0; i < wordsLength; i++) {
                    words.pop();
                    let sentence = words.join(' ');
                    if (words.length === 0) {
                        return this.toString().substring(0, n - 3) + '...';
                    }
                    if (sentence.length + 3 <= n) {
                        return sentence + '...';
                    }
                }
            }
        } else {
            return this.toString();
        }
    };

    String.format = function (string, ...params) {
        let reg = /{\d}/;
        let match = reg.exec(string);
        while (match !== null && params.length > 0) {
            string = string.replace(match[0], params.shift());
            match = reg.exec(string);
        }
        return string;
    };

})();

let str = 'quick brown fox jumps over the lazy dog';

str = str.ensureStart('the ');
console.log(str);



