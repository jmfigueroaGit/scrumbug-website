import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Image, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import {
    getMovieDetails,
    getOrderDetails,
    getOrderMovieDetails,
} from '../actions/movieAction';
import Loader from '../components/Loader';
import { GET_ORDER_RESET } from '../constants/movieConstant';
const OrderScreen = ({ history }) => {
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const getOrder = useSelector((state) => state.getOrder);
    const { loading, error, order } = getOrder;

    const movieList = useSelector((state) => state.movieList);
    const { moviesList } = movieList;

    useEffect(() => {
        if (userInfo) {
            if (userInfo._id) {
                dispatch(getOrderDetails({ user_id: userInfo._id }));
            }
        }
    }, [dispatch, userInfo]);

    const backHandler = (e) => {
        e.preventDefault();
        dispatch({ type: GET_ORDER_RESET });
        history.push('/home');
    };

    return (
        <div className='order-main'>
            <Container className='user-table'>
                {loading && (
                    <div className='order-loader'>
                        <Loader>Loading</Loader>
                    </div>
                )}
                <Row className='back-button'>
                    <Button onClick={backHandler}>Back</Button>
                </Row>
                {order?.map((orderData) => (
                    <div key={orderData._id}>
                        <div>
                            {moviesList?.map((movie) => (
                                <div key={movie._id}>
                                    {movie._id === orderData.movie_id && (
                                        <Row className='order-row'>
                                            {' '}
                                            <Col sm={2}>
                                                <Image
                                                    src={movie.poster}
                                                    className='order-image'
                                                />
                                            </Col>
                                            <Col sm={7}>
                                                <Row className='order-col1'>
                                                    <span>
                                                        Movie Title:{' '}
                                                        {movie.movieTitle}
                                                    </span>
                                                </Row>
                                                <Row className='order-col1'>
                                                    <span>
                                                        Seat Number:{' '}
                                                        {orderData.seatNumber}
                                                    </span>
                                                </Row>
                                                <Row className='order-col1'>
                                                    <span>
                                                        Total Cost: ${' '}
                                                        {orderData.totalAmount}
                                                    </span>
                                                </Row>
                                                <Row className='order-col1'>
                                                    <span>
                                                        Transaction ID:{' '}
                                                        {orderData._id}
                                                    </span>
                                                </Row>
                                            </Col>
                                        </Row>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </Container>
        </div>
    );
};

export default OrderScreen;
