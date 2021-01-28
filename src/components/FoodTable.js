/** @format */

import React from "react";
import FoodItem from "./FoodItem";
import { connect } from "react-redux";

import Jumbotron from "react-bootstrap/Jumbotron";
import Table from "react-bootstrap/Table";
import { v4 as uuidv4 } from "uuid";

import { getTotalCaloriesFromList } from "../model/classes/FoodListHandler";

function FoodTable(props) {
	const totalKcal = getTotalCaloriesFromList(props.foodList);

	const surplusOrShortage = props.caloricGoal - totalKcal> 0 ? "Shortage":"Surplus"
	const color = props.caloricGoal - totalKcal> 0 ? "text-primary":"text-danger"
	const result = props.caloricGoal - totalKcal> 0 ? "more":"less"

	return (
		<>
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
						? props.foodList.map((foodObj) => (
								<FoodItem key={uuidv4()} food={foodObj} />
						  ))
						: []}
				</tbody>
			</Table>
			<Jumbotron>
				<h2>Calories Consumed: {totalKcal}</h2>
				<br></br>

				{props.caloricGoal != -1 ? (
					<>
						<h4>Recommended: {props.caloricGoal}</h4>
						<h4 className={color}>{surplusOrShortage} of : {Math.abs(props.caloricGoal - totalKcal)}</h4>
						<h4>We recommend you eat {result}</h4>
					</>
				) : (
					<p>Update intake in recommender for suggestions</p>
				)}
				<></>
			</Jumbotron>
		</>
	);
}
const mapStateToProps = (state) => ({
	foodList: state.food.foodList,
	caloricGoal: state.food.caloricGoal,
});

export default connect(mapStateToProps)(FoodTable);
