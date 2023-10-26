//Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const div$$ = document.createElement('div');

document.body.appendChild(div$$);

for(let i=0;i<6;i++){
    const p$$ = document.createElement('p');
    p$$.innerHTML = 'texto' + i;
    div$$.appendChild(p$$);
}
