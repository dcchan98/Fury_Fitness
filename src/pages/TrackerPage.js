/** @format */
import FoodTable from "../components/FoodTable";
import FoodInput from "../components/FoodInput";
import PercentageChart from "../components/PercentageChart";

import { connect } from "react-redux";

function TrackerPage(props) {
	if (props.currentUser != null) {
		return (
			<div className='container'>
				{`${props.currentUser.displayName}'s `}
				<br />
				<h1>Caloric Tracker</h1>
				<br />

				<PercentageChart/>

				<FoodInput />

				<br />
				<br />
				<FoodTable />
			</div>
		);
	} else {
		return (
			<div className='container'>
				<h1>Log In or Sign Up to use the tracker</h1>
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

export default connect(mapStateToProps)(TrackerPage);
