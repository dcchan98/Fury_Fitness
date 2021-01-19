/** @format */

import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class ShopCard extends Component {
	render() {
		return (
			<div className="col-sm-12 col-md-6 col-lg-4 form-group">
				<Card style={{ width: "18rem" }}>
					<Card.Img variant='top' src='/images/heroes/Capt.png' />

					<Card.Body>
						<Card.Title>Calisthenics with Capt</Card.Title>
						<Card.Text>
							Gain relative strength while building a great physique under the
							supervision of our trainer Steve Rogers
						</Card.Text>
						<Button variant='primary'>Learn More</Button>
					</Card.Body>
				</Card>
			</div>
		);
	}
}
