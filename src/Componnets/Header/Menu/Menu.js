import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MainButton from '../../Shared/MainButton/MainButton';
import SiteLogo from '../../Shared/SiteLogo/SiteLogo';
import './Menu.scss';

const Menu = () => {
	return (
		<Container>
			<Row className='py-3'>
				<Col lg={3}>
					<SiteLogo />
				</Col>
				<Col lg={9} className='text-right py-4'>
					<div className='main-menu'>
						<a href='#home'>Home</a>
						<a href='#about'>about</a>
						<a href='#service'>Service</a>
						<a href='#pricing'>Pricing</a>
						<a href='#our-team'>Our Team</a>
					</div>
					<MainButton>Contact Us</MainButton>
				</Col>
			</Row>
		</Container>
	);
};

export default Menu;
