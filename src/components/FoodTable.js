import React from "react"
import FoodItem from "./FoodItem"

import Table from "react-bootstrap/Table"


function FoodTable(props) {
  return (
    <>
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
          {props.foodList.length != 0
            ? props.foodList.map(foodObj => <FoodItem food={foodObj} deleteFood = {props.deleteFood} />)
            : []}
        </tbody>
      </Table>
    </>
  )
}


export default (FoodTable)