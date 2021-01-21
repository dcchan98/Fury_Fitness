/** @format */

import React, { useState } from "react";
import { logOut, getCurrentStatus } from "../firebase/firebase.auth.js";

export default function LogOut() {
	return (
		<div className='container'>
			<h1>Welcome</h1>
			<button
				onClick={logOut}
				type='submit'
				class='btn btn-dark btn-primary mr-2'>
				Sign Out
			</button>
		</div>
	);
}
