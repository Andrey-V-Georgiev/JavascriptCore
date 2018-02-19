function validate() {
    let username = $('#username');
    username.attr('style', 'border: none');
    let email = $('#email');
    email.attr('style', 'border: none');
    let pass = $('#password');
    pass.attr('style', 'border: none');
    let confirmPass = $('#confirm-password');
    confirmPass.attr('style', 'border: none');
    let isCompany = $('#company');
    let companyNum = $('#companyNumber');
    companyNum.attr('style', 'border: none');

    $(isCompany).change(function () {
        if ($(isCompany).prop('checked')) {
            $('#companyInfo').css({display: 'block'});
        } else {
            $('#companyInfo').css({display: 'none'});
        }
    });

    $('#submit').click(submit);
    function submit(event) {
        event.preventDefault();
        username.attr('style', 'border: none');
        email.attr('style', 'border: none');
        pass.attr('style', 'border: none');
        confirmPass.attr('style', 'border: none');
        companyNum.attr('style', 'border: none');
        function invalidUsername() {
            return username.val().length < 3 || username.val().length > 20
        }
        if (invalidUsername()) {
            $(username).attr('style', 'border-color: #ff0000');
        }

    function invalidEmail() {
        let atReg = /@/g;
        let dotReg = /\./g;
        let atMatch = email.val().match(atReg);
        let dotMatch = email.val().match(dotReg);
        try {
            return atMatch.length !== 1 || dotMatch.length < 1;
        } catch (err) {
            return true;
        }
    }

        if (invalidEmail()) {
            $(email).attr('style', 'border-color: #ff0000');
        }
        let regex = /\w+/g;
        let matchPass = pass.val().match(regex);
        function invalidPass() {
            return matchPass.length !== 1 || pass.val().length < 5 || pass.val().length > 15;
        }
        try {
            if (invalidPass()) {
                $(pass).attr('style', 'border-color: #ff0000');
            }
        } catch (err) {
            $(pass).attr('style', 'border-color: #ff0000');
        }
        function invalidPassConfirmation() {
            return pass.val() !== confirmPass.val() || confirmPass.val().length === 0
                || confirmPass.val().length < 5 || confirmPass.val().length > 15;
        }
        try {
            if (invalidPassConfirmation()) {
                $(confirmPass).attr('style', 'border-color: #ff0000');
            }
        } catch (err) {
            $(confirmPass).attr('style', 'border-color: #ff0000');
        }

        function invalidCompanyNumber() {
            return Number(companyNum.val()) < 1000 || Number(companyNum.val()) > 10000
        }
        if (invalidCompanyNumber()) {
            $(companyNum).attr('style', 'border-color: #ff0000');
        }
        let validElement = $('#valid');
        if ($(isCompany).prop('checked')) {
            if (!invalidUsername() && !invalidEmail() && !invalidPass() && !invalidPassConfirmation() &&!invalidCompanyNumber()) {
                $(validElement).css('display','block')
            } else {
                $(validElement).css('display','none')
            }
        } else {
            if (!invalidUsername() && !invalidEmail() && !invalidPass() && !invalidPassConfirmation()) {
                $(validElement).css('display','block')
            } else {
                $(validElement).css('display','none')
            }
        }
    }
}

