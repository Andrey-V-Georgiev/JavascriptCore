function attachEdit() {
    let advertId;

    $('.edit-advert').on('click', function editAdvert() {
        advertId = $($(this).parent()).attr('id');
        $.ajax({
            method: 'GET',
            url: URL_AD + 'appdata/' + APP_KEY_AD + COLLECTION_AD + advertId,
            headers: authorizationKinvey(),
            contentType: 'application/json',
            success: renderEditForm,
            error: displayError
        });
    });

    function renderEditForm(res) {
        editView();
        let editObj = {
            viewId: 'viewEditAd',
            viewClass: 'viewEditAd',
            greeting: 'Edit existing advertisement',
            formId: 'formEditAd',
            btnId: 'buttonEditAd',
            btnValue: 'Edit',
            title: res.title,
            description: res.description,
            date: res.date,
            price: res.price,
            image: res.image
        };

        async function editView() {
            let editTemplateRaw = await $.get('templates/createAndEdit.html');
            let editTemplate = Handlebars.compile(editTemplateRaw);
            let editElement = editTemplate(editObj);
            let mainEl =  $('main');
            mainEl.empty();
            mainEl.append(editElement);
            mainEl.find('section').css('display', 'block');
            $('#buttonEditAd').click(saveEditedChanges);
        }

        function saveEditedChanges() {
            let formEditAd = $('#formEditAd');

            //get the changed data
            let editedTitle = formEditAd.find('input[name=title]').val();
            let editedDescription = formEditAd.find('textarea[name=description]').val();
            let editedDate = formEditAd.find('input[name=datePublished]').val();
            let editedPrice = Number(formEditAd.find('input[name=price]').val());
            let publisher = sessionStorage.getItem('username');
            let editedImage = formEditAd.find('input[name=image]').val();

            let editedDataJSON = JSON.stringify({
                title: editedTitle,
                description: editedDescription,
                date: editedDate,
                price: editedPrice,
                publisher: publisher,
                image: editedImage
            });
            //update the DB
            $.ajax({
                method: 'PUT',
                url: URL_AD + 'appdata/' + APP_KEY_AD + COLLECTION_AD + advertId,
                headers: authorizationKinvey(),
                contentType: 'application/json',
                data: editedDataJSON,
                success: listTheAdverts,
                error: displayError
            });
        }
    }
}