import React from 'react';
import './StayRunning.scss';
import stayRunningImg from '../../images/stayrunning.png';
import MainButton from '../Shared/MainButton/MainButton';

const StayRunning = () => {
    return (
        <div>
            <div className="col-md-10 mx-auto">
            <div className="row">
                <div className="col-md-6 col-sm-12 col-12">
                    <img className='img-responsive img-fluid'  style={{height:'570px', width:'670px'}} src={stayRunningImg} alt=""/>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                    <div className="col-md-11 mx-auto">
                    <div className="ml-4 d-flex align-content-center flex-wrap mt-5 py-5">
                        <h1>Stay Running & Project</h1>
                        <p className="text-muted sr-p mt-3 mb-4">It is a long established fact a reader will be distracted by the readable content of a page when looking at it's layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
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