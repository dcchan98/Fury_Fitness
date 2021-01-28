/** @format */

import FoodTable from "../components/FoodTable";
import FoodInput from "../components/FoodInput";
import PercentageChart from "../components/PercentageChart";
import Jumbotron from "react-bootstrap/Jumbotron";

// test out
import calculate from "fitness-health-calculations"

import { connect } from "react-redux";

const myCaloricNeeds = calculate.caloricNeeds('male', 23, 175, 80, 'moderate', 'reduction', 'agressive');

const tdee = calculate.tdee('male', 23, 175, 80, 'moderate');
const bmr = calculate.bmr('male', 23, 175, 80);

function RecommenderPage(props) {
	if (props.currentUser != null) {
		return (
			<div className='container'>
				<Jumbotron>
					<h1>Recommender</h1>
					<br></br>
					<p>Fill in the various input to calculate your caloric needs</p>
					{/* Fill in code here */}
					<p>	BMR		{		bmr	}	</p>
					<p>	TDEE		{		tdee	}	</p>
					<p>	Caloric		{		myCaloricNeeds	}	</p>

			
					{/* Fill in code here */}
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
