import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MainButton from '../../Shared/MainButton/MainButton';
import SiteLogo from '../../Shared/SiteLogo/SiteLogo';
import './Menu.scss';
import { ReactComponent as MenuTriger } from '../../../images/menu-outline.svg';

const Menu = () => {
	const [close, setClose] = useState(false);

	return (
		<Container>
			<Row className='py-3'>
				<Col xs={3}>
					<SiteLogo />
				</Col>
				<Col xs={9} className='text-right py-4'>
					<div className='menu-wrapper'>
						<MainMenu />
					</div>
					<span
						onClick={() => setClose(!close)}
						className='menu-triger'
					>
						<MenuTriger />
					</span>
				</Col>
				<div
					className={
						close ? 'hamburger-menu menu-hide' : 'hamburger-menu'
					}
				>
					<span
						onClick={() => setClose(!close)}
						className='close-btn'
					></span>
					<MainMenu onClick={() => setClose(!close)} />
				</div>
			</Row>
		</Container>
	);
};

const MainMenu = (props) => {
	return (
		<>
			<div className='main-menu'>
				<a onClick={props.onClick} href='#home'>
					Home
				</a>
				<a onClick={props.onClick} href='#about'>
					about
				</a>
				<a onClick={props.onClick} href='#service'>
					Service
				</a>
				<a onClick={props.onClick} href='#pricing'>
					Pricing
				</a>
				<a onClick={props.onClick} href='#our-team'>
					Our Team
				</a>
			</div>
			<MainButton onClick={props.onClick}>Contact Us</MainButton>
		</>
	);
};

export default Menu;
