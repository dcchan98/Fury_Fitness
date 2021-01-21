/** @format */

import React, { useState } from "react";

import { signUp } from "../firebase/firebase.auth.js";

export default function SignUp() {
	const [user, setUser] = useState("");
	const [name, setName] = useState("");
	const [pass, setPass] = useState("");
	const [rePass, setRePass] = useState("");

	const fieldClear = ()=>{
		setUser("");
		setName("");
		setPass("");
		setRePass("");
	}

	const handleSignUp = (e) => {
		e.preventDefault();
		// To handle sign up with firebase
		signUp(user,name,pass,rePass)
		fieldClear()
	};

	return (
		<div className='container'>
			<h2>Sign Up</h2>
			<form>
				<div class='form-group'>
					<label for='exampleInputEmail1'>
						Sign up with email and password
					</label>
					<input
						value={user}
						onChange={(e) => setUser(e.target.value)}
						type='email'
						class='form-control'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
						placeholder='Enter email'
					/>
				</div>

				<div class='form-group'>
					<label for='exampleInputEmail1'>Display Name</label>
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						type='email'
						class='form-control'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
						placeholder='Enter your display name'
					/>
				</div>
				<div class='form-group'>
					<label for='exampleInputPassword1'>Password</label>
					<input
						value={pass}
						onChange={(e) => setPass(e.target.value)}
						type='password'
						class='form-control'
						id='exampleInputPassword1'
						placeholder='Password'
					/>
				</div>
				<div class='form-group'>
					<label for='exampleInputPassword1'>Confirm Password</label>
					<input
						value={rePass}
						onChange={(e) => setRePass(e.target.value)}
						type='password'
						class='form-control'
						id='exampleInputPassword1'
						placeholder='Re-enter your password'
					/>
				</div>
				<button
					onClick={handleSignUp}
					type='submit'
					class='btn btn-dark btn-primary mr-2'>
					Sign Up
				</button>
			</form>
		</div>
	);
}
