import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MainButton from '../../Shared/MainButton/MainButton';
import './Banner.scss';
import bannerImage from '../../../images/banner.png';

const Banner = () => {
	return (
		<Container className='banner'>
			<Row className='banner-main'>
				<Col lg={5}>
					<div className='banner-content'>
						<h1>
							Florence <br /> agency
						</h1>
						<p>
							Lorem Ipsum has been the industry's standard dummy
							text ever since the 1500s, when an unknown printer
							took a galley of type and scrambled it to make a
							type specimen book.
						</p>

						<MainButton>See Pricing</MainButton>
					</div>
				</Col>
				<Col lg={7} >
					<img src={bannerImage} alt='' className='banner-image' />
				</Col>
			</Row>
		</Container>
	);
};

export default Banner;
