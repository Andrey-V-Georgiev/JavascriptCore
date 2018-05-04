let render = (() => {

    //REGISTER LOGIC
    function registerComponent(context) {
        setHeaderReq(context);
        context.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            registerForm: './templates/register/registerForm.hbs',

        }).then(function () {
            this.partial('./templates/register/registerPage.hbs');
        });
    }

    //LOGIN LOGIC
    function loginComponent(context) {
        setHeaderReq(context);
        context.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            loginForm: './templates/login/loginForm.hbs'
        })
            .then(function () {
                this.partial('./templates/login/loginPage.hbs');
            })
    }

    //HOME LOGIC
    function homepageComponent(context) {
        setHeaderReq(context);
        context.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        }).then(function () {
            this.partial('./templates/home/home.hbs')
        });
    }

    //ABOUT LOGIC
    function aboutComponent(context) {
        setHeaderReq(context);
        context.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
        }).then(function () {
            this.partial('./templates/about/about.hbs')
        });
    }

    //CATALOG LOGIC
    async function catalogComponent(context) {
        setHeaderReq(context);
        context.hasNoTeam = sessionStorage.getItem('teamId');
        context.teams = await teamsService.loadTeams();
        context.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            team: './templates/catalog/team.hbs'
        })
            .then(function () {
                this.partial('./templates/catalog/teamCatalog.hbs');
            });
    }

    //CREATE LOGIC
    function createComponent(context) {
        setHeaderReq(context);
        context.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            createForm: './templates/create/createForm.hbs'
        }).then(function() {
            this.partial('./templates/create/createPage.hbs');
        })
    }

    //TEAM DETAILS LOGIC
    async function teamDetails(context) {
        setHeaderReq(context);
        let teamId = context.params.ID.substring(1);
        let teamDetails = await teamsService.loadTeamDetails(teamId);
        let endpoint = `?query={"teamId":"${teamId}"}`;
        let members = await requester.get('user', endpoint, 'Kinvey');
        context.name = teamDetails.name;
        context.comment = teamDetails.comment;
        context.members = members;
        context.isOnTeam = teamId === sessionStorage.getItem('teamId');
        context.isAuthor = teamDetails._acl.creator === sessionStorage.getItem('userId');
        context.teamId = teamId;

        context.loadPartials({
            header: "./templates/common/header.hbs",
            footer: "./templates/common/footer.hbs",
            teamControls: "./templates/catalog/teamControls.hbs",
            teamMember: "./templates/catalog/teamMember.hbs"
        }).then(function () {
            this.partial("./templates/catalog/details.hbs")
        });
    }

    //EDIT LOGIC
    async function editComponent(context) {
        setHeaderReq(context);
        let teamId = context.params.ID.substring(1);
        let teamDetails = await teamsService.loadTeamDetails(teamId);
        context.name = teamDetails.name;
        context.comment = teamDetails.comment;
        context.teamId = teamId;
        context.loadPartials({
            header: "./templates/common/header.hbs",
            footer: "./templates/common/footer.hbs",
            editForm: "./templates/edit/editForm.hbs"
        }).then(function() {
            this.partial("./templates/edit/editForm.hbs");
        })
    }

    //SET HEADER REQUIREMENTS
    function setHeaderReq(context) {
        context.username = sessionStorage.getItem('username');
        context.loggedIn = sessionStorage.getItem('authtoken');
    }

    return {
        homepageComponent,
        registerComponent,
        aboutComponent,
        loginComponent,
        catalogComponent,
        createComponent,
        teamDetails,
        editComponent,
    }
})();