export const setFoodList = foodList =>{
  return {
    type: 'SET_FOOD_LIST',
    payload: foodList  
  }
}

export const addFoodItem = food =>{
  return {
    type: 'ADD_FOOD_ITEM',
    payload: food
  }
}

export const deleteFoodItem = food =>{
  return {
    type: 'DELETE_FOOD_ITEM',
    payload: food
  }
}