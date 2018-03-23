function attachEvents() {
    const PHONEBOOK = $('#phonebook');
    const PERSON_ELEMENT = $('#person');
    const PHONE_ELEMENT = $('#phone');

    $('#btnLoad').click(loadContacts);
    $('#btnCreate').click(addContact);

    function loadContacts() {
        $.ajax({
            method: 'GET',
            url: 'https://phonebook-nakov.firebaseio.com/phonebook.json',
            success: displayContacts,
            error: showError
        });
    }

    function displayContacts(res) {
        PHONEBOOK.empty();
        for (let id in res) {
            let person = res[id]['person'];
            let phone = res[id]['phone'];
            let btn = $('<button>').text('[Delete]').click(deleteContact.bind(this, id));
            let li = $('<li>').text(`${person}: ${phone} `).append(btn);
            PHONEBOOK.append(li);
        }
    }

    function deleteContact(id) {
        $.ajax({
            method: 'DELETE',
            url: `https://phonebook-nakov.firebaseio.com/phonebook/${id}.json`,
            success: loadContacts,
            error: showError
        });
    }

    function addContact() {
        $.ajax({
            method: 'POST',
            url: 'https://phonebook-nakov.firebaseio.com/phonebook.json',
            data: JSON.stringify({person: PERSON_ELEMENT.val(),phone: PHONE_ELEMENT.val()}),
            success: loadContacts,
            error: showError
        });
        PERSON_ELEMENT.val('');
        PHONE_ELEMENT.val('');
    }

    function showError() {
        PHONEBOOK.append($('<li>').text('ERROR'));
    }
}



