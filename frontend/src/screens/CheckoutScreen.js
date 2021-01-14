import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Row, Image } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Rating from '../components/Rating';
import { checkoutOrder } from '../actions/movieAction';
import {
    MOVIE_CHECKOUT_RESET,
    MOVIE_DETAILS_RESET,
    MOVIE_SEAT_RESET,
    MOVIE_SEAT_UPDATE_RESET,
} from '../constants/movieConstant';

const MovieScreen = ({ history }) => {
    const dispatch = useDispatch();
    const [total, setTotal] = useState('');
    const [seat, setSeat] = useState('');
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const movieDetails = useSelector((state) => state.movieDetails);
    const { movie } = movieDetails;

    const checkout = useSelector((state) => state.checkout);
    const { loading, error, checkoutInfo } = checkout;

    const rating = parseFloat(movie.rating);
    useEffect(() => {
        if (checkoutInfo) {
            if (checkoutInfo.user_id) {
                setTotal(checkoutInfo.totalAmount);
                setSeat(checkoutInfo.seatNumber);
            }
        }
    }, [dispatch, checkoutInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            checkoutOrder({
                user_id: checkoutInfo.user_id,
                movie_id: movie._id,
                screeningDate: checkoutInfo.screeningDate,
                cinemaNumber: checkoutInfo.cinemaNumber,
                seatNumber: checkoutInfo.seatNumber,
                totalAmount: checkoutInfo.totalAmount,
            })
        );
        history.push('/home');
    };

    return (
        <div>
            {userInfo ? (
                <div>
                    {loading && <Loader>Loading</Loader>}
                    {movie ? (
                        <Container fluid>
                            <Row className='back-button'>
                                <Link to='/home'>
                                    <Button href='/home'>Back</Button>
                                </Link>
                            </Row>
                            <Row className='single-row1'>
                                <Col sm={3}>
                                    <div className='single-image-col1'>
                                        <Image
                                            src={movie.poster}
                                            className='single-image'
                                        ></Image>
                                    </div>
                                </Col>
                                <Col sm={5}>
                                    <div className='single-content-col2'>
                                        <h1>{movie.movieTitle}</h1>
                                        <span className='ml-3 mr-4'>
                                            {movie.genre}
                                        </span>
                                        <span className='ml-5  mr-4'>
                                            {movie.language}
                                        </span>
                                        <span className='ml-5'>
                                            {movie.duration} minutes
                                        </span>

                                        <div className='mt-4'>
                                            <span>
                                                <Rating
                                                    rating={rating}
                                                    total={movie.rating}
                                                ></Rating>
                                            </span>
                                            <p>Cast: {movie.mainCast}</p>
                                            <p>Director: {movie.director}</p>
                                            <p>
                                                Release Date:{' '}
                                                {movie.releasedDate}
                                            </p>
                                            <p>
                                                Available Time:{' '}
                                                {movie.startTime}
                                            </p>
                                            <p>
                                                Synopsis: {movie.movieSynopsis}
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col className='mt-5 checkout-details'>
                                    <div>
                                        <h5>Name: {userInfo.fullName}</h5>
                                        <h5>
                                            Screening Date: {movie.releasedDate}
                                        </h5>
                                        <h5>
                                            Cinema Number: {movie.cinemaNumber}
                                        </h5>
                                        <h5>Seat Number: {seat}</h5>
                                        <h5>Total Amount: $ {total}</h5>
                                    </div>
                                    <Button
                                        href='/home'
                                        className='confirm-btn'
                                        onClick={submitHandler}
                                    >
                                        Confirm
                                    </Button>
                                </Col>
                            </Row>
                            <Container
                                className='cinema-seat'
                                fluid
                            ></Container>
                        </Container>
                    ) : (
                        <Redirect to='/home'></Redirect>
                    )}
                </div>
            ) : (
                <Redirect to='/login'></Redirect>
            )}
        </div>
    );
};

export default MovieScreen;
