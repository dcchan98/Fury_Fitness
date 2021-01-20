import React from 'react'

export default function LogIn() {
  return (
    <div  className='container'>
    <h2>Log In</h2>
      <form>
				<div class='form-group'>
					<label for='exampleInputEmail1'>Sign in with email and password</label>
					<input
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
						type='password'
						class='form-control'
						id='exampleInputPassword1'
						placeholder='Password'
					/>
				</div>
				<button type='submit' class='btn btn-dark btn-primary mr-2'>
					Sign In
				</button>
        <button type='submit' class='btn btn-primary'>
					Google
				</button>
			</form>
    </div>
  )
}
