function calendar(arr) {
    let [day, month, year] = arr;
    let container = $('#content');
    let fragment = document.createDocumentFragment();

    let table = $('<table>');

    let captionText;
    switch(month){
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
    //TODO calc num of weeks, first and last day, first and last date
    let date =  new Date(year, month - 1, day);
    let firstDateObj = new Date(date.getFullYear(), date.getMonth(), 1);
    let lastDateObj = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let firstDate = firstDateObj.getDate();
    let lastDate = lastDateObj.getDate();
    let firstDayOfWeek = firstDateObj.getDay();
    let lastDayOfWeek = lastDateObj.getDay();
    let emptyDaysInFront = firstDayOfWeek;
    let emptyDaysInBack = 6 - lastDayOfWeek;
    let monthLength = lastDayOfWeek;
    let numberOfWeeks = (emptyDaysInFront + monthLength + emptyDaysInBack) / 7;

    //TODO create table header
    let daysOfWeek = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    let headerRow = $('<tr>');
    for (let i = 0; i < 7; i++) {
        let newTh = $(`<th>${daysOfWeek.shift()}</th>`);
        newTh.appendTo(headerRow);
    }
    //TODO create standard cells
    for (let row = 0; row < numberOfWeeks; row++) {
        let newRow = $('<tr>');
        //todo fill the first week
        for (let i = 0; i < emptyDaysInFront; i++) {
            let newTd = $('<td>');
            newTd.appendTo(newRow);
        }
        //todo fill other weeks

        //todo fill last week

        newRow.appendTo();
        newRow.appendTo(table);
    }


    //TODO append all
    headerRow.appendTo(table);
    caption.appendTo(table);
    tbody.appendTo(table);
    table.appendTo(fragment);
    container.append(fragment);
}
