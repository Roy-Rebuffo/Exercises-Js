const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const ul$$ = document.createElement('ul');
const div$$ = document.querySelector('div[data-funtion].printHere');

document.body.appendChild(ul$$);

const att$$ = document.createAttribute('data-funtion');
att$$.value = "printHere";

for(let car of cars){
    const li$$ = document.createElement('li');
    li$$.textContent = car;
    ul$$.setAttributeNode(att$$)
    ul$$.appendChild(li$$);
}









