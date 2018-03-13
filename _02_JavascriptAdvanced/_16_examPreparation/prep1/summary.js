function onClick(selector){
    $(selector).on('click', summary() );

    function summary() {
        let summaryText = $('#content strong').text();
        let summaryDiv = $('<div>').attr('id', 'summary');
        let h2Summary = $('<h2>').text('Summary');
        let pSummary = $('<p>').text(summaryText);

        summaryDiv.append(h2Summary);
        summaryDiv.append(pSummary);
        let parent = $('#content').parent();
        parent.append(summaryDiv);
    }
}



