/** @format */

import React from "react";
import StripeCheckout from "react-stripe-checkout";

export default function StripeButton(props) {
	const stripePrice = props.price * 100;
	const pKey =
		"pk_test_51IEAurCFKjuqPFvXjb9y7W80c0VhVzmJTEctKaGIU9vczfBIlCgSnfspsOgybImZynA2bzqxaf4Fnkr3H4sAJFB600McgzhHSG";
	return (
		<StripeCheckout
			stripeKey={pKey}
			token={() => alert("Successfully paid!")}
			label='Buy'
			amount={stripePrice}
			description={`$ ${props.price}`}
		/>
	);
}
