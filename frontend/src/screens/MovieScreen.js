import React, { useState, useEffect } from 'react';
import {
    Button,
    Carousel,
    Col,
    Container,
    Row,
    Card,
    Image,
} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listMovies } from '../actions/movieAction';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Rating from '../components/Rating';
const MovieScreen = () => {
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const movieDetails = useSelector((state) => state.movieDetails);
    const { loading, error, movie } = movieDetails;

    const rating = parseFloat(movie.rating);
    console.log(rating);
    return (
        <div>
            {userInfo ? (
                <div>
                    {loading && <Loader>Loading</Loader>}
                    {movie ? (
                        <Container fluid>
                            <Row className='single-row1'>
                                <Col sm={3}>
                                    <div className='single-image-col1'>
                                        <Image
                                            src={movie.poster}
                                            className='single-image'
                                        ></Image>
                                    </div>
                                </Col>
                                <Col sm={6}>
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
                                            <p>
                                                <Rating
                                                    rating={rating}
                                                    total={movie.rating}
                                                ></Rating>
                                            </p>
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
                            </Row>
                        </Container>
                    ) : (
                        <Redirect to='/login'></Redirect>
                    )}
                </div>
            ) : (
                <Redirect to='/login'></Redirect>
            )}
        </div>
    );
};

export default MovieScreen;
