let editPostService = (() => {

    function showEditForm(context) {
        let postId = context.params.postId.substring(1);
        let base_url = authService.get('base_url');
        let app_key = authService.get('app_key');

        if (!authService.isLogged()) {
            notifyService.showError('You have to be logged in)');
            context.redirect('index.html');
        }
        let url = `${base_url}/appdata/${app_key}/posts/${postId}`;
        let auth = authService.kinveyAuth();
        let requestObj = {
            method: 'GET',
            url: url,
            headers: auth
        };
        $.ajax(requestObj)
            .then(function (res) {
                context.postId = res._id;
                context.url = res.url;
                context.title = res.title;
                context.imageUrl = res.imageUrl;
                context.description = res.description;
                context.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    notifications: './templates/common/notifications.hbs',
                })
                    .then(function (res) {
                        this.partial("./templates/viewEdit/editPage.hbs");
                    });
            })
            .catch(function (res) {
                notifyService.showError(err)
            })
    }

    function editPost(context) {
        let newUrl = context.params.url;
        let newTitle = context.params.title;
        let newImage = context.params.image;
        let newDescription = context.params.description;

        let dataObj = {
            author: sessionStorage.getItem('username'),
            url: newUrl,
            title: newTitle,
            imageUrl: newImage,
            description: newDescription
        };

        let base_url = authService.get('base_url');
        let app_key = authService.get('app_key');
        let postId = context.params.postId.substring(1);
        let url = `${base_url}/appdata/${app_key}/posts/${postId}`;
        let auth = authService.kinveyAuth();
        let requestObj = {
            method: 'PUT',
            url: url,
            headers: auth,
            data: dataObj
        };
        $.ajax(requestObj)
            .then(function (res) {
            notifyService.showInfo(`Post ${res.title} updated.`);
               context.redirect('#/catalog')
            })
            .catch(function (res) {
                notifyService.showError(err)
            })
    }

    return {
        showEditForm,
        editPost
    }
})();