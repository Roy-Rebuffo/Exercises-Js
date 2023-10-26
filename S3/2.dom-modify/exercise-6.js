//Basandote en el siguiente array crea una lista ul > li con los textos del array y metelo en el html.


const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];


const list$$ = document.createElement('ul')
document.body.appendChild(list$$);

for(let app of apps){
    const item$$ = document.createElement('li');
    item$$.textContent = app;
    list$$.appendChild(item$$);
}

