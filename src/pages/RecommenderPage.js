import FoodTable from "../components/FoodTable";
import FoodInput from "../components/FoodInput";
import PercentageChart from "../components/PercentageChart";

import { connect } from "react-redux";

function RecommenderPage(props) {
	return (<h1>Recommender</h1>)
		
}

const mapStateToProps = (state) => {
	if (state.user.currentUser == null) {
		return { currentUser: null };
	}
	return { currentUser: state.user.currentUser.user };
};

export default connect(mapStateToProps)(RecommenderPage);
