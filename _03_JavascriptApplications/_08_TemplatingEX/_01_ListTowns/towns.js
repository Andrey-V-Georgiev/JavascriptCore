async function attachEvents() {
    let inputField = $('#towns');
    let submitBtn = $('#btnLoadTowns');
    let townTemplateRaw = await $.get('towns-template.html');
    let townTemplateCompiled = Handlebars.compile(townTemplateRaw);

    submitBtn.on('click', getInputString);

    function getInputString() {
        let inputString = inputField.val();
        let townsStrArr = inputString.split(', ');
        let towsArrObj = { towns: townsStrArr};
        let outputEl = townTemplateCompiled(towsArrObj);
        $('#root').append(outputEl);
    }
}