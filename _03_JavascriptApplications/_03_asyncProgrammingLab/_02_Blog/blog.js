$(document).ready(function () {
    const URL = 'https://baas.kinvey.com/appdata/kid_rkNEwpMqz';
    const LOAD_BTN = $('#btnLoadPosts');
    const VIEW_BTN = $('#btnViewPost');
    const POSTS_EL = $('#posts');
    const POST_TITLE_EL = $('#post-title');
    const POST_BODY_EL = $('#post-body');
    const POST_COMMENTS_EL = $('#post-comments');
    const USERNAME = 'peter';
    const PASSWORD = 'p';
    const BASE64 =  btoa(USERNAME + ':' + PASSWORD);
    const AUTHORIZATION = {'Authorization': 'Basic ' + BASE64};

    LOAD_BTN.click(loadPosts);
    VIEW_BTN.click(showSelectedPost);

    function loadPosts() {
        $.ajax({
            method: 'GET',
            url: URL + '/posts/',
            headers: AUTHORIZATION
        }).then(loadOptions).catch(showError);

        function loadOptions(res) {
            for (let post of res) {
                let id = post['_id'];
                let title = post['title'];
                let newOptEl = $('<option>').val(id).text(title);
                POSTS_EL.append(newOptEl);
            }
        }
    }

    function showSelectedPost() {
        let selectedEl = $('#posts option:selected');
        $.ajax({
            method: 'GET',
            url: URL + `/posts/${selectedEl.val()}`,
            headers: AUTHORIZATION
        }).then(showPostInfo).catch(showError);

        function showPostInfo(res) {
            POST_TITLE_EL.text(res['title']);
            POST_BODY_EL.text(res['body']);
        }

        $.ajax({
            method: 'GET',
            url: URL + `/comments/?query={"post_id":"${selectedEl.val()}"}`,
            headers: AUTHORIZATION
        }).then(showComments).catch(showError);

        function showComments(res) {
            POST_COMMENTS_EL.empty();
            for (let key in res) {
                let text = res[key]['text'];
                POST_COMMENTS_EL.append($('<li>').text(text));
            }
        }
    }

    function showError(err) {
        POST_TITLE_EL.text('ERROR');
    }
});