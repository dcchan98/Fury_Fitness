/** @format */

import React, { useState } from "react";
import { logOut, getCurrentStatus } from "../firebase/firebase.auth.js";

export default function LogOut() {
	return (
			<button
				onClick={logOut}
				type='submit'
				class='btn btn-danger mr-2'>
				Sign Out
			</button>

	);
}