let result = (function () {
    class TextBox {
        constructor(selector, regex) {
            this.selector = selector;
            this._elements = $(selector);
            this._invalidSymbols = regex;
            this.value = $(this._elements[0]).val();
            this.onInput(selector);
        }

        onInput(selector) {
            let that = this;
            $(selector).on('input', function (event) {
                that.value = $(event.target).val();
            });
        }

        get elements() {
            return this._elements;
        }

        get value() {
            return this._value;
        }

        set value(value) {
            this._value = value;
            for (let el of this.elements) {
                $(el).val(value);
            }
        }

        isValid() {
            return !this._invalidSymbols.test(this.value)
        }
    }

    class Form {
        constructor(...textBoxes) {
            this._element = $('<div>').addClass('form');
            this.textboxes = textBoxes;
            this.submit();
            this.attach();
        }

        set textboxes(textBoxes) {
            for (let textbox of textBoxes) {
                if (!textbox instanceof TextBox) {
                    throw new Error;
                }
            }
            this._textboxes = textBoxes;
            for (let textbox of textBoxes) {

                this._element.append($(textbox.selector));
            }
        }

        submit() {
            let valid = true;
            for (let textbox of this._textboxes) {
                if (textbox.isValid()) {
                    $(textbox.selector).css('border', '2px solid green');
                } else {
                    $(textbox.selector).css('border', '2px solid red');
                    valid = false;
                }
            }
            return valid;
        }

        attach(selector) {
            this._element.appendTo(selector)
        }
    }

    return {
        Textbox: TextBox,
        Form: Form
    }
})();


let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username", /[^a-zA-Z0-9]/);
let password = new Textbox("#password", /[^a-zA-Z]/);
username.value = "username";
password.value = "password2";
let form = new Form(username, password);
form.attach("#root");

