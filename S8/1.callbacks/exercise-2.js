const userAnwsers = [];

function confirmExample(description){
    const title$$=document.querySelector('title');
    title$$.innerHTML = description;

    return confirm()
}

function promptExample(){
    changeTitle(description);
    return prompt(description);
}

function father(description, callback){
    userAnwsers.push(callback(description));
}
function changeTitle(title){
    const title$$ = document.querySelector('title');
    title$$.innerHTML = title;
}

father('confirma'confirmExample());

father('promptea'promptExample());

