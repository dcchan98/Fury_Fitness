/** @format */

import React from "react";
import ShopCard from "../components/ShopCard";
import StripeTesting from "../components/StripeTesting";

import heroCards from "../resources/objects/HeroMainObjects";

import Jumbotron from "react-bootstrap/Jumbotron";


export default function ShopPage() {
	return (
		<div className='container'>
			<Jumbotron>
				<h1>Train with the Avengers</h1>
				<br></br>
				<p>
					Signing up for any of the plans would include
				</p>
				<ul>
					<li>12 Personalised zoom coaching sessions</li>
					<li>3 Personal training sessions</li>
					<li>Customised workout plan</li>
					<li>Customised diet plan</li>
				</ul>
				<p>
					That is tailored to help you achieve your fitness goals
				</p>
			</Jumbotron>
			<div class='row'>
				{heroCards.map((obj) => (
					<ShopCard hero={obj} />
				))}
			</div>
			<StripeTesting/>
		</div>
	);
}
