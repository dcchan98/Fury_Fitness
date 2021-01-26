const INITIAL_STATE = {
  foodList:[],
  caloricGoals:{} // for goal setting in future iterations
}

const foodReducer = (state= INITIAL_STATE,action)=>{
  switch (action.type){
    case 'SET_FOOD_LIST': // use for fetching on first render
      return {...state,foodList: action.payload}
    case 'ADD_FOOD_ITEM': // when food item is added
    return {...state,foodList: [...state.foodList,action.payload]}
    case 'DELETE_FOOD_ITEM': // use for fetching on first render
      return {...state,foodList: state.foodList.filter(x=>x!=action.payload)}
    default:
      return state;
  }
}

export default foodReducer;