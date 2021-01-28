/** @format */

import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function HomeCarousell() {
	return (
		<>
			<Carousel>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src='./images/heroes/Nick-Fury.jpg'
						alt='First slide'
					/>
					<Carousel.Caption>
						<h3>Hello There</h3>
						<p>Welcome to Fury-Fitness.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src='./images/heroes/Training.png'
						alt='Third slide'
					/>

					<Carousel.Caption>
						<h3>Training</h3>
						<p>Personal training with your favourite heroes.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src='./images/heroes/Healthy-Food.jpg'
						alt='Third slide'
					/>
					<Carousel.Caption>
						<h3>Diet</h3>
						<p>Log of your diet with our calorie counter.</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img
						className='d-block w-100'
						src='./images/heroes/Planning.jpg'
						alt='Third slide'
					/>
					<Carousel.Caption>
						<h3>Log and Track</h3>
						<p>Make use of our caloric recommender to get you started.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</>
	);
}
