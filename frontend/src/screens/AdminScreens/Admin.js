import React, { useEffect } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listUsers } from '../../actions/userAction';
import { listMovies, getListOrders } from '../../actions/movieAction';
import Loader from '../../components/Loader';
const Admin = ({ history }) => {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const dispatch = useDispatch();

    const movieList = useSelector((state) => state.movieList);
    const { loading, error, moviesList } = movieList;

    const userList = useSelector((state) => state.userList);
    const { users } = userList;

    const listOrders = useSelector((state) => state.listOrders);
    const { orderList } = listOrders;

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listUsers());
            dispatch(listMovies());
            dispatch(getListOrders());
        } else {
            history.push('/login');
        }
    }, [dispatch, history, userInfo]);

    let users_count = 0;
    let movies_count = 0;
    let orders_count = 0;
    moviesList?.map(() => movies_count++);
    users?.map(() => users_count++);
    orderList?.map(() => orders_count++);

    return (
        <div>
            {loading && <Loader>Loading</Loader>}

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
                                </Link>{' '}
                                <Link to='/order-list'>
                                    <ListGroup.Item as='li'>
                                        <span>
                                            <i className='fas fa-shopping-cart' />{' '}
                                            Orders
                                        </span>
                                    </ListGroup.Item>
                                </Link>
                            </ListGroup>
                        </Col>
                        <Col sm={10} className='admin-main-col'>
                            <div>
                                <Row className='ml-3'>
                                    <Col className='col-1-dashboard'>
                                        <span className='d-flex flex-row dashboard-content'>
                                            <i className='fas fa-users' />
                                            <h5>
                                                {users_count} registered users
                                            </h5>
                                        </span>
                                    </Col>
                                    <Col className='col-1-dashboard'>
                                        <span className='d-flex flex-row dashboard-content'>
                                            <i className='fas fa-film' />
                                            <h5>
                                                {movies_count} movies showing
                                                today
                                            </h5>
                                        </span>
                                    </Col>
                                    <Col className='col-1-dashboard'>
                                        <span className='d-flex flex-row dashboard-content'>
                                            <i className='fas fa-shopping-cart' />
                                            <h5>
                                                {orders_count} tickets reserved
                                            </h5>
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
