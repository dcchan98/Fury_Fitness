/** @format */

import React, { useState } from "react";

import {logIn,signInWithGoogle} from "../firebase/firebase.auth.js"

export default function LogIn() {
	const [user, setUser] = useState("");
	const [pass, setPass] = useState("");

	const fieldClear = ()=>{
		setUser("");
		setPass("");
	}


	const handleSignIn = (e) => {
    e.preventDefault();
		// To handle sign in with firebase	
		logIn(user,pass);
		fieldClear();
	};

	const handleGoogle = (e) => {
    // To handle sign in with firebase
    e.preventDefault();
		signInWithGoogle();
	};

	return (
		<div className='container'>
			<h2>Log In</h2>
			<form>
				<div class='form-group'>
					<label for='exampleInputEmail1'>
						Sign in with email and password
					</label>
					<input
						onChange={(e) => setUser(e.target.value)}
						value={user}
						type='email'
						class='form-control'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
						placeholder='Enter email'
					/>
				</div>
				<div class='form-group'>
					<label for='exampleInputPassword1'>Password</label>
					<input
						onChange={(e) => setPass(e.target.value)}
						value={pass}
						type='password'
						class='form-control'
						id='exampleInputPassword1'
						placeholder='Password'
					/>
				</div>
				<button
					onClick={handleSignIn}
					type='submit'
					class='btn btn-dark btn-primary mr-2'>
					Sign In
				</button>
				<button onClick={handleGoogle} type='submit' class='btn btn-primary'>
					Google
				</button>
			</form>
		</div>
	);
}
