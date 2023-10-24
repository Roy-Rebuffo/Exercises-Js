const p$$ = document.createElement('p');

p$$.textContent = 'Voy en medio';

const secondDiv$$ = document.querySelector('div:nth-child(1)');
document.body.insertBefore(p$$,secondDiv$$);
