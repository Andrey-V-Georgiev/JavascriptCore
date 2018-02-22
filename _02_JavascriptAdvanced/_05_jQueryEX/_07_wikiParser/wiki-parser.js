function wikiParser(selector) {
    let pTag = $(selector);

    let h3Reg = /===(.*?)===/g;
    let h2Reg = /==(.*?)==/g;
    let h1Reg = /=(.*?)=/g;
    let link2Reg = /\[\[([^\[\]]+?)\|(.+?)\]\]/gm;
    let link1Reg = /\[\[([^\[\]]+?)\]\]/gm;
    let bReg = /'''(.*?)'''/g;
    let iReg = /''(.*?)''/g;
    let text = pTag.text();

    text = text
        .replace(h3Reg, (m, g1) => `<h3>${g1}</h3>`)
        .replace(h2Reg, (m, g1) => `<h2>${g1}</h2>`)
        .replace(h1Reg, (m, g1) => `<h1>${g1}</h1>`)
        .replace(link2Reg, (m, g1, g2) =>  `<a href="/wiki/${g1}">${g2}</a>`)
        .replace(link1Reg, (m, g1)     => `<a href="/wiki/${g1}">${g1}</a>`)
        .replace(bReg, (m, g1) => `<b>${g1}</b>`)
        .replace(iReg, (m, g1) => `<i>${g1}</i>`);

    pTag.html(text);
}

//= new RegExp('(?<!\')\'\'([\\w ]+)\'\'', 'g');
//= new RegExp('\'{3}([\\w ]+)\'{3}', 'g');
//= new RegExp('(?<!=)=([\\w ]+)=', 'g');
//= new RegExp('(?<!=)={2}([\\w ]+)={2}', 'g');
//= new RegExp('={3}([\\w ]+)={3}', 'g');
//= new RegExp('\\[\\[([\\w ]+)\\]\\]', 'g');
//= new RegExp('\\[\\[([\\w ]+)\\|([\\w ]+)\\]\\]', 'g');

