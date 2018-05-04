let handle = (() => {

    //REGISTER LOGIC
    function registration(context) {
        let [username, password] = getNameAndPass(context);
        let repeatPass = context.params.repeatPassword;
        if (password !== repeatPass) {
            alert('Passwords do not match');
        } else {
            auth.register(username, password)
                .then(function () {
                    auth.showInfo(`You are successfully registered`);
                    window.location.hash = '#/login';
                })
                .catch(function (err) {
                    auth.showError(err)
                })
        }
    }

    //LOGIN LOGIC
    function loggingIn(context) {
        let [username, password] = getNameAndPass(context);
        auth.login(username, password)
            .then(function (res) {
                auth.showInfo(`Hello, ${res.username} you are now logged in!`);
                auth.saveSession(res);
                window.location.hash = '#/home';
            }).catch(function (err) {
            auth.showError(err)
        })
    }

    //CREATE LOGIC
    function creatingTeam(context) {
        let name = context.params.name;
        let comment = context.params.comment;
        teamsService.createTeam(name, comment).then(function () {
            auth.showInfo(`You have successfully created a team!`);
            window.location.hash = '#/catalog';
        }).catch(function (err) {
            auth.showError(err)
        })
    }

    //JOIN LOGIC
    function joining(context) {
        if (sessionStorage.getItem('teamId') !== 'undefined') {
            auth.showInfo('Users can join only one team!');
        } else {
            let teamId = context.params.ID.substring(1);
            teamsService.joinTeam(teamId)
                .then(function (res) {
                    auth.saveSession(res);
                    window.location.hash = `#/catalog/:${teamId}`;
                })
                .catch(function (err) {
                    auth.showError(err)
                })
        }
    }

    //EDIT LOGIC
    function updateTeam(context) {
        let name = context.params.name;
        let description = context.params.comment;
        let teamId = context.params.ID.substring(1);
        teamsService.edit(teamId, name, description)
            .then(function () {
                window.location.hash = `#/catalog/:${teamId}`;
            }).catch(function (err) {
            auth.showError(err)
        })
    }

    //LEAVE LOGIC
    function leaveTeam(context) {
        teamsService.leaveTeam().then(function (res) {
            auth.saveSession(res);
            window.location.hash = `#/catalog`;
        }).catch(function (err) {
            auth.showError(err)
        })
    }


    //LOGOUT LOGIC
    function loggingOut() {
        auth.logout()
            .then(function (res) {
                auth.showInfo(`You are now logged out!`);
                sessionStorage.clear();
                window.location.hash = '#/home';
            })
            .catch(function (err) {
                auth.showError(err)
            })
    }

    //GET USERNAME AND PASSWORD
    function getNameAndPass(context) {
        return [context.params.username, context.params.password];
    }

    return {
        loggingOut,
        loggingIn,
        registration,
        creatingTeam,
        joining,
        updateTeam,
        leaveTeam
    }
})();