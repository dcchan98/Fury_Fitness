/** @format */

import Jumbotron from "react-bootstrap/Jumbotron";

import { useState } from "react";

import { connect } from "react-redux";

import {updateRecommendedIntake} from "../redux/food/food-actions"

function RecommenderPage(props) {
	const [intake, setIntake] = useState(null);

	const handleSubmit= e=>{
		e.preventDefault();
		props.updateRecommendedIntake(intake);
		setIntake(null)
		alert("Caloric intake updated")
	}


	if (props.currentUser != null) {
		return (
			<div className='container'>
				<Jumbotron>
					<h1>Recommender</h1>
					<br></br>
					<p>Fill in the various input to calculate your caloric needs</p>

					<p>
						You can use{" "}
						<a href='https://www.calculator.net/calorie-calculator.html'>
							this site{" "}
						</a>{" "}
						to get your caloric intake
					</p>
					<p>Do let us know your recommended intake below</p>
				</Jumbotron>

				<form>
					<label>
						Input your kcal : 
						<input value={intake} onChange={e=>setIntake(e.target.value)} type='text' name='name' />
					</label>
					<input onClick={handleSubmit}  type='submit' value='Update' />
				</form>
			</div>
		);
	} else {
		return (
			<div className='container'>
				<h1>Log In or Sign Up to use the Recommender</h1>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	if (state.user.currentUser == null) {
		return { currentUser: null };
	}
	return { currentUser: state.user.currentUser.user };
};

const mapDispatchToProps = dispatch=>({
	updateRecommendedIntake: intake => dispatch(updateRecommendedIntake(intake))
})

export default connect(mapStateToProps,mapDispatchToProps)(RecommenderPage);
