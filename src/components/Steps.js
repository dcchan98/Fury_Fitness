/** @format */

import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";


import { Link } from "react-router-dom";

export default function Steps() {
	return (
		<div className ="container">
			<Jumbotron>
				<h1>Step 1</h1>
				<p>
					Create an account if you have not. You would only be able to access our services with an account. (You can use google mail for convenience)
				</p>
				<p>
				<Link className ="btn btn-primary"to='/profile'>Go</Link>
				</p>
			</Jumbotron>

			<Jumbotron>
				<h1>Step 2</h1>
				<p>
					Use our recommender page to get your caloric intake based on your goals.
				</p>
				<p>
				<Link className ="btn btn-primary"to='/Recommender'>Go</Link>
				</p>
			</Jumbotron>

			<Jumbotron>
				<h1>Step 3</h1>
				<p>
					Start logging your food intake based on the recommended intake. Do remember to update your profile from time to time so that we can recalibrate your caloric needs.
				</p>
				<p>
				<Link className ="btn btn-primary"to='/Tracker'>Go</Link>
				</p>
			</Jumbotron>

      <Jumbotron>
				<h1>Step 4 (Optional)</h1>
				<p>
					Sign up for personal training with The Avengers.
				</p>
				<p>
				<Link className ="btn btn-primary"to='/shop'>Go</Link>
				</p>
			</Jumbotron>
		</div>
	);
}
