import React from "react"

import {connect} from 'react-redux'
import {deleteFoodItem} from '../redux/food/food-actions'

function FoodItem(props) {
  return (
    <>

      <tr>
        <td>
        <button onClick={() => props.deleteFoodItem(props.food)}>Delete</button>
          {"  " + props.food.name}
        </td>
        <td>{props.food.p}</td>
        <td>{props.food.c}</td>
        <td>{props.food.f}</td>
        <td>{props.food.kcal}</td>
      </tr>
    </>
  )
}

const mapDispatchToProps = dispatch=>({
  deleteFoodItem: foodItem => dispatch(deleteFoodItem(foodItem))
})

export default connect(null,mapDispatchToProps)(FoodItem);