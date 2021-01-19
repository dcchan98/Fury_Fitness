/** @format */

import React from "react";
import ShopCard from "../components/ShopCard";

export default function ShopPage() {
	return (
		<div className='container'>
			<div class='row form-group'>
				<div class='col-sm'>
					<ShopCard />
				</div>
				<div class='col-sm'>
					<ShopCard />
				</div>{" "}
				<div class='col-sm'>
					<ShopCard />
				</div>
			</div>

			<div class='row'>
				<div class='col-sm'>
					<ShopCard />
				</div>
				<div class='col-sm'>
					<ShopCard />
				</div>{" "}
				<div class='col-sm'>
					<ShopCard />
				</div>
			</div>
		</div>
	);
}
