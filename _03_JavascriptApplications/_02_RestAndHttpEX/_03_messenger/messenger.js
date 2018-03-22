function attachEvents() {
    $('#refresh').click(refresh);
    $('#submit').click(addPost);

    function refresh() {
        $.ajax({
            method: 'GET',
            url: 'https://essenger-cfab2.firebaseio.com/messenger/.json',
            success: updateInfo,
            error: showError
        })
    }

    function updateInfo(res) {
        let text = '';
        for (let id in res) {
            let author = res[id]['author'];
            let content = res[id]['content'];
            let currentPosition = `${author}: ${content}\n`;
            text = text.concat(currentPosition);
        }
        $('#messages').text(text);
    }

    function addPost() {
        let authorE = $('#author');
        let contentE = $('#content');
        let newData = {
            author: authorE.val(),
            content: contentE.val(),
            timestamp: Date.now()
        };

        $.ajax({
            method: 'POST',
            url: 'https://essenger-cfab2.firebaseio.com/messenger/.json',
            data: JSON.stringify(newData),
            success: refresh,
            error: showError
        });
        authorE.val('');
        contentE.val('');
    }

    function showError(err) {
        console.log(err);
    }
}
