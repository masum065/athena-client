import React from 'react';
import Banner from '../Banner/Banner';
import Menu from '../Menu/Menu';
import './Header.scss';

const Header = () => {
	return (
		<header>
			<Menu />
			<Banner/>
		</header>
	);
};

export default Header;
