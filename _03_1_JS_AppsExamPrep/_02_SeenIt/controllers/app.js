$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        //WELCOME PAGE
        this.get('index.html', (context) => welcomeService.welcomePage(context));

        //REGISTER
        this.post('#/register', (context) => registerService.register(context));

        //LOGIN
        this.post('#/login', (context) => loginService.login(context));

        //CATALOG
        this.get('#/catalog', (context) => catalogService.listAllPosts(context));


        //LOGOUT by GET!!!!!!!
        this.get('#/logout', (context) => logoutService.logout(context));

        //CREATE POST
        this.get('#/create/post', (context) => createPostService.showCreateForm(context));
        this.post('#/create/post', (context) => createPostService.createPost(context));
        
        //EDIT POST
        this.get('#/edit/post/:postId', (context) => editPostService.showEditForm(context));
        this.post('#/edit/post/:postId', (context) => editPostService.editPost(context));

        //DELETE POST
        this.get('#/delete/post/:postId', (context) => deletePostService.deletePost(context));

        //LIST MY POSTS
        this.get('#/my/posts', (context) => myPostServices.showMyPosts(context));

        //DELETE MY POST
        this.get('#/delete/my/post/:postId', (context) => deletePostService.deleteMyPost(context));

        //POST DETAILS
        this.get('#/edit/my/post/:postId', (context) => editMyPostsService.showEditMyPostForm(context));
        this.post('#/edit/my/post/:postId', (context) => editMyPostsService.editMyPost(context));

        //POST DETAILS
        this.get('#/post/comments/:postId', (context) => postDetailsService.showPostDetails(context));

        //CREATE COMMENT
        this.post('#/add/comment/:postId', (context) => addCommentService.addComment(context));

        //DELETE COMMENT
        this.get('#/delete/comment/:commentId/:postId', (context) => deleteCommentsService.deleteComment(context));

    }).run();
});