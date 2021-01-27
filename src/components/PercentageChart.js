import React from "react";

import {  Doughnut } from "react-chartjs-2";
import {connect} from "react-redux"
import {getTotalProteinFromList,getTotalCarbsFromList,getTotalFatsFromList} from "../model/classes/FoodListHandler"

function PercentageChart(props) {

	const totalP = getTotalProteinFromList(props.foodList)
	const totalC = getTotalCarbsFromList(props.foodList)
	const totalF = getTotalFatsFromList(props.foodList)


	const data = {
		labels: ["Proteins", "Carbs", "Fats"],
		datasets: [
			{
				label: "Macro Intake",
				data: [totalP, totalC, totalF],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
				],
				borderWidth: 3,
			},
		],
	};

	const options = {
    title: {
      display: true,
      text: 'Macronutrient Calories / Kcal'
  },
		maintainAspectRatio: true,

	};
	return (
		<div classname='container'>

			<div classname='row'>
				<div align='center' className='col-sm-12 col-md-10 col-lg-10'>
					<Doughnut data={data} width={100} height={50} options={options} />
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = state=>({
  foodList:state.food.foodList
 })

export default connect(mapStateToProps)(PercentageChart)