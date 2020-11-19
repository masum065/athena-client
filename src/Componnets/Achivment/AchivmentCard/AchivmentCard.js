import React from 'react';
import { Col } from 'react-bootstrap';
import './AchivmentCard.scss';

const AchivmentCard = (props) => {
	const { count, icon, title } = props.achivment;

	return (
		<Col className='achivment-col' lg={6}>
			<div className='achivment-card'>
				<div className='achivment-icon'>{icon}</div>
				<h4>
					{count}+ <span>{title}</span>
				</h4>
			</div>
		</Col>
	);
};

export default AchivmentCard;
