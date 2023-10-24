const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];

let fruitIndex = 0;

for(let i=0;i<foodSchedule.length;i++){
    let food = foodSchedule[i];
    if(!food.isVegan){
        if(fruitIndex === fruits.length){
            console.log('There are no more fruits')
        } else{
            food.name = fruits[fruitIndex];
            food.isVegan = true;
            fruitIndex++
        }
    }
}
console.log(foodSchedule);