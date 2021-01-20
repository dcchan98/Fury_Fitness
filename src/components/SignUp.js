import React from 'react'

export default function SignUp() {
  return (
    <div  className='container'>
    <h2>Sign Up</h2>
      <form>

      
				<div class='form-group'>
					<label for='exampleInputEmail1'>Sign up with email and password</label>
					<input
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
						type='password'
						class='form-control'
						id='exampleInputPassword1'
						placeholder='Password'
					/>
				</div>
        <div class='form-group'>
					<label for='exampleInputPassword1'>Confirm Password</label>
					<input
						type='password'
						class='form-control'
						id='exampleInputPassword1'
						placeholder='Re-enter your password'
					/>
				</div>
				<button type='submit' class='btn btn-dark btn-primary mr-2'>
					Sign Up
				</button>
			</form>
    </div>
  )
}
