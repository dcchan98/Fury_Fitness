/** @format */

import React, { useState } from "react";
import {logOut} from "../firebase/firebase.auth.js"

export default function LogOut() {

	return (
		<div className='container'>
				<button
					onClick={logOut}
					type='submit'
					class='btn btn-danger mr-2'>
					Status
				</button>
				<button
					onClick={logOut}
					type='submit'
					class='btn btn-dark btn-primary mr-2'>
					Sign Out
				</button>

		</div>
	);
}
