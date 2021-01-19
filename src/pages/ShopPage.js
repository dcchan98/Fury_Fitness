/** @format */

import React from "react";
import ShopCard from "../components/ShopCard";

import heroCards from "../resources/objects/HeroMainObjects"

export default function ShopPage() {
	return (
		<div className='container'>
			<div class='row'>
        {heroCards.map(obj => <ShopCard hero={obj}/>)}
			</div>
		</div>
	);
}
