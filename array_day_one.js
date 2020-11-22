//print the type of sandwich each of these make
console.log("my favorite sandwiches")
const unfinishedSandwhiches = [
  {
    ingredients: ["peanut butter", "jelly"]
  },
  {
    ingredients: ["chicken cutlet", "ketchup", "mayo", "lettuce"]
  },
  {
    ingredients: ["grilled cheese", "caramelized onions", "turkey bacon"]
  }
  //sorry gotta keep it halal - hence the turkey bacon
]


const finishedSandwiches = unfinishedSandwhiches.map(sandwich => sandwich = sandwich.ingredients[0])
finishedSandwiches.forEach(sandwich => console.log(sandwich))


//remove all healthy food and print the good food
console.log('the breakfast of champions')
const foods = [
  {
    name: "carrots",
    isHealthy: true,
  },
  {
    name: "triple chocalate mousse cake",
    isHealthy: false,
  },
  {
    name: "brussel sprouts",
    isHealthy: true,
  },
  {
    name: "deep fried oreo",
    isHealthy: false,
  }
]

const goodFood = foods.filter(food => food.isHealthy === false);
goodFood.forEach(food => console.log(food.name))



