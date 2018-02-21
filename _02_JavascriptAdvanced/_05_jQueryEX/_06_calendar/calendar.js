function calendar(arr) {
    let today = arr[0];
    let month = arr[1];
    let year = arr[2];
    let container = $('#content');
    let fragment = document.createDocumentFragment();
    let table = $('<table>');
    let captionText;
    switch (month) {
        case 1:
            captionText = `January ${year}`;
            break;
        case 2:
            captionText = `February ${year}`;
            break;
        case 3:
            captionText = `March ${year}`;
            break;
        case 4:
            captionText = `April ${year}`;
            break;
        case 5:
            captionText = `May ${year}`;
            break;
        case 6:
            captionText = `June ${year}`;
            break;
        case 7:
            captionText = `July ${year}`;
            break;
        case 8:
            captionText = `August ${year}`;
            break;
        case 9:
            captionText = `September ${year}`;
            break;
        case 10:
            captionText = `October ${year}`;
            break;
        case 11:
            captionText = `November ${year}`;
            break;
        case 12:
            captionText = `December ${year}`;
            break;
    }
    let caption = $(`<caption>${captionText}</caption>`);
    let tbody = $('<tbody>');
    let date = new Date(year, month - 1, today);
    let firstDateObj = new Date(date.getFullYear(), date.getMonth(), 1);
    let lastDateObj = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let firstDate = firstDateObj.getDate();
    let lastDate = lastDateObj.getDate();
    let firstDayOfWeek = firstDateObj.getDay();
    let lastDayOfWeek = lastDateObj.getDay();
    let emptyDaysInFront = firstDayOfWeek - 1;
    let emptyDaysInBack = 7 - lastDayOfWeek;
    if(emptyDaysInBack === 7){
        emptyDaysInBack = 0;
    }
    let numberOfWeeks = Math.round((emptyDaysInFront + lastDate + emptyDaysInBack) / 7);
    let daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let headerRow = $('<tr>');
    for (let i = 0; i < 7; i++) {
        let newTh = $(`<th>${daysOfWeek.shift()}</th>`);
        newTh.appendTo(headerRow);
        headerRow.appendTo(tbody);
    }
    let dayCounter = 0;
    for (let row = 0; row < numberOfWeeks; row++) {
        let newRow = $('<tr>');
        if (row === 0) {
            for (let day = 0; day < 7; day++) {
                let newTd;
                if (day < emptyDaysInFront) {
                    newTd = $('<td></td>');
                }
                else {
                    newTd = $(`<td>${++dayCounter}</td>`);
                    if (dayCounter === today) {
                        newTd.addClass('today');
                    }
                }
                newTd.appendTo(newRow);
            }
        }
        if (row > 0 && row < numberOfWeeks - 1) {
            for (let day = 0; day < 7; day++) {
                let newTd = $(`<td>${++dayCounter}</td>`);
                if (dayCounter === today) {
                    newTd.addClass('today');
                }
                newTd.appendTo(newRow);
            }
        }
        if (row === numberOfWeeks - 1) {
            for (let day = 0; day < 7; day++) {
                let newTd;
                if (dayCounter < lastDate) {
                    newTd = $(`<td>${++dayCounter}</td>`);
                    if (dayCounter === today) {
                        newTd.addClass('today');
                    }
                } else {
                    newTd = $('<td></td>');
                }
                newTd.appendTo(newRow);
            }
        }
        newRow.appendTo(tbody);
    }
    caption.appendTo(table);
    tbody.appendTo(table);
    table.appendTo(fragment);
    container.append(fragment);
}
