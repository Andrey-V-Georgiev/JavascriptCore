let postDetailsService = (() => {


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

    //SHOW POST DETAILS LOGIC
    function showPostDetails(context) {
        if (!authService.isLogged()) {
            notifyService.showError('You have to be logged in)');
            context.redirect('index.html');
        }
        let base_url = authService.get('base_url');
        let app_key = authService.get('app_key');
        let postId = context.params.postId.substring(1);
        let url = `${base_url}/appdata/${app_key}/posts/${postId}`;
        let auth = authService.kinveyAuth();
        let requestObj = {
            method: 'GET',
            url: url,
            headers: auth
        };
        getAllCommentsForPost(postId)
            .then(function (comments) {
                for (let comment of comments) {
                    let dateCreation = comment._kmd.ect;
                    comment.before = calcTime(dateCreation);
                    comment.commentId = comment._id;
                }
                context.comments = comments;
            })
            .catch(function (res) {
                notifyService.showError(err)
            });

        $.ajax(requestObj).then(function (res) {
            let dateOfCreation = res._kmd.ect;
            context.postId = postId;
            context.author = res.author;
            context.url = res.url;
            context.title = res.title;
            context.imageUrl = res.imageUrl;
            context.description = res.description;
            context.before = calcTime(dateOfCreation);
            context.isLogged = authService.isLogged();
            context.isAuthor = res.author === sessionStorage.getItem('username');

            context.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                navbar: './templates/common/navbar.hbs',
                notifications: './templates/common/notifications.hbs',
                postDetails: './templates/viewComments/postDetails.hbs',
                commentForm: './templates/viewComments/commentForm.hbs',
                comment: './templates/viewComments/comment.hbs'
            }).then(function () {
                this.partial("./templates/viewComments/commentsPage.hbs");
            });
        });
    }

    function getAllCommentsForPost(postId) {
        let base_url = authService.get('base_url');
        let app_key = authService.get('app_key');
        let url = `${base_url}/appdata/${app_key}/comments?query={"postId":"${postId}"}&sort={"_kmd.ect": -1}`;
        let auth = authService.kinveyAuth();
        let requestObj = {
            method: 'GET',
            url: url,
            headers: auth
        };
        return $.ajax(requestObj);
    }

    return {
        showPostDetails
    }
})();