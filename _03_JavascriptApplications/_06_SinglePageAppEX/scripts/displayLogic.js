function updateNavBar() {
    $('#linkHome').show();
    if(sessionStorage.length === 0) {
        $("#linkLogin").show();
        $("#linkRegister").show();
        $('#linkListAds').hide();
        $('#linkCreateAd').hide();
        $('#linkLogout').hide();
        $('#loggedInUser').hide();
    } else {
        $("#linkLogin").hide();
        $("#linkRegister").hide();
        $('#linkListAds').show();
        $('#linkCreateAd').show();
        $('#linkLogout').show();
        $('#loggedInUser').show();

    }
}

function loadView(arg) {
    $('main section').hide();
    $('#' + arg).show();
}
