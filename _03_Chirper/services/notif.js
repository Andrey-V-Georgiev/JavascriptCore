let notif = (() => {

    $(document).on({
        ajaxStart: () => $("#loadingBox").show(),
        ajaxStop: () => $('#loadingBox').fadeOut()
    });

    function showInfo(message) {
        let infoBox = $('#infoBox');
        infoBox.find('span').text(message);
        infoBox.fadeIn();
        setTimeout(() => infoBox.fadeOut(), 3000);
    }

    function handleError(err) {
        if(err.responseJSON) {
            showError(err.responseJSON.description)
        } else {
            showError(err.message)
        }

        function showError(err) {
            let errorBox = $('#errorBox');
            errorBox.show(err);
            setInterval(errorBox.fadeOut, 3000)
        }
    }

    return {
        showInfo,
        handleError
    }
})();