import React, { useState, useEffect } from 'react';
import { Button, Carousel, Col, Container, Row, Card } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    getMovieDetails,
    getSeatDetails,
    listMovies,
} from '../actions/movieAction';
import Message from '../components/Message';
import Loader from '../components/Loader';
const HomeScreen = () => {
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const movieList = useSelector((state) => state.movieList);
    const { loading, error, moviesList } = movieList;

    useEffect(() => {
        if (userInfo) {
            dispatch(listMovies());
        }
    }, [dispatch, userInfo]);

    const movieScreen = (id) => {
        dispatch(getMovieDetails(id));
        dispatch(getSeatDetails(id));
    };

    return (
        <div>
            {userInfo ? (
                <div>
                    {movieList ? (
                        <Container fluid>
                            {loading && <Loader>Loading</Loader>}
                            <Carousel>
                                {moviesList?.map((movie) => (
                                    <Carousel.Item
                                        interval={2500}
                                        key={movie._id}
                                    >
                                        <div className='crop'>
                                            <img
                                                className='image-slider'
                                                src={movie.banner}
                                                alt='First slide'
                                            />
                                            <img
                                                className=' image-slider-overlay'
                                                alt='First slide'
                                                src='/images/black.jpg'
                                            />
                                        </div>
                                        <Carousel.Caption className='slider-caption'>
                                            <h5>
                                                Duration: {movie.duration}{' '}
                                                minutes
                                            </h5>
                                            <Row>
                                                <Col xs={3} className='review'>
                                                    <h5>
                                                        <i className='fas fa-star' />
                                                        {movie.rating}
                                                    </h5>
                                                </Col>
                                                <Col xs={3} className='rating'>
                                                    <h5>
                                                        <i
                                                            className='fa fa-film'
                                                            aria-hidden='true'
                                                        />{' '}
                                                        {movie.language}
                                                    </h5>
                                                </Col>
                                                <Col xs={6} className='rating'>
                                                    <h5>{movie.genre}</h5>
                                                </Col>
                                            </Row>
                                            <div className='movie-title'>
                                                <h1>{movie.movieTitle}</h1>
                                                <p>{movie.movieSynopsis}</p>
                                            </div>
                                            <Row>
                                                <Col>
                                                    <Link
                                                        to={`/movie-screen/${movie._id}`}
                                                    >
                                                        <Button
                                                            className='buy-ticket'
                                                            onClick={() =>
                                                                movieScreen(
                                                                    movie._id
                                                                )
                                                            }
                                                        >
                                                            <i
                                                                className='fas fa-ticket-alt '
                                                                style={{
                                                                    padding:
                                                                        '5px',
                                                                }}
                                                            />
                                                            Book a Ticket
                                                        </Button>
                                                    </Link>
                                                </Col>
                                                <Col>
                                                    <Button className='wishlist'>
                                                        <i className='fas fa-grin-stars' />
                                                        Watch Trailer
                                                    </Button>
                                                </Col>
                                                <Col></Col>
                                            </Row>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                            <Col>
                                <Row className='row-movie'>
                                    <span>
                                        <i className='fas fa-film mr-2'></i>
                                        Now Showing
                                    </span>
                                </Row>

                                <Row className='py-3'>
                                    {moviesList?.map((movie) => (
                                        <div key={movie._id}>
                                            {movie.status === 'now-showing' ? (
                                                <Col xs={2} className='mr-1'>
                                                    <Card className='card-movie'>
                                                        <Card.Img
                                                            variant='top'
                                                            src={movie.poster}
                                                            className='card-image'
                                                        />

                                                        <div className='image-hover'>
                                                            <div className='hover-content'>
                                                                <Link
                                                                    to={`/movie-screen/${movie._id}`}
                                                                >
                                                                    <Button
                                                                        className='hover-button'
                                                                        onClick={() =>
                                                                            movieScreen(
                                                                                movie._id
                                                                            )
                                                                        }
                                                                    >
                                                                        Book a
                                                                        ticket
                                                                    </Button>
                                                                </Link>
                                                                <Button className='hover-button'>
                                                                    Watch
                                                                    Trailer
                                                                </Button>
                                                            </div>
                                                        </div>
                                                        <Card.Body className='card-body'>
                                                            <Card.Title className='card-title'>
                                                                {
                                                                    movie.movieTitle
                                                                }
                                                            </Card.Title>
                                                            <Card.Text className='card-text'>
                                                                {movie.genre}
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ) : (
                                                <span></span>
                                            )}
                                        </div>
                                    ))}
                                </Row>
                                <Row className='row-movie'>
                                    <span>
                                        <i className='fas fa-film mr-2'></i>
                                        Coming Soon
                                    </span>
                                </Row>

                                <Row className='py-3 pb-5'>
                                    {moviesList?.map((movie) => (
                                        <div key={movie._id}>
                                            {movie.status === 'coming-soon' ? (
                                                <Col xs={2} className='mr-1'>
                                                    <Card className='card-movie'>
                                                        <Card.Img
                                                            variant='top'
                                                            src={movie.poster}
                                                            className='card-image'
                                                        />
                                                        <div className='image-hover'>
                                                            <div className='hover-content'>
                                                                <Link
                                                                    to={`/movie-screen/${movie._id}`}
                                                                >
                                                                    <Button
                                                                        className='hover-button'
                                                                        onClick={() =>
                                                                            movieScreen(
                                                                                movie._id
                                                                            )
                                                                        }
                                                                    >
                                                                        Book a
                                                                        ticket
                                                                    </Button>
                                                                </Link>
                                                                <Button className='hover-button'>
                                                                    Watch
                                                                    Trailer
                                                                </Button>
                                                            </div>
                                                        </div>
                                                        <Card.Body className='card-body'>
                                                            <Card.Title className='card-title'>
                                                                {
                                                                    movie.movieTitle
                                                                }
                                                            </Card.Title>
                                                            <Card.Text className='card-text'>
                                                                {movie.genre}
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ) : (
                                                <span></span>
                                            )}
                                        </div>
                                    ))}
                                </Row>
                            </Col>
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

export default HomeScreen;
