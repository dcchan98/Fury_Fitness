/** @format */

import React from "react";

import LogIn from "../components/LogIn"
import SignUp from "../components/SignUp";

export default function AuthenticationPage() {
	return (
		<div>
			<LogIn/>
      <br></br>
      <SignUp />
		</div>
	);
}
