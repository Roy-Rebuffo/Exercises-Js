// hacer una funcion async + wait o hacer un fetch
// luego añadir esta a un eventlistener

const baseUrl = 'https://api.nationalize.io?name=';

const btn$$ = document.querySelector('button');
btn$$.addEventListener('click',doRequest);

async function doRequest(){
    const input$$ = document.querySelector('input');
    const value = input$$.value;
    const response = await fetch(baseUrl + value);
    const json = await response.json();
    return json;
}
