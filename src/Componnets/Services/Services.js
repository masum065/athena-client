import React from 'react'
import { Col, Row ,Container} from 'react-bootstrap';
import service1 from '../../images/service1.png';
import service2 from '../../images/service2.png';
import service3 from '../../images/service3.png';
import service4 from '../../images/service4.png';
import './Service.scss'


export const Services = () => {
    return (
        <section className="mb-5 service" >
            <Container className="text-center" fluid="md">
                <h2>What we do</h2>
                <p>Our main focus is to make the User Experience very <br/>
                simple and easy. Simplicity is our Strength.</p>
                <p></p>
            <Row>
                <Col lg={3} md={6}>
                <div className="scard">
                <img src={service1} alt=""/>
                <h5>Experience Design</h5>
                <p> The point of using Lorem<br/>Ipsum is that it has a more-or-<br/>less normal.</p>
                </div>

                </Col>
                <Col lg={3} md={6}>
                <div className="scard">
                <img src={service2} alt=""/>
                <h5>Interface Design</h5>
                <p>The point of using Lorem<br/>Ipsum is that it has a more-or-<br/>less normal.</p>
                </div>
                </Col>
                <Col lg={3} md={6}>
                <div className="scard">
                <img src={service3} alt=""/>
                <h5>Prototyping</h5>
                <p> The point of using Lorem<br/> Ipsum is that it has a more-or-<br/>less normal.</p>
                </div>
                </Col>
                <Col lg={3} md={6}>
                <div className="scard">
                <img src={service4} alt=""/>
                <h5>Illustration</h5>
                <p> The point of using Lorem<br/> Ipsum is that it has a more-or-<br/>less normal.</p>
                </div >
                </Col>
            </Row>
        </Container>
        </section>
    )
}
