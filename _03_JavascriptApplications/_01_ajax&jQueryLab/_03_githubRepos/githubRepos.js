function loadRepos() {

    $('#repos').empty();
    let inputText = $('#username').val();
    let urlAddress = "https://api.github.com/users/";
    let url = urlAddress + inputText + '/repos';
    $.ajax({
        url: url,
        success: displayRepos,
        error: displayError
    });

    function displayRepos(repos) {
        for (let repo of repos) {
            let link = $('<a>')
                .text(repo.full_name)
                .attr('href', repo.html_url);
            $('#repos').append($('<li>').append(link));
        }
    }

    function displayError() {
        $('#repos').append($('<li>Error</li>'));
    }
}