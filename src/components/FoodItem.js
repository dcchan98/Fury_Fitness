import React from "react"

import {connect} from 'react-redux'
import {deleteFoodItem} from '../redux/food/food-actions'

function FoodItem(props) {
  return (
    <>

      <tr>
        <td>
        <button onClick={() => props.deleteFoodItem(props.food)}>Delete</button>
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

const mapDispatchToProps = dispatch=>({
  deleteFoodItem: foodItem => dispatch(deleteFoodItem(foodItem))
})

export default connect(null,mapDispatchToProps)(FoodItem);