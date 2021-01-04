import React from 'react';
import { Navbar, Container, Image, Row, Col, Dropdown } from 'react-bootstrap';
const Header = () => {
    return (
        <div className='header-main'>
            <Container fluid>
                <Row>
                    <Col sm={9}>
                        <Navbar.Brand>
                            <Image
                                src='/images/logo.png'
                                className='header-logo'
                            />
                        </Navbar.Brand>
                    </Col>
                    <Col sm={3}>
                        <span className='d-flex pl-5 pt-3 name-space'>
                            <i class='fas fa-user' />
                            <h5>Jheremiah Figueroa</h5>
                        </span>
                    </Col>
                </Row>
                <Row className='secondary-header py-3'>
                    <Col sm={6}>
                        <Dropdown className='dropdown'>
                            <Dropdown.Toggle className='dropdown-genres'>
                                All Genres
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href='#/action-1'>
                                    Action
                                </Dropdown.Item>
                                <Dropdown.Item href='#/action-2'>
                                    Animation
                                </Dropdown.Item>
                                <Dropdown.Item href='#/action-3'>
                                    Comedy
                                </Dropdown.Item>
                                <Dropdown.Item href='#/action-1'>
                                    Crime
                                </Dropdown.Item>
                                <Dropdown.Item href='#/action-2'>
                                    Animation
                                </Dropdown.Item>
                                <Dropdown.Item href='#/action-3'>
                                    Comedy
                                </Dropdown.Item>
                                <Dropdown.Item href='#/action-1'>
                                    Drama
                                </Dropdown.Item>
                                <Dropdown.Item href='#/action-2'>
                                    Animation
                                </Dropdown.Item>
                                <Dropdown.Item href='#/action-3'>
                                    Comedy
                                </Dropdown.Item>
                                <Dropdown.Item href='#/action-1'>
                                    Experimental
                                </Dropdown.Item>
                                <Dropdown.Item href='#/action-2'>
                                    Fantasy
                                </Dropdown.Item>
                                <Dropdown.Item href='#/action-3'>
                                    Historical
                                </Dropdown.Item>
                                <Dropdown.Item href='#/action-1'>
                                    Horror
                                </Dropdown.Item>
                                <Dropdown.Item href='#/action-2'>
                                    Romance
                                </Dropdown.Item>
                                <Dropdown.Item href='#/action-3'>
                                    Science Fiction
                                </Dropdown.Item>
                                <Dropdown.Item href='#/action-1'>
                                    Experimental
                                </Dropdown.Item>
                                <Dropdown.Item href='#/action-2'>
                                    Thriller
                                </Dropdown.Item>
                                <Dropdown.Item href='#/action-3'>
                                    Western
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col sm={3}>
                        <div className='d-flex column-order'>
                            <h5>Wishlist</h5>
                            <i class='fas fa-shopping-cart'></i>
                        </div>
                    </Col>
                    <Col sm={3}>
                        <div class='nav-search mx-3'>
                            <form>
                                <input type='text' placeholder='Search' />
                                <button type='submit'>
                                    <i class='fa fa-search'></i>
                                </button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;

{
    /* <div className='header-main'>
    <Container fluid>
        <Row className='w-100'>
            <Col sm={10}>
                <Navbar.Brand>
                    <Image src='/images/logo.png' className='header-logo' />
                </Navbar.Brand>
            </Col>
            <Col sm={2}>
                <Nav.Link className='header-link'>
                    <h5>
                        <i className='fas fa-user' />
                        Sign In
                    </h5>
                </Nav.Link>
            </Col>
        </Row>
    </Container>
</div>; */
}
