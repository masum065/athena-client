import React from 'react';
import './Footer.scss';
import logo from '../../images/logo.png';
import fb from '../../images/facebook-logo-in-circular-shape@2x.png';
import twitter from '../../images/twitter (4)@2x.png';
import linkedIn from '../../images/linkedin (2)@2x.png';
import dribble from '../../images/dribbble (1)@2x.png';

const Footer = () => {
    return (
        <div className="" style={{backgroundColor: "#FAFFFD"}}>
            <div className="col-md-10 mx-auto col-sm-12 py-5">
                <h1 className="text-center">Get your design right, right now</h1>
                <h5 className="text-center text-muted mt-3">Be the first know our latest offers and updates</h5>
                <div className="col-md-6 mx-auto py-5">
                <div className="row">
                    <div className="col-md-8">
                        <div class="input-group input-group-lg  footer-input text-center">
                        <input type="text" className="form-control py-4" placeholder="Enter your email address" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                        
                        </div>
                        
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class=" py-2 footer-btn-div">
                                <button className="btn btn-primary footer-btn">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="footer-part">
                    <div className="row">
                    <div className="col-md-4 col-12 col-sm-12">
                        <div className='my-4'>
                        <img style={{height: '98px', width: '150px'}} src={logo} alt=""/>
                        </div>
                        <img className='mr-3' src={fb} alt=""/>
                        <img className='mr-3' src={twitter} alt=""/>
                        <img className='mr-3' src={linkedIn} alt=""/>
                        <img src={dribble} alt=""/>
                    </div>
                    <div className="col-md-8 mt-5 col-12 col-sm-12">
                        <div className="row">
                        <div className="col-md-4">
                            <h6>Features</h6>
                            <h6>Enterprise</h6>
                            <h6>Pricing</h6>
                        </div>
                        <div className="col-md-4">
                            <h6>Blog</h6>
                            <h6>Help Center</h6>
                            <h6>Contact Us</h6>
                            <h6>Status</h6>
                        </div>
                        <div className="col-md-4">
                            <h6>About Us</h6>
                            <h6>Terms of Services</h6>
                            <h6>Security</h6>
                            <h6>Login</h6>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;