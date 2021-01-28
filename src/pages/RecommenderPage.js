/** @format */

import FoodTable from "../components/FoodTable";
import FoodInput from "../components/FoodInput";
import PercentageChart from "../components/PercentageChart";
import Jumbotron from "react-bootstrap/Jumbotron";

import { connect } from "react-redux";

function RecommenderPage(props) {
	if (props.currentUser != null) {
		return (
			<div className='container'>
				<Jumbotron>
					<h1>Recommender</h1>
					<br></br>
					<p>Fill in the various input to calculate your caloric needs</p>
					<p></p>
				</Jumbotron>
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

export default connect(mapStateToProps)(RecommenderPage);
