
function findArrayIndex(array, text) {
    return array.indexOf(text);
}

function removeItem(array, text){
    const index = findArrayIndex(array, text);
    if(index > -1){
        array.splice(index, 1);
        return array;
    }
}
let array =['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

array = removeItem(array,'Mosquito');
console.log(array);




