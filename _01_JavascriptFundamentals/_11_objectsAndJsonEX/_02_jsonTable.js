function convert(arr){
    let text = "<table>\n";
    for (let json of arr) {
        let obj = JSON.parse(json);
        text += '   <tr>\n';
            text += `   <td>${obj.name}</td>\n`;
            text += `   <td>${obj.position}</td>\n`;
            text += `   <td>${obj.salary}</td>\n`;
        text += '   <tr>\n';
        }
     text += "</table>\n";
    console.log(text);
}

convert(['{"name":"Pesho","position":"Promenliva","salary":100000}',
         '{"name":"Teo","position":"Lecturer","salary":1000}',
         '{"name":"Georgi","position":"Lecturer","salary":1000}']);
