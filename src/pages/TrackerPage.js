import React,{useState,useEffect} from 'react'
import FoodTable from "../components/FoodTable"
import FoodInput from "../components/FoodInput"

import Food from "../model/classes/Food"



export default function TrackerPage(props) {

  const [foodList,setFoodList] = useState([]);

  

  const addFood = (name,p,c,f)=>{
    const toAdd = new Food(name,p,c,f);
    setFoodList([...foodList,toAdd]);
  }
  const deleteFood = (foodToRemove)=>{
    setFoodList(foodList.filter(food=> food !=foodToRemove));
  }

  if(props.currentUser){
    return (
    <div className ="container">

      {`${props.currentUser.displayName}'s `}
      <br />
        <h1>Caloric Calculator</h1>
        <br />

        <FoodInput currentUser = {props.currentUser} addFood={addFood} />

        <br />
        <br />
        <FoodTable deleteFood = {deleteFood} foodList = {foodList}/>
    </div>
  )
  }
  else{
    return (
    <div className = 'container'>
    <h1>Log In or Sign Up to use the tracker</h1>
    </div>
  )
  }

}
