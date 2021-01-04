import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
const Footer = () => {
    return (
        <div className='footer-main'>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        <span>Copyright &copy; Scrumbug 2020</span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
