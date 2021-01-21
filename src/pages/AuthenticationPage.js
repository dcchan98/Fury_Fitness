/** @format */

import React,{useEffect} from "react";

import LogIn from "../components/LogIn";
import LogOut from "../components/LogOut";
import SignUp from "../components/SignUp";

import {logStatus} from "../firebase/firebase.auth"

export default function AuthenticationPage(props) {

	if(props.currentUser==null){
		return (
		<div>
			<LogIn />
			<br></br>
			<SignUp />
		</div>
	);
	}

	else{ // signed in
		return (
		<div>
			<LogOut />
		</div>
	);
	}

}
