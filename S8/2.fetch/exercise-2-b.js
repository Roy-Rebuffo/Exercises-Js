const baseUrl = 'https://api.nationalize.io?name=';

const btn$$ = document.querySelector('button');
btn$$.addEventListener('click',doRequest);

async function doRequest(){
    const input$$ = document.querySelector('input');
    const value = input$$.value;
    const response = await fetch(baseUrl + value);
    const json = await response.json();
    console.log(json);
    createElements(json);
}

function createElements(data){
    const container$$ = document.querySelector('#container');
    container$$.innerHTML = '';
    for(const country of data.country){
        const p$$ = document.createElement('p');
        const percentage = country.probability * 100;
        p$$.textContent = "El nombre " + data.name + ' tiene un ' + percentage + ' por ciento de ser de ' + country.country_id;
        container$$.appendChild(p$$);
    }
}
