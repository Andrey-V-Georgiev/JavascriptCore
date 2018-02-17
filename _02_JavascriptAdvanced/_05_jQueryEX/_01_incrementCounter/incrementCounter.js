function increment(selector) {
    let container = $(selector); //get the <div>
    let fragment = document.createDocumentFragment(); //new fragment

    let textArea = $('<textarea>');
    textArea.val(0);
    textArea.addClass('counter');
    textArea.attr('disabled', true);

    let incrementBtn = $('<button>Increment</button>');
    incrementBtn.addClass('btn');
    incrementBtn.attr('id', 'incrementBtn');
    $(incrementBtn).on('click', function () {
        textArea.val(+textArea.val() + 1)
    });

    let addBtn = $('<button>Add</button>');
    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');
    $(addBtn).on('click', function () {
        let li = $(`<li>${textArea.val()}</li>`);
        li.appendTo(uList);
    });

    let uList = $('<ul>');
    uList.addClass('results');

    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    uList.appendTo(fragment);
    container.append(fragment);
}
