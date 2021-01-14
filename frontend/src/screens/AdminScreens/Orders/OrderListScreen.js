import React, { useEffect } from 'react';
import { Button, Col, Container, ListGroup, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import {
    getListOrders,
    deleteOrder,
    listMovies,
} from '../../../actions/movieAction';
import { listUsers } from '../../../actions/userAction';
import Loader from '../../../components/Loader';
const OrderListScreen = ({ history }) => {
    const dispatch = useDispatch();

    const userList = useSelector((state) => state.userList);
    const { users } = userList;

    const movieList = useSelector((state) => state.movieList);
    const { loading, error, moviesList } = movieList;

    const listOrders = useSelector((state) => state.listOrders);
    const { orderList } = listOrders;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(getListOrders());
            dispatch(listUsers());
            dispatch(listMovies());
        } else {
            history.push('/login');
        }
    }, [dispatch, history, userInfo]);

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure you want delete this order?')) {
            dispatch(deleteOrder(id));
        }
    };

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
                                <Link to='/admin'>
                                    <ListGroup.Item as='li'>
                                        <span>
                                            <i className='fas fa-clipboard' />{' '}
                                            Dashboard
                                        </span>
                                    </ListGroup.Item>
                                </Link>
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
                                <ListGroup.Item as='li' active>
                                    <span>
                                        <i className='fas fa-shopping-cart' />
                                        Orders
                                    </span>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={10} className='admin-main-col'>
                            <div className='add-movie-btn'>
                                <Link to='movie-add'>
                                    <Button type='submit' variant='primary'>
                                        Add Movie
                                    </Button>
                                </Link>
                            </div>
                            <div className='movie-table mt-2 ml-4'>
                                <Table
                                    variant='dark'
                                    striped
                                    bordered
                                    hover
                                    className='table-sm '
                                >
                                    <thead>
                                        <tr className='col-center'>
                                            <th>MOVIE TITLE</th>
                                            <th>USER</th>
                                            <th>SEAT NUMBER</th>
                                            <th>TOTAL COST</th>
                                            <th>DELETE ORDER</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orderList?.map((order) => (
                                            <tr
                                                key={order._id}
                                                className='col-center'
                                            >
                                                <td>
                                                    {moviesList?.map(
                                                        (movie) => (
                                                            <div
                                                                key={movie._id}
                                                            >
                                                                {movie._id ===
                                                                    order.movie_id && (
                                                                    <span>
                                                                        {
                                                                            movie.movieTitle
                                                                        }
                                                                    </span>
                                                                )}
                                                            </div>
                                                        )
                                                    )}
                                                </td>
                                                <td>
                                                    {users?.map((user) => (
                                                        <div key={user._id}>
                                                            {user._id ===
                                                                order.user_id && (
                                                                <span>
                                                                    {
                                                                        user.fullName
                                                                    }
                                                                </span>
                                                            )}
                                                        </div>
                                                    ))}
                                                </td>
                                                <td>{order.seatNumber}</td>
                                                <td>{order.totalAmount}</td>

                                                <td>
                                                    <Button
                                                        variant='danger'
                                                        className='btn-sm'
                                                        onClick={() =>
                                                            deleteHandler(
                                                                order._id
                                                            )
                                                        }
                                                    >
                                                        <i className='fas fa-trash'></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
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

export default OrderListScreen;
