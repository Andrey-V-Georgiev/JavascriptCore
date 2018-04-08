ctrls.contactControllers = function (context) {
    $.get('data.json').then((data) => context.contacts = data);

    this.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
        contact: './templates/common/contact.hbs',
        contactList: './templates/common/contactList.hbs',
        details: './templates/common/details.hbs'
    }).then(function () {
        this.partial('./templates/contacts.hbs');
    })
};