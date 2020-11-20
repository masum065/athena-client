import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MainButton from '../Shared/MainButton/MainButton';
import './Price.scss';

export const Price = () => {
	return (
		<section className='pricing mt-lg-5'>
			<Container className='text-center'>
				<h2>Choose Your Dedicated Team</h2>
				<Row className='mt-5 justify-content-center'>
					<Col lg={4} md={6} sm={12}>
						<div className='price-level mb-2'>
							<h2>$199</h2>
							<p>
								<small>For Basic</small>
							</p>
							<p>Homepage</p>
							<p>No Inner Page</p>
							<p>Asset file</p>
							<p>Source file</p>
							<p>Free Stock Photos </p>
							<p>10 Days Free Support</p>
							<p>24/7 Support</p>

							<MainButton>Order Now</MainButton>
						</div>
					</Col>
					<Col lg={4} sm={12} md={6}>
						<div className='price-level active mb-2'>
							<h2>$399</h2>
							<p>
								<small>For Preferred</small>
							</p>
							<p>Homepage</p>
							<p>4 Inner Page</p>
							<p>Asset file</p>
							<p>Source file</p>
							<p>Free Stock Photos </p>
							<p>20 Days Free Support</p>
							<p>24/7 Support</p>
							<MainButton>Order Now</MainButton>
						</div>
					</Col>
					<Col lg={4} sm={12} md={8}>
						<div className='price-level mr-level mb-2'>
							<h2>$599</h2>
							<p>
								<small>For Elite</small>
							</p>
							<p>Homepage</p>
							<p>8 Inner Page</p>
							<p>Asset file</p>
							<p>Source file</p>
							<p>Free Stock Photos </p>
							<p>30 Days Free Support</p>
							<p>24/7 Support</p>
							<MainButton>Order Now</MainButton>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
