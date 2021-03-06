/** @format */
import React, { useState, useEffect } from "react";
import {connect} from "react-redux";

import HomePage from "./pages/HomePage";
import AuthenticationPage from "./pages/AuthenticationPage";
import ShopPage from "./pages/ShopPage";
import TrackerPage from "./pages/TrackerPage";
import RecommenderPage from "./pages/RecommenderPage";

import { auth } from "./firebase/firebase";
// import { addNewUser } from "./firebase/firebase.storage";

import { Navbar, Nav, NavItem } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
	constructor(props) {
		super(props);
		
	}

	// unsubscribeFromAuth = null;

	// async componentDidMount() {
	
	// 		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
	// 			this.setState({ currentUser: user });
	// 		});
			
	// 	};

		// add user if he/ she does not exist

	// componentDidUpdate() {
	// 	if (this.state.currentUser) {
	// 		addNewUser(
	// 			this.state.currentUser.displayName,
	// 			this.state.currentUser.uid
	// 		);
	// 	}
	// }

	// componentWillUnmount() {
	// 	this.unsubscribeFromAuth();
	// }

	render() {
		return (
			<Router>
				<div>
					<div className='container'>
						<Navbar className="mb-3 " bg='light' expand='lg'>
							<Navbar.Toggle aria-controls='basic-navbar-nav' />
							<Navbar.Collapse id='basic-navbar-nav'>
								<Nav className='mr-auto'>
									<Nav.Link>
										<Link to='/'>Fury Fitness</Link>
									</Nav.Link>
								</Nav>
								<Nav className='mr-auto'>
									<Nav.Link>
										<Link to='/profile'>
											{this.props.displayName
												? this.props.displayName
												: "Profile"}
										</Link>
									</Nav.Link>
								</Nav>
								<Nav className='mr-auto'>
									<Nav.Link>
										<Link to='/shop'>Shop</Link>
									</Nav.Link>
								</Nav>
								<Nav className='mr-auto'>
									<Nav.Link>
										<Link to='/tracker'>Tracker</Link>
									</Nav.Link>
								</Nav>
								<Nav className='mr-auto'>
									<Nav.Link>
										<Link to='/Recommender'>Recommender</Link>
									</Nav.Link>
								</Nav>
							</Navbar.Collapse>
						</Navbar>
					</div>

					<Switch>
						<Route exact path='/'>
							<HomePage />
						</Route>
						<Route path='/profile'>
							<AuthenticationPage  />
						</Route>
						<Route path='/shop'>
							<ShopPage />
						</Route>
						<Route path='/Tracker'>
							<TrackerPage  />
						</Route>
						<Route path='/Recommender'>
							<RecommenderPage  />
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

const mapStateToProps = state =>{
	if(state.user.currentUser==null){
		return 
	}
	return {displayName: state.user.currentUser.user.displayName}
}

export default connect(mapStateToProps)(App);
