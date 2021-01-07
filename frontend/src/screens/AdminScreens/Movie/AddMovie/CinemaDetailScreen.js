import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Message from '../../../../components/Message';
import Loader from '../../../../components/Loader';
import moment from 'moment';
import { addMovie } from '../../../../actions/movieAction';
import {
    MOVIE_DETAILS_RESET,
    MOVIE_UPDATE_RESET,
} from '../../../../constants/movieConstant';
const CinemaDetailsScreen = ({ history }) => {
    const [release, setRelease] = useState('');
    const [endScreening, setEndScreening] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [cinemaNumber, setCinemaNumber] = useState('');
    const [message, setMessage] = useState(null);
    let [duration] = useState('');
    let status = '';

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const movieDetails = useSelector((state) => state.movieDetails);
    const { movie } = movieDetails;

    const movieAdd = useSelector((state) => state.movieAdd);
    const { loading, error, movieInfo } = movieAdd;

    useEffect(() => {
        if (movieInfo) {
            if (movieInfo._id) {
                //dispatch({ type: MOVIE_DETAILS_RESET });
                history.push(`/poster-add/${movieInfo._id}`);
            }
        }
    }, [history, movieInfo, dispatch]);

    const releaseDate = moment(release, 'YYYY-MM-DD').format('MM-DD-YYYY');
    const endDate = moment(endScreening, 'YYYY-MM-DD').format('MM-DD-YYYY');

    const movieStart = moment(startTime, 'LT');
    const movieEnd = moment(endTime, 'LT');

    duration = movieEnd.diff(movieStart, 'minutes');
    let today = moment().add(4, 'weeks').format('YYYY-MM-DD');
    let after = moment(releaseDate).isAfter(today);

    const submitHandler = (e) => {
        e.preventDefault();
        if (
            cinemaNumber.length === 0 ||
            release.length === 0 ||
            endScreening.length === 0 ||
            startTime.length === 0 ||
            endTime.length === 0
        ) {
            setMessage('Please fill in required fields');
        } else {
            if (after) {
                status = 'Coming Soon';
                console.log(status);
                console.log(releaseDate);
                console.log(duration);
                console.log(endDate);
                dispatch(
                    addMovie(
                        movie.movieTitle,
                        movie.mainCast,
                        movie.director,
                        movie.language,
                        movie.genre,
                        duration,
                        movie.rating,
                        releaseDate,
                        endDate,
                        cinemaNumber,
                        startTime,
                        endTime,
                        status
                    )
                );
            } else {
                status = 'Now Showing';
                console.log(status);
                console.log(releaseDate);
                console.log(duration);
                console.log(endDate);
                dispatch(
                    addMovie(
                        movie.movieTitle,
                        movie.mainCast,
                        movie.director,
                        movie.language,
                        movie.genre,
                        duration,
                        movie.rating,
                        releaseDate,
                        endDate,
                        cinemaNumber,
                        startTime,
                        endTime,
                        status
                    )
                );
            }
        }
    };

    return (
        <div>
            {loading && <Loader>Loading</Loader>}
            {userInfo ? (
                <div>
                    {movie.movieTitle ? (
                        <Container fluid className='admin-main'>
                            <Row className='h-100' fluid>
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
                                        <ListGroup.Item as='li' active>
                                            <span>
                                                <i className='fas fa-film' />{' '}
                                                Movies
                                            </span>
                                        </ListGroup.Item>
                                        <ListGroup.Item as='li'>
                                            <span>
                                                <i className='fas fa-shopping-cart' />
                                                Bookings
                                            </span>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                                <Col sm={10} className='admin-main-col'>
                                    <Container>
                                        <Row className='add-movie-steps'>
                                            <Col className='add-btn'>
                                                <h5>Step 1</h5>
                                                <i className='fas fa-video'></i>
                                                <p>Movie information</p>
                                            </Col>
                                            <Col className='active-add add-btn'>
                                                <h5>Step 2</h5>
                                                <i className='fas fa-ticket-alt'></i>
                                                <p>Cinema information</p>
                                            </Col>
                                            <Col className='inactive-add add-btn'>
                                                <h5>Step 3</h5>
                                                <i className='fas fa-images'></i>
                                                <p>Movie Posters</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            {message && (
                                                <div className='message-box add-movie-error'>
                                                    <Message>{message}</Message>
                                                </div>
                                            )}
                                            {error && (
                                                <div className='message-box add-movie-error'>
                                                    <Message variant='danger'>
                                                        {error}
                                                    </Message>
                                                </div>
                                            )}
                                            <Form className='mt-5 ml-5'>
                                                <Row className='add-movie-form'>
                                                    <Col>
                                                        <Form.Group controlId='formBasicEmail'>
                                                            <Form.Label className='form-label'>
                                                                Release Date
                                                            </Form.Label>
                                                            <Form.Control
                                                                type='date'
                                                                placeholder=' Release Date'
                                                                className='form-control'
                                                                value={release}
                                                                onChange={(e) =>
                                                                    setRelease(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </Form.Group>
                                                        <Form.Group controlId='formBasicEmail'>
                                                            <Form.Label className='form-label'>
                                                                End Screening
                                                                Date
                                                            </Form.Label>
                                                            <Form.Control
                                                                type='date'
                                                                placeholder='End Screening Date'
                                                                className='form-control'
                                                                value={
                                                                    endScreening
                                                                }
                                                                onChange={(e) =>
                                                                    setEndScreening(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </Form.Group>
                                                        <Form.Group controlId='formBasicEmail'>
                                                            <Form.Label className='form-label'>
                                                                Cinema Number
                                                            </Form.Label>
                                                            <Form.Control
                                                                type='number'
                                                                placeholder='Cinema Number'
                                                                className='form-control'
                                                                value={
                                                                    cinemaNumber
                                                                }
                                                                onChange={(e) =>
                                                                    setCinemaNumber(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col>
                                                        <Form.Group controlId='formBasicEmail'>
                                                            <Form.Label className='form-label'>
                                                                Start Time
                                                            </Form.Label>
                                                            <Form.Control
                                                                type='time'
                                                                placeholder='Start Time'
                                                                className='form-control'
                                                                value={
                                                                    startTime
                                                                }
                                                                onChange={(e) =>
                                                                    setStartTime(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </Form.Group>
                                                        <Form.Group controlId='formBasicEmail'>
                                                            <Form.Label className='form-label'>
                                                                End Time
                                                            </Form.Label>
                                                            <Form.Control
                                                                type='time'
                                                                placeholder='End Time'
                                                                className='form-control'
                                                                value={endTime}
                                                                onChange={(e) =>
                                                                    setEndTime(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </Form.Group>

                                                        <div className='form-submit-btn mt-5'>
                                                            <Button
                                                                variant='primary'
                                                                type='submit'
                                                                className='form-submit'
                                                                onClick={
                                                                    submitHandler
                                                                }
                                                            >
                                                                Submit
                                                            </Button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    ) : (
                        <Redirect to='/movie-add'></Redirect>
                    )}
                </div>
            ) : (
                <Redirect to='/login'></Redirect>
            )}
        </div>
    );
};

export default CinemaDetailsScreen;
