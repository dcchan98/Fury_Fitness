import Food from "../../model/classes/Food"

export const setFoodList = foodList =>{
  return {
    type: 'SET_FOOD_LIST',
    payload: foodList  
  }
}


export const addFoodItem = (name,p,c,f)=>{
  return {
    type: 'ADD_FOOD_ITEM',
    payload: new Food(name,p,c,f)
  }
}

export const deleteFoodItem = food =>{
  return {
    type: 'DELETE_FOOD_ITEM',
    payload: food
  }
}