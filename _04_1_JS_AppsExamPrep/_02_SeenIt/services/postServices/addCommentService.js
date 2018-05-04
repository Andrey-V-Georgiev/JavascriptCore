let addCommentService = (() => {

    //ADD NEW COMMENT
    function addComment(context) {

        let author = sessionStorage.getItem('username');
        let content = context.params.content;
        let postId = context.params.postId.substring(1);
        let dataObj = {author, content, postId};
        let base_url = authService.get('base_url');
        let app_key = authService.get('app_key');
        let url = `${base_url}/appdata/${app_key}/comments`;
        let auth = authService.kinveyAuth();
        let requestObj = {
            method: 'POST',
            url: url,
            headers: auth,
            data: dataObj
        };
        $.ajax(requestObj)
            .then(function (res) {
                notifyService.showInfo('Comment created.');
                context.redirect(`#/post/comments/:${res.postId}`);
            })
            .catch(function (res) {
                notifyService.showError(err)
            })
    }

    return{
        addComment
    }
})();