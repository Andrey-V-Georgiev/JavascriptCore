$(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        getCatsData();
        async function getCatsData() {
            let templateRaw = await $.get('template.html');
            let templateHB = Handlebars.compile(templateRaw);
            let catsObj = {theCats: cats};

            let outputEl = templateHB(catsObj);
            $('#allCats').append(outputEl);
            attachEvents();
        }

        function attachEvents() {
            $('.btn.btn-primary').on('click', function() {
                let div = $(this).parent().children()[1];
                $(div).toggle();
            });
        }
    }
});
