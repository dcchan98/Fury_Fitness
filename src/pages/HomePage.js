/** @format */

import React from "react";



import HomeCarousell from "../components/HomeCarousell"

import Steps from "../components/Steps"

export default function HomePage() {
	const source = './images/heroes/Nick-Fury.jpg'
	return (
		<>
			<HomeCarousell/>
			<br/>
			<Steps/>

		</>
	);
}
