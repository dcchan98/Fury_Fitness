/** @format */

import React, { useState } from "react";
import {addFoodItem} from "../redux/food/food-actions"
import {connect} from "react-redux"

function FoodInput(props) {
	const [name, setName] = useState("");
	const [proteins, setProteins] = useState("");
	const [carbs, setCarbs] = useState("");
	const [fats, setFats] = useState("");


	const handleInputChange = (event) => {
		if (event.target.id == "name") {
			setName(event.target.value);
		} else if (event.target.id == "proteins") {
			setProteins(event.target.value);
		} else if (event.target.id == "carbs") {
			setCarbs(event.target.value);
		} else if (event.target.id == "fats") {
			setFats(event.target.value);
		}
	};

	const handleSubmit = (event) => {
		// ToDo: Pick a better ID option
		event.preventDefault();
		if(isNaN(Number(proteins)||isNaN(Number(carbs)))||isNaN(Number(fats))){
			alert("Proteins, Carbs and Fats have to be a number")
		}
		else{
			props.addFoodItem(name, proteins, carbs, fats);
			// reset
			setName("");
			setProteins("");
			setCarbs("");
			setFats("");
		}

	};

	return (
		<div>
			<div class='row'>
				<label className='col-sm' for='name'>
					Food Name
				</label>
				<label className='col-sm' for='proteins'>
					Proteins
				</label>
				<label className='col-sm' for='carbs'>
					Carbs
				</label>
				<label className='col-sm' for='fats'>
					Fats
				</label>
			</div>

			<div class='row'>
				<input
					className='col-sm input-group-text'
					id='name'
					value={name}
					onChange={handleInputChange}></input>
				<input
					className='col-sm input-group-text'
					id='proteins'
					value={proteins}
					onChange={handleInputChange}></input>
				<input
					className='col-sm input-group-text'
					id='carbs'
					value={carbs}
					onChange={handleInputChange}></input>
				<input
					className='col-sm input-group-text'
					id='fats'
					value={fats}
					onChange={handleInputChange}></input>
			</div>

			<input type='submit' onClick={handleSubmit} value='Add Food'></input>
		</div>
	);
}

const mapDispatchToProps = dispatch=>({
	addFoodItem: (name,p,c,f) => dispatch(addFoodItem(name,p,c,f))
})


export default connect(null,mapDispatchToProps)(FoodInput);
