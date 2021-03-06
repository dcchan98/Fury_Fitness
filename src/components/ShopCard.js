/** @format */

import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";

import StripeButton from "./StripeButton";


const PRICE = 49.99 // cost of hiring training is  sgd 49.99

class ShopCard extends Component {
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
						{this.props.currentUser.displayName == null?<Button  variant="secondary" disabled>Log In To Buy</Button>:<StripeButton hero={this.props.hero} price ={PRICE}/>}
						
					</Card.Body>
				</Card>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	if (state.user.currentUser==null){
		return {currentUser: {displayName:null}}
	}
	return {currentUser: state.user.currentUser.user}
};

export default connect(mapStateToProps)(ShopCard);
