let deletePostService = (() => {

    function deletePost(context) {

        let base_url = authService.get('base_url');
        let app_key = authService.get('app_key');
        let postId = context.params.postId.substring(1);
        let url = `${base_url}/appdata/${app_key}/posts/${postId}`;
        let auth = authService.kinveyAuth();
        let requestObj = {
            method: 'DELETE',
            url: url,
            headers: auth,
        };
        $.ajax(requestObj)
            .then(function (res) {
                notifyService.showInfo(`Post deleted.`);
                context.redirect('#/catalog')
            })
            .catch(function (res) {
                notifyService.showError(err)
            })
    }

    function deleteMyPost(context) {

        let base_url = authService.get('base_url');
        let app_key = authService.get('app_key');
        let postId = context.params.postId.substring(1);
        let url = `${base_url}/appdata/${app_key}/posts/${postId}`;
        let auth = authService.kinveyAuth();
        let requestObj = {
            method: 'DELETE',
            url: url,
            headers: auth,
        };
        $.ajax(requestObj)
            .then(function (res) {
                notifyService.showInfo(`Post deleted.`);
                context.redirect('#/my/posts')
            })
            .catch(function (res) {
                notifyService.showError(err)
            })
    }

    return{
        deletePost,
        deleteMyPost
    }
})();