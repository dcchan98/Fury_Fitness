import React from "react"

import {connect} from 'react-redux'
import {deleteFoodItem} from '../redux/food/food-actions'

function FoodItem(props) {
  return (
    <>
      <tr>
        <td>
        <input type='submit' onClick={() => props.deleteFoodItem(props.food)} value='Delete'></input>
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