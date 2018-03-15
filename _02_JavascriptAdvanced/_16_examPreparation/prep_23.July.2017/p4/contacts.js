class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.element = this.createElement();
        this.online = false;
    }

    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;
        if (this._online === true) {
            this.element.find('.title').addClass('online');
        } else if(this._online === false){
            this.element.find('.title').removeClass('online');
        }
    }

    createElement() {
        let article = $('<article>');
        let divTitle = $('<div>')
            .addClass('title')
            .text(`${this.firstName} ${this.lastName}`);
        let btn = $('<button>').html('&#8505;');
        let divInfo = $('<div>')
            .addClass('info')
            .css('display', 'none');
        let spanPhone = $('<span>')
            .html(`&phone; ${this.phone}`);
        let spanEmail = $('<span>')
            .html(`&#9993; ${this.email}`);
        $(btn).click(function () {
            $(divInfo).toggle();
        });
        divTitle.append(btn);
        divInfo.append(spanPhone);
        divInfo.append(spanEmail);
        article.append(divTitle);
        article.append(divInfo);
        return article;
    }

    render(id) {
        let container = $(`#${id}`);
        container.append(this.element);
    }
}



