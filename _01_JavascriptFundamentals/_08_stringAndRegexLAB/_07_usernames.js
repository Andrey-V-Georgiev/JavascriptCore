function extractUserNames(arr) {
    let result = arr.map(s => s.split('@')).map(e => e[0] + '.'+ e[1].split('.').map(e=>e=e[0]).join('')).join(', ');
    console.log(result);
}

extractUserNames(['peshoo@gmail.com',
    'todor_43@mail.dir.bg',
    'foo@bar.com']
);