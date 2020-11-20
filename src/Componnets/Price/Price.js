import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Price.scss'

export const Price = () => {
    return (
    <section className="pricing">
         <Container className="text-center">
             <h2>CHOOSE YOUR DEDICATED TEAM</h2>
            <Row>
                <Col lg={4} md={12} sm={12}>
                <div className="price-level mb-2" >
                <h2>$199</h2>
                <p><small>For Basic</small></p> 
                 <p>Homepage</p>
                 <p>No Inner Page</p>
                 <p>Asset file</p>
                 <p>Source file</p>
                 <p>Free Stock Photos </p>
                 <p>10 Days Free Support</p>
                 <p>24/7 Support</p>
                </div>
                </Col>
                <Col lg={4} sm={12} md={12}>
                <div  className="price-level mb-2">
                <h2>$399</h2>
                <p><small>For Preferred</small></p>
                 <p>Homepage</p>
                 <p>4 Inner Page</p>
                 <p>Asset file</p>
                 <p>Source file</p>
                 <p>Free Stock Photos </p>
                 <p>20 Days Free Support</p>
                 <p>24/7 Support</p>
                </div>
                </Col>
                <Col lg={4} sm={12} md={12}>
                <div  className="price-level mr-level mb-2">
                <h2>$599</h2>
                 <p><small>For Elite</small></p>
                 <p>Homepage</p>
                 <p>8 Inner Page</p>
                 <p>Asset file</p>
                 <p>Source file</p>
                 <p>Free Stock Photos </p>
                 <p>30 Days Free Support</p>
                 <p>24/7 Support</p>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
    )
}
