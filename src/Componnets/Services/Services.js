import React from 'react'
import { Col, Row ,Container} from 'react-bootstrap';
import service1 from '../../images/service1.png';
import service2 from '../../images/service2.png';
import service3 from '../../images/service3.png';
import service4 from '../../images/service4.png';


export const Services = () => {
    return (
        <section className="mb-5">
            <Container className="text-center" fluid="md">
                <h2>What we do</h2>
                <p>Our main focus is to make the User Experience very <br/>
                simple and easy. Simplicity is our Strength.</p>
                <p></p>
            <Row>
                <Col lg={3} md={6}>
                <div>
                <img src={service1} alt=""/>
                <h4>Experience Design</h4>
                <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                </div>

                </Col>
                <Col lg={3} md={6}>
                <div>
                <img src={service2} alt=""/>
                <h4>Experience Design</h4>
                <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                </div>
                </Col>
                <Col lg={3} md={6}>
                <div>
                <img src={service3} alt=""/>
                <h4>Experience Design</h4>
                <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                </div>
                </Col>
                <Col lg={3} md={6}>
                <div>
                <img src={service4} alt=""/>
                <h4>Experience Design</h4>
                <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                </div>
                </Col>
            </Row>
        </Container>
        </section>
    )
}
