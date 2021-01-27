import React from "react"
import FoodItem from "./FoodItem"
import {connect} from "react-redux"


import Table from "react-bootstrap/Table"
import { v4 as uuidv4 } from 'uuid';

import {getTotalCaloriesFromList} from "../model/classes/FoodListHandler"

function FoodTable(props) {

  const totalKcal = getTotalCaloriesFromList(props.foodList)

  return (
    <>
    <h2>Total Calories: {totalKcal}</h2>
    <br></br>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Food Item</th>
            <th>Proteins</th>
            <th>Carbs</th>
            <th>Fats</th>
            <th>Kcal</th>
          </tr>
        </thead>
        <tbody>
          {/* Render food item here */}
          {props.foodList && props.foodList.length != 0
            ? props.foodList.map(foodObj => <FoodItem key={uuidv4()} food={foodObj}  />)
            : []}
        </tbody>
      </Table>
    </>
  )
}
 const mapStateToProps = state=>({
  foodList:state.food.foodList
 })


export default connect(mapStateToProps)(FoodTable)