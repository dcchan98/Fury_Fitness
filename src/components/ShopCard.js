/** @format */

import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class ShopCard extends Component {
	render() {
		return (
			<div className="col-sm-12 col-md-6 col-lg-4 form-group">
				<Card style={{ width: "18rem" }}>
					<Card.Img variant='top' src={this.props.hero.imgPath} />

					<Card.Body>
						<Card.Title>{this.props.hero.title}</Card.Title>
						<Card.Text>
            {this.props.hero.description}
						</Card.Text>
						<Button variant='primary'>Add to Basket</Button>
					</Card.Body>
				</Card>
			</div>
		);
	}
}
