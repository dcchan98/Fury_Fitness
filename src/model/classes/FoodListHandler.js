export function getTotalCaloriesFromList(foodList ){
  return foodList.reduce((a, b) => a.kcal + b.kcal, 0)
}
export function getTotalProteinFromList(foodList){
  return foodList.reduce((a, b) => a.p + b.p, 0)
}

export function getTotalCarbsFromList( foodList ){
  return foodList.reduce((a, b) => a.c + b.c, 0)
}

export function getTotalFatsFromList( foodList ){
  return foodList.reduce((a, b) => a.f + b.f, 0)
}
