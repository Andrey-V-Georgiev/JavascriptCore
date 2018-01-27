function focus() {
    let input = document.getElementsByTagName('input');
    input = Array.from(input);

    for (let inputTag of input) {
        inputTag.addEventListener('focus', function (event) {
            event.target.parentNode.className = 'focused'
        });

        inputTag.addEventListener('blur', (event) => {
            event.target.parentNode.removeAttribute('class');
        });
    }
}