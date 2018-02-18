function createBook(selector, title, author, isbn) {
    (function () {
        let id = 1;
        let container = $(selector);
        let fragment = document.createDocumentFragment();

        //create the elements
        let div = $('<div>');
        div.attr('id', `book${id++}`);
        div.attr('style', 'border: medium none;');
        let titleP = $(`<p>${title}</p>`);
        titleP.addClass('title');
        let authorP = $(`<p>${author}</p>`);
        authorP.addClass('author');
        let isbnP = $(`<p>${isbn}</p>`);
        isbnP.addClass('isbn');
        let selectBtn = $('<button>Select</button>');
        let deselectBtn = $('<button>Deselect</button>');

        //create buttons behaviors
        $(selectBtn).click(() => $(div).css({border:  "2px solid blue"}));
        $(deselectBtn).click(() => $(div).css({border: "medium none"}));

        //connection
        titleP.appendTo(div);
        authorP.appendTo(div);
        isbnP.appendTo(div);
        selectBtn.appendTo(div);
        deselectBtn.appendTo(div);
        div.appendTo(fragment);
        container.append(fragment);
    }());
}

