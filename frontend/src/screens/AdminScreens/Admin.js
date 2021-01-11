import React, { useEffect } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listUsers } from '../../actions/userAction';
import { listMovies } from '../../actions/movieAction';
import Loader from '../../components/Loader';
const Admin = ({ history }) => {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const dispatch = useDispatch();

    const movieList = useSelector((state) => state.movieList);
    const { moviesList } = movieList;

    const userList = useSelector((state) => state.userList);
    const { loading, error, users } = userList;

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listUsers());
            dispatch(listMovies());
        } else {
            history.push('/login');
        }
    }, [dispatch, history, userInfo]);

    return (
        <div>
            {loading && <Loader>Loading</Loader>}
            {userInfo ? (
                <div>
                    {moviesList?.map((movie) => (
                        <div key={movie._id}>
                            {users?.map((user) => (
                                <Container
                                    fluid
                                    className='admin-main'
                                    key={user._id}
                                >
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
                                                            <i className='fas fa-film' />{' '}
                                                            Movies
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
                                                            <h5>
                                                                {users.length}{' '}
                                                                registered users
                                                            </h5>
                                                        </span>
                                                    </Col>
                                                    <Col className='col-1-dashboard'>
                                                        <span className='d-flex flex-row dashboard-content'>
                                                            <i className='fas fa-film' />
                                                            <h5>
                                                                {
                                                                    moviesList.length
                                                                }{' '}
                                                                movies showing
                                                                today
                                                            </h5>
                                                        </span>
                                                    </Col>
                                                    <Col className='col-1-dashboard'>
                                                        <span className='d-flex flex-row dashboard-content'>
                                                            <i className='fas fa-shopping-cart' />
                                                            <h5>
                                                                {' '}
                                                                10 registered
                                                                users
                                                            </h5>
                                                        </span>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            ))}
                        </div>
                    ))}
                </div>
            ) : (
                <Redirect to='/login'></Redirect>
            )}
        </div>
    );
};

export default Admin;
