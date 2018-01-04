function jsonToHtmlTable(json) {
    let arr = JSON.parse(json);
    let html = "<table>\n";
    //first row always same
    html += "  <tr>";
    for (let key of Object.keys(arr[0])) {
        html += `<th>${htmlEscape(key)}</th>`;
    }
    html += "</tr>\n";
    for (let object of arr) {
        html += '  <tr>';
        for (let val of Object.values(object)) {
            html +=`<td>${htmlEscape(''+val)}</td>`;
        }
        html += '</tr>\n';
    }
    html += "</table>\n";
    console.log(html);
    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}

jsonToHtmlTable('[{"Name":"Tomatoes & Chips","Price":2.35},' +
    '{"Name":"J&B Chocolate","Price":0.96}]\n');