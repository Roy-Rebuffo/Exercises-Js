const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];

let fruitIndex = 0;

for(let i=0;i<foodSchedule.length;i++){
    let food = foodSchedule[i];
    if(!food.isVegan){
        if(fruitIndex===fruits.length){
            console.log('there are no more fruits')
        }
    } else{
        foodSchedule[i].name = fruits [fruitIndex];
        foodSchedule[i].isVegan = true;
        fruitIndex++;
    }
}

console.log(foodSchedule);



for(let i=0; i<foodSchedule.length; i++){
    let food = foodSchedule[i];
    if(foodSchedule.isVegan===false){
        food.splice(i,1)
    }
}
console.log(foodSchedule)