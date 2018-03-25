function attachEvents() {
    const URL = 'https://baas.kinvey.com/appdata/kid_ryFYzw4qG/biggestCatches/';
    const USER = 'andrey';
    const PASS = 'a';
    const BASE64 = btoa(USER + ':' + PASS);
    const AUTHORIZATION = {'Authorization': 'Basic ' + BASE64, 'Content-type': 'application/json'};
    const CATCHES_DIV = $('#catches');
    const LOAD_BTN = $('#aside .load');
    const ADD_BTN = $('.add');
    const ADDFORM = $('#addForm');

    LOAD_BTN.click(loadCatches);
    ADD_BTN.click(addCatch);

    function loadCatches() {
        $.ajax({
            method: 'GET',
            url: URL,
            headers: AUTHORIZATION
        }).then(refreshCatches).catch(showError);

        function refreshCatches(res) {
            CATCHES_DIV.empty();
            for (let post of res) {
                let newCatch = createCatchElement(post._id, post.angler, post.weight, post.species, post.location, post.bait, post.captureTime);
                CATCHES_DIV.append(newCatch);
            }
        }
    }

    function addCatch() {
        let angler = ADDFORM.find('.angler').val();
        let weight = ADDFORM.find('.weight').val();
        let species = ADDFORM.find('.species').val();
        let location = ADDFORM.find('.location').val();
        let bait = ADDFORM.find('.bait').val();
        let captureTime = ADDFORM.find('.captureTime').val();
        let newCatch = createCatchObject(angler, weight, species, location, bait, captureTime);

        $.ajax({
            method: 'POST',
            url: URL,
            headers: AUTHORIZATION,
            data: JSON.stringify(newCatch)
        }).then(addToHTML).catch(showError);

        function addToHTML(res) {
            let _id = res['_id'];
            let newCatch = createCatchElement(_id, angler, weight, species, location, bait, captureTime);
            CATCHES_DIV.append(newCatch);
        }

        for (let input of ADDFORM.children()) {
            $(input).val('');
        }

       // $(ADDFORM).find('<input>').each(e => e.val(''));
    }

    function deleteCatch() {
        let dataID = $(this).parent().attr('data-id');
        let catchDiv = $(this).parent();
        $.ajax({
            method: 'DELETE',
            url: URL + dataID,
            headers: AUTHORIZATION
        }).then(deleteFromHTML).catch(showError);

        function deleteFromHTML(res) {
            catchDiv.remove();
        }
    }

    function updateCatch() {
        let dataID = $(this).parent().attr('data-id');
        let catchDiv = $(this).parent();
        let angler = catchDiv.find('.angler').val();
        let weight = catchDiv.find('.weight').val();
        let species = catchDiv.find('.species').val();
        let location = catchDiv.find('.location').val();
        let bait = catchDiv.find('.bait').val();
        let captureTime = catchDiv.find('.captureTime').val();
        let newCatch = createCatchObject(angler, weight, species, location, bait, captureTime);
        $.ajax({
            method: 'PUT',
            url: URL + dataID,
            headers: AUTHORIZATION,
            data: JSON.stringify(newCatch)
        }).then(updateToHTML).catch(showError);

        function updateToHTML() {
            let newCatch = createCatchElement(dataID, angler, weight, species, location, bait, captureTime);
            catchDiv.remove();
            CATCHES_DIV.append(newCatch);
        }
    }

    function createCatchObject(angler, weight, species, location, bait, captureTime) {
        return {
            angler: angler,
            weight: Number(weight),
            species: species,
            location: location,
            bait: bait,
            captureTime: Number(captureTime)
        }
    }

    function createCatchElement(_id, angler, weight, species, location, bait, captureTime) {
        return $('<div>').addClass('catch').attr('data-id', `${_id}`)
            .append($('<label>Angler</label>'))
            .append($('<input type="text"/>').addClass('angler').val(angler))
            .append($('<label>Weight</label>'))
            .append($('<input type="number"/>').addClass('weight').val(weight))
            .append($('<label>Species</label>'))
            .append($('<input type="text"/>').addClass('species').val(species))
            .append($('<label>Location</label>'))
            .append($('<input type="text"/>').addClass('location').val(location))
            .append($('<label>Bait</label>'))
            .append($('<input type="text"/>').addClass('bait').val(bait))
            .append($('<label>Capture Time</label>'))
            .append($('<input type="number"/>').addClass('captureTime').val(captureTime))
            .append($('<button>').addClass('update').text('Update').click(updateCatch))
            .append($('<button>').addClass('delete').text('Delete').click(deleteCatch));
    }

    function showError(err) {
        alert(err.statusText.toUpperCase());
    }
}