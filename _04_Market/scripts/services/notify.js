let notify = (() => {

    $(document).on({
        ajaxStart: () => $("#loadingBox").show(),
        ajaxStop: () => $('#loadingBox').fadeOut()
    });

    function showInfo(message) {
        let infoBox = $('#infoBox');
        infoBox.text(message);
        infoBox.fadeIn();
        setTimeout(() => infoBox.fadeOut(), 3000);
    }

    function showError(err) {
        let errorBox = $('#errorBox');

        if(err.responseJSON) {
            errorBox.text(err.responseJSON.description)
        } else {
            errorBox.text(err.message)
        }
        errorBox.fadeIn();
        setTimeout(() => errorBox.fadeOut(), 3000);
    }

    return {
        showInfo,
        showError
    }
})();