import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const Admin = () => {
    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;
    return (
        <div>
            {userInfo ? (
                <Container fluid className='admin-main'>
                    <Row className='h-100'>
                        <Col sm={2} className='admin-sidebar'>
                            <ListGroup
                                as='ul'
                                className='pl-1 pt-5 sidebar-content'
                            >
                                <ListGroup.Item as='li' active>
                                    <span>
                                        <i className='fas fa-clipboard' />{' '}
                                        Dashboard
                                    </span>
                                </ListGroup.Item>
                                <Link to='/userlist'>
                                    <ListGroup.Item as='li'>
                                        <span>
                                            <i className='fas fa-users' />
                                            Users
                                        </span>
                                    </ListGroup.Item>
                                </Link>
                                <Link to='/movielist'>
                                    <ListGroup.Item as='li'>
                                        <span>
                                            <i className='fas fa-film' /> Movies
                                        </span>
                                    </ListGroup.Item>
                                </Link>
                                <ListGroup.Item as='li'>
                                    <span>
                                        <i className='fas fa-shopping-cart' />
                                        Bookings
                                    </span>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={10} className='admin-main-col'>
                            <div>
                                <Row className='ml-3'>
                                    <Col className='col-1-dashboard'>
                                        <span className='d-flex flex-row dashboard-content'>
                                            <i className='fas fa-users' />
                                            <h5> 10 registered users</h5>
                                        </span>
                                    </Col>
                                    <Col className='col-1-dashboard'>
                                        <span className='d-flex flex-row dashboard-content'>
                                            <i className='fas fa-film' />
                                            <h5> 5 movies showing today</h5>
                                        </span>
                                    </Col>
                                    <Col className='col-1-dashboard'>
                                        <span className='d-flex flex-row dashboard-content'>
                                            <i className='fas fa-shopping-cart' />
                                            <h5> 10 registered users</h5>
                                        </span>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            ) : (
                <Redirect to='/login'></Redirect>
            )}
        </div>
    );
};

export default Admin;
