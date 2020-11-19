import React from 'react';
import { Col } from 'react-bootstrap';
import { ReactComponent as Happy } from '../../../images/happy.svg';
import './AchivmentCard.scss';

const AchivmentCard = () => {
	return (
		<Col className='achivment-col' lg={6}>
			<div className='achivment-card'>
				<div className='achivment-icon'>
					<Happy />
				</div>
				<h4>
					700+ <span>Happy Clients</span>
				</h4>
			</div>
		</Col>
	);
};

export default AchivmentCard;
