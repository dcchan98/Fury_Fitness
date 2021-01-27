export function getTotalCaloriesFromList(foodList ){
  let sum = 0;
  for (let i = 0; i < foodList.length; i++) {
    sum+= foodList[i].kcal
  }
  return sum;
}
export function getTotalProteinFromList(foodList){
  let sum = 0;
  for (let i = 0; i < foodList.length; i++) {
    sum+= foodList[i].p*4
  }
  return sum;
}

export function getTotalCarbsFromList( foodList ){
  let sum = 0;
  for (let i = 0; i < foodList.length; i++) {
    sum+= foodList[i].c*4
  }
  return sum;
}

export function getTotalFatsFromList( foodList ){
  let sum = 0;
  for (let i = 0; i < foodList.length; i++) {
    sum+= foodList[i].f*9
  }
  return sum;
}
