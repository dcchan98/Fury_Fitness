/** @format */

import React,{useEffect} from "react";

import LogIn from "../components/LogIn";
import LogOut from "../components/LogOut";
import SignUp from "../components/SignUp";

import {logStatus} from "../firebase/firebase.auth"
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

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
		<div className='container'>

<Jumbotron>
<h1>{`Welcome ${props.currentUser.displayName}`}</h1>
<br></br>
  <p>
	You can now access our shop and tracker. Click the links above to explore.
  </p>

	<br></br>
	<LogOut />
</Jumbotron>

		</div>
	);
	}

}
