let catalogService = (() => {

    //CALC TIME FROM CREATION
    function calcTime(dateIsoFormat) {
        let diff = new Date - (new Date(dateIsoFormat));
        diff = Math.floor(diff / 60000);
        if (diff < 1) return 'less than a minute';
        if (diff < 60) return diff + ' minute' + pluralize(diff);
        diff = Math.floor(diff / 60);
        if (diff < 24) return diff + ' hour' + pluralize(diff);
        diff = Math.floor(diff / 24);
        if (diff < 30) return diff + ' day' + pluralize(diff);
        diff = Math.floor(diff / 30);
        if (diff < 12) return diff + ' month' + pluralize(diff);
        diff = Math.floor(diff / 12);
        return diff + ' year' + pluralize(diff);
        function pluralize(value) {
            if (value !== 1) return 's';
            else return '';
        }
    }

    //CATALOG REQUEST
    function getAllPosts() {
        let base_url = authService.get('base_url');
        let app_key = authService.get('app_key');
        let url = `${base_url}/appdata/${app_key}/posts?query={}&sort={"_kmd.ect": -1}`;
        let auth = authService.kinveyAuth();
        let request = {
            method: 'GET',
            url: url,
            headers: auth,
        };
        return $.ajax(request);
    }

    //CATALOG LOGIC
    async function listAllPosts(context) {
        if(!authService.isLogged()) {
            notifyService.showError('You have to be logged in)');
            context.redirect('index.html');
        }
        let unsortedPosts = await getAllPosts();
        let sortedPosts = unsortedPosts.sort(function(a,b) {
            if(a._kmd.ect <= b._kmd.ect) {
                return -1;
            } else {
                return 1;
            }
        });
        for (let i = 0; i < sortedPosts.length; i++) {
            sortedPosts[i].rank = i + 1;
            let dateOfCreation = sortedPosts[i]._kmd.ect;
            sortedPosts[i].before = calcTime(dateOfCreation);
            sortedPosts[i].isAuthor = sessionStorage.getItem('userId') === sortedPosts[i]._acl.creator;
        }

        context.posts = sortedPosts;
        context.isLogged = authService.isLogged();
        context.username = sessionStorage.getItem('username');
        context.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            navbar: './templates/common/navbar.hbs',
            notifications:'./templates/common/notifications.hbs',
            post: './templates/viewCatalog/post.hbs'
        }).then(function() {
            this.partial("./templates/viewCatalog/catalogPage.hbs");
        });
    }

    return{
        listAllPosts
    }
})();