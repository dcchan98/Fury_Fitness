/** @format */

import React,{useEffect} from "react";

import LogIn from "../components/LogIn";
import LogOut from "../components/LogOut";
import SignUp from "../components/SignUp";

import {logStatus} from "../firebase/firebase.auth"

export default function AuthenticationPage() {


	return (
		<div>
			<LogOut />
			<LogIn />
			<br></br>
			<SignUp />
		</div>
	);
}
