const div$$ = document.createElement('div');

for(let i=0; i<6;i++){
    const p$$ = document.createElement('p');
    p$$.innerHTML = 'texto' + i;
    div$$.appendChild(p$$);
}

document.body.appendChild(div$$);
