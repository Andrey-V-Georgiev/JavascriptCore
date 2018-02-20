function domSearch(selector, caseSensitivity) {
    let container = $(selector).addClass('items-control');
    let fragment = document.createDocumentFragment();
    container.append(fragment);

    //TODO create add-controls
    let addControls = $('<div>').addClass('add-controls');
    addControls.appendTo(container);
    let addLabel = $('<label>Enter text: </label>');
    addLabel.appendTo(addControls);
    let addInput = $('<input>');
    addInput.appendTo(addLabel);
    let addAnchor = $('<a>Add</a>');
    addAnchor.addClass('button').attr('style', 'display: inline-block;');
    addAnchor.appendTo(addControls);
    $(addAnchor).click(addItem);

    //TODO create search-controls
    let searchControls = $('<div>').addClass('search-controls');
    searchControls.appendTo(container);
    let searchLabel = $('<label>Search: </label>');
    searchLabel.appendTo(searchControls);
    let searchInput = $('<input>');
    searchInput.appendTo(searchLabel);

    //TODO create result-controls
    let resultControls = $('<div>').addClass('result-controls');
    resultControls.appendTo(container);
    let resultUl = $('<ul>').addClass('items-list');
    resultUl.appendTo(resultControls);

    //TODO adding/delete functionality
    function addItem() {
        let addItem = addInput.val();
        if(addItem !== ''){
            let li = $('<li>').addClass('list-item');
            li.attr('style','display: block');
            li.appendTo(resultUl);
            let deleteBtn = $('<a>X</a>').addClass('button');
            deleteBtn.appendTo(li);
            let strong = $(`<strong>${addItem}</strong>`);
            strong.appendTo(li);
            $(deleteBtn).click(function () {
                $(li).remove();
            });
            $(addInput).val('');
        }
    }

    //TODO searching functionality
    $(searchInput).on('input', function () {
        $('.list-item').each(function() {
          let strongText = $(this).find('strong').text() ;
          let searchedWord = searchInput.val();
          if(caseSensitivity === true){
              if(strongText.includes(`${searchedWord}`)){
                  $(this).css('display','block')
              } else {
                  $(this).css('display','none')
              }
          } else {
              if(strongText.toLowerCase().includes(`${searchedWord.toLowerCase()}`)){
                  $(this).css('display','block')
              } else {
                  $(this).css('display','none')
              }


          }
        });
    });
}
