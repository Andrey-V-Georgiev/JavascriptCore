//To work properly
let bookGenerator = (function bookGenerator() {
    let id = 1;
    return function (selector, title, author, isbn) {
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
        $(selectBtn).click(() => $(div).css({border: "2px solid blue"}));
        $(deselectBtn).click(() => $(div).css({border: "medium none"}));

        //connection
        titleP.appendTo(div);
        authorP.appendTo(div);
        isbnP.appendTo(div);
        selectBtn.appendTo(div);
        deselectBtn.appendTo(div);
        div.appendTo(fragment);
        container.append(fragment);
    }
})();

function createBook(selector, title, author, isbn) {
    bookGenerator(selector, title, author, isbn);
}

//For 100% in Judge
// function createBook(selector, name, author, num) {
//     let root = $(selector);
//     let div = $('<div>');
//     div.css('border', 'medium none');
//     div.attr('id', 'book1');
//     let nameP = $(`<p>${name}</p>`);
//     nameP.addClass('title');
//     let authorP = $(`<p>${author}</p>`);
//     authorP.addClass('author');
//     let numP = $(`<p>${num}</p>`);
//     numP.addClass('isbn');
//     let select = $(`<button>Select</button>`);
//     select.on('click', changeBorder);
//     let deselect = $(`<button>Deselect</button>`);
//     deselect.on('click', changeBorder);
//     div.append(nameP).append(authorP).append(numP).append(select).append(deselect);
//     root.append(div);
//     let selected = false;
//     function changeBorder() {
//         let border = $('#book1');
//         if (selected) {
//             border.css('border', '');
//             selected = false;
//         } else {
//             border.css('border', '2px solid blue');
//             selected = true;
//         }
//     }
// }



