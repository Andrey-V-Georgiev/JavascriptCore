let createPostService = (() => {

    function showCreateForm(context) {
        if (!authService.isLogged()) {
            notifyService.showError('You have to be logged in)');
            context.redirect('index.html');
        }
        context.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            notifications:'./templates/common/notifications.hbs',
        }).then(function () {
            this.partial("./templates/viewCreate/createPage.hbs");
        });
    }

    function createPost(context) {
        let author = sessionStorage.getItem('username');
        let urlInput = context.params.url;
        let titleInput = context.params.title;
        let imageInput = context.params.image;
        let commentInput = context.params.comment;

        let base_url = authService.get('base_url');
        let app_key = authService.get('app_key');
        let url = `${base_url}/appdata/${app_key}/posts`;
        let auth = authService.kinveyAuth();
        let data = {
            author: author,
            url: urlInput,
            title: titleInput,
            imageUrl: imageInput,
            description: commentInput
        };
        let request = {
            method: 'POST',
            url: url,
            headers: auth,
            data: data
        };
        if(!urlInput.startsWith('http')) {
            notifyService.showError('Link url must starts with "http"!');
            context.redirect('#/create/post');
        } else if(titleInput.length === 0) {
            notifyService.showError('Title field can not be empty!');
            context.redirect('#/create/post');
        } else {
            $.ajax(request)
                .then(function() {
                    notifyService.showInfo('Post created.');
                    context.redirect('#/catalog');
                })
                .catch(function(res){
                    notifyService.showError(res);
                    context.redirect('#/create/post');
                })
        }
    }

    return {
        showCreateForm,
        createPost
    }
})();