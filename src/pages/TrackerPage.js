import React,{useState,useEffect} from 'react'
import FoodTable from "../components/FoodTable"
import FoodInput from "../components/FoodInput"

export default function TrackerPage(props) {

  const [foodList,setFoodList] = useState([]);

  // to fetch data from firestore
  useEffect(()=>{},[])

  if(props.currentUser){
    return (
    <div>

      {`${props.currentUser.displayName}'s Tracker`}
      <br />
        <h1>Caloric Counter</h1>
        <br />

        <FoodInput />

        <br />
        <br />
        <FoodTable foodList = {foodList}/>
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
