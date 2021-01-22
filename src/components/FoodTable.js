import React from "react"
import FoodItem from "./FoodItem"

import Table from "react-bootstrap/Table"
import { v4 as uuidv4 } from 'uuid';


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
            ? props.foodList.map(foodObj => <FoodItem key={uuidv4()}  food={foodObj} deleteFood = {props.deleteFood} />)
            : []}
        </tbody>
      </Table>
    </>
  )
}


export default (FoodTable)