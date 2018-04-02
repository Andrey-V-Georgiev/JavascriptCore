$(() => {
    let details;
    let data;

    loadFiles();
    async function loadFiles() {
        data = await $.get('data.json');
        let obj = { contacts: data };
        let contacts = await $.get('templates/contacts.html');
        let contactsTemplate = Handlebars.compile(contacts);
        let table = contactsTemplate(obj);
        $('#list').append(table);

        details = await $.get('templates/details.html');
        attachEvents();
    }

    function attachEvents() {
        $('.contact').on('click', function() {
            loadDetails($(this).attr('data-id'));
            $('.active').removeClass('active');
            $(this).addClass('active');
        })
    }

    function loadDetails(index){
        let detailsTemplate = Handlebars.compile(details);
        let html = detailsTemplate(data[index]);
        let detailsEl = $('#details');
        detailsEl.empty();
        detailsEl.append(html);
    }
});