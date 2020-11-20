import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AchivmentCard from '../AchivmentCard/AchivmentCard';
import './Achivment.scss';
import { ReactComponent as Happy } from '../../../images/happy.svg';
import { ReactComponent as Marketing } from '../../../images/marketing.svg';
import { ReactComponent as Surface } from '../../../images/surface.svg';
import { ReactComponent as Transportation } from '../../../images/transportation.svg';

const Achivment = () => {
	const achivments = [
		{
			title: 'Happy Clients',
			count: 700,
			icon: <Happy />,
		},
		{
			title: 'Projects Completed',
			count: 140,
			icon: <Marketing />,
		},
		{
			title: 'Crazy Minds',
			count: 25,
			icon: <Surface />,
		},
		{
			title: 'Running Projects',
			count: 75,
			icon: <Transportation />,
		},
	];
	return (
		<Container className='py-5'>
			<Row>
				<Col lg={5}>
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
				<Col lg={7}>
					<Row className='achivment-wraper'>
						{achivments.map((achivment, index) => (
							<AchivmentCard key={index} achivment={achivment} />
						))}
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default Achivment;
