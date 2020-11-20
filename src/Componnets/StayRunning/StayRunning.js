import React from 'react';
import './StayRunning.scss';
import stayRunningImg from '../../images/stayrunning.png';
import MainButton from '../Shared/MainButton/MainButton';

const StayRunning = () => {
	return (
		<div>
			<div className='col-md-10 mx-auto'>
				<div className='row'>
					<div className='col-md-6 col-sm-12 col-12 order-1 order-lg-2'>
						<img
							className='say-runnig-img img-responsive img-fluid'
							src={stayRunningImg}
							alt=''
						/>
					</div>
					<div className='col-12 col-sm-12 col-md-6 order-first order-md-2'>
						<div className='col-md-11 mx-auto'>
							<div className='say-hello-content d-flex align-content-center flex-wrap mt-lg-5 pb-5'>
								<h2>Stay Running & Project</h2>
								<p>
									It is a long established fact a reader will
									be distracted by the readable content of a
									page when looking at it's layout. The point
									of using Lorem Ipsum is that it has a
									more-or-less normal distribution of letter.
								</p>
								<MainButton>Contact Us</MainButton>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StayRunning;
