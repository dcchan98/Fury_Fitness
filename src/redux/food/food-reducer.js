const INITIAL_STATE = {
  foodList:[],
  caloricGoals:{} // for goal setting in future iterations
}

const foodReducer = (state= INITIAL_STATE,action)=>{
  switch (action.type){
    case 'SET_FOOD_LIST': // use for fetching on first render
      return {...state,currentUser: action.payload}
    case 'ADD_FOOD_ITEM': // when food item is added
    return {...state,currentUser: [...state.foodList,action.payload]}
    case 'DELETE_FOOD_ITEM': // use for fetching on first render
      return {...state,currentUser: state.foodList.filter(x=>x!=action.payload)}
    default:
      return state;
  }
}

export default userReducer;