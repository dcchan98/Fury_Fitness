/** @format */

import React, { useState } from "react";
import {connect} from 'react-redux';
import {setCurrentUser} from "../redux/user/user-actions"

import { logOut, getCurrentStatus } from "../firebase/firebase.auth.js";

function LogOut(props) {
	return (
			<button
				onClick={logOut}
				onClick={()=>props.setCurrentUser(null)}
				type='submit'
				class='btn btn-danger mr-2'>
				Sign Out
			</button>

	);
}

const mapDispatchToProps = dispatch=>({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(LogOut);