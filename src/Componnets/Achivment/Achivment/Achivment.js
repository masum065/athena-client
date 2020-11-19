import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AchivmentCard from '../AchivmentCard/AchivmentCard';
import './Achivment.scss';

const Achivment = () => {
	return (
		<Container>
			<Row>
				<Col lg={4}>
					<div className='achivment-title'>
						<h2>Our Achievements</h2>
						<p>
							It is a long established fact that a reader will be
							distracted by the readable content of a page when
							looking at its layout. The point of using Lorem
							Ipsum is that it has a more-or-less normal
							distribution of letter.
						</p>
					</div>
				</Col>
				<Col lg={8}>
					<Row className='achivment-wraper'>
						<AchivmentCard />
						<AchivmentCard />
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default Achivment;
