const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const list$$ = document.createElement('ul')
document.body.appendChild(list$$);

for(let countrie of countries ){
    const item$$ = document.createElement('li');
    item$$.textContent = countrie;
    list$$.appendChild(item$$);
}
