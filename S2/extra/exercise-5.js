function rollDice(side){
    return Math.floor(Math.random() * side) +1;
}

for(let i=0; i<50; i++){
    console.log(rollDice(5));
}

