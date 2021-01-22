import React from "react"

function FoodItem(props) {
  return (
    <>
      <tr>
        <td>
          {"  " + props.food.getName()}
        </td>
        <td>{props.food.getP()}</td>
        <td>{props.food.getC()}</td>
        <td>{props.food.getF()}</td>
        <td>{props.food.getTotalCalories()}</td>
      </tr>
    </>
  )
}


export default (FoodItem)