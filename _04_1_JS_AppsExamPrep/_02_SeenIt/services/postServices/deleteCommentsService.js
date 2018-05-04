let deleteCommentsService = (() => {

    function deleteComment(context) {

        let base_url = authService.get('base_url');
        let app_key = authService.get('app_key');
        let postId = context.params.postId.substring(1);
        let commentId = context.params.commentId.substring(1);
        let url = `${base_url}/appdata/${app_key}/comments/${commentId}`;
        let auth = authService.kinveyAuth();
        let requestObj = {
            method: 'DELETE',
            url: url,
            headers: auth,
        };

        $.ajax(requestObj)
            .then(function (res) {
                notifyService.showInfo(`Post deleted.`);

                context.redirect(`#/post/comments/:${postId}`)
            })
            .catch(function (res) {
                notifyService.showError(err)
            })
    }

    return {
        deleteComment
    }
})();