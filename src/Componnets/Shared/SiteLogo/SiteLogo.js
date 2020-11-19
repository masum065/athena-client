import React from 'react';
import logo from '../../../images/logo.png';
import './SiteLogo.scss';

const SiteLogo = () => {
	return (
		<a className='logo' href='#home'>
			<img src={logo} alt='' />
		</a>
	);
};

export default SiteLogo;
