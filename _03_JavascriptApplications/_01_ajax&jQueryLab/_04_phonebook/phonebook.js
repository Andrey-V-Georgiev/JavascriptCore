$(function () {
    $('#btnLoad').click(displayContacts);
    $('#btnCreate').click(createContact);
    let ulContainer = $('#phonebook');

    function createElement(name, number , id) {
        let liContact = $(`<li>${name}: ${number} </li>`)
             .append($('<button>[Delete]</button>')
                 .click(() => {
                     $.ajax({
                         method: 'DELETE',
                         url: `https://phonebook-715cd.firebaseio.com/${id}.json`,
                         success: function() {$(liContact).remove()},
                         error: appendEror
                     });
                 }));
        return liContact;
    }

    function appendEror() {
        ulContainer.append('<li>Error</li>')
    }

    function displayContacts() {
        ulContainer.empty();
        $.ajax({
            method: 'GET',
            url: 'https://phonebook-715cd.firebaseio.com/.json',
            success: loadContacts,
            error: appendEror
        });

        function loadContacts(phonebook) {
            for (let contact in phonebook) {
                ulContainer.append(
                    createElement(phonebook[contact]['name'],phonebook[contact]['phone'], contact));
            }
        }
    }

    function createContact() {
        let personElement = $('#person');
        let phoneElement = $('#phone');
        let nameText = personElement.val();
        let phoneText = phoneElement.val();
        personElement.val('');
        phoneElement.val('');
        let postData = JSON.stringify({name: nameText, phone: phoneText});
        if(nameText !== '' && phoneText !== ''){
            $.ajax({
                method: 'POST',
                url: 'https://phonebook-715cd.firebaseio.com/.json',
                data: postData,
                success: (id) => ulContainer.append(
                    createElement(nameText, phoneText, id)),
                error: appendEror
            });
        }
}});



