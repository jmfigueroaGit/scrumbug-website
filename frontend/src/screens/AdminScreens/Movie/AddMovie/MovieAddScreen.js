import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Message from '../../../../components/Message';
import Loader from '../../../../components/Loader';
import { checkMovie } from '../../../../actions/movieAction';
const MovieAddScreen = ({ history }) => {
    const [movieTitle, setMovieTitle] = useState('');
    const [mainCast, setMainCast] = useState('');
    const [director, setDirector] = useState('');
    const [language, setLanguage] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');
    const [movieSynopsis, setMovieSynopsis] = useState('');
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const movieDetails = useSelector((state) => state.movieDetails);
    const { loading, error, movie } = movieDetails;

    useEffect(() => {
        if (movie) {
            if (movie.movieTitle) {
                history.push('/cinema-add');
            }
        }
    }, [history, movie]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (
            movieTitle.length === 0 ||
            mainCast.length === 0 ||
            director.length === 0 ||
            language.length === 0 ||
            genre.length === 0 ||
            rating.length === 0 ||
            movieSynopsis.length === 0
        ) {
            setMessage('Please fill in required fields');
        } else {
            dispatch(
                checkMovie(
                    movieTitle,
                    mainCast,
                    director,
                    language,
                    genre,
                    rating,
                    movieSynopsis
                )
            );
        }
    };

    return (
        <div>
            {loading && <Loader>Loading</Loader>}
            {userInfo ? (
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
                                        <i className='fas fa-film' /> Movies
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
                                    <Col className='active-add add-btn'>
                                        <h5>Step 1</h5>
                                        <i className='fas fa-video'></i>
                                        <p>Movie information</p>
                                    </Col>
                                    <Col className='inactive-add add-btn'>
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
                                    <Form className='mt-1 ml-5'>
                                        <Row className='add-movie-form'>
                                            <Col>
                                                <Form.Group controlId='formBasicEmail'>
                                                    <Form.Label className='form-label'>
                                                        Movie Title
                                                    </Form.Label>
                                                    <Form.Control
                                                        type='text'
                                                        placeholder='Movie Title'
                                                        className='form-control'
                                                        value={movieTitle}
                                                        onChange={(e) =>
                                                            setMovieTitle(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </Form.Group>
                                                <Form.Group controlId='formBasicEmail'>
                                                    <Form.Label className='form-label'>
                                                        Main Cast
                                                    </Form.Label>
                                                    <Form.Control
                                                        type='text'
                                                        placeholder='Main Cast'
                                                        className='form-control'
                                                        value={mainCast}
                                                        onChange={(e) =>
                                                            setMainCast(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </Form.Group>
                                                <Form.Group controlId='formBasicEmail'>
                                                    <Form.Label className='form-label'>
                                                        Director
                                                    </Form.Label>
                                                    <Form.Control
                                                        type='text'
                                                        placeholder='Director'
                                                        className='form-control'
                                                        value={director}
                                                        onChange={(e) =>
                                                            setDirector(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </Form.Group>
                                                <Form.Group controlId='formBasicEmail'>
                                                    <Form.Label className='form-label'>
                                                        Movie Synopsis
                                                    </Form.Label>
                                                    <Form.Control
                                                        as='textarea'
                                                        placeholder='Movie Synopsis'
                                                        className='form-control-synopsis'
                                                        value={movieSynopsis}
                                                        onChange={(e) =>
                                                            setMovieSynopsis(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId='formBasicEmail'>
                                                    <Form.Label className='form-label'>
                                                        Language
                                                    </Form.Label>
                                                    <Form.Control
                                                        type='text'
                                                        placeholder='Language'
                                                        className='form-control'
                                                        value={language}
                                                        onChange={(e) =>
                                                            setLanguage(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </Form.Group>
                                                <Form.Group controlId='formBasicEmail'>
                                                    <Form.Label className='form-label'>
                                                        Genre
                                                    </Form.Label>
                                                    <Form.Control
                                                        type='text'
                                                        placeholder='Genre'
                                                        className='form-control'
                                                        value={genre}
                                                        onChange={(e) =>
                                                            setGenre(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </Form.Group>
                                                <Form.Group controlId='formBasicEmail'>
                                                    <Form.Label className='form-label'>
                                                        Rating
                                                    </Form.Label>
                                                    <Form.Control
                                                        type='number'
                                                        placeholder='Maximum of 10 only'
                                                        className='form-control'
                                                        value={rating}
                                                        onChange={(e) =>
                                                            setRating(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </Form.Group>
                                                <div className='form-submit-btn'>
                                                    <Button
                                                        variant='primary'
                                                        type='submit'
                                                        className='form-submit'
                                                        onClick={submitHandler}
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
                <Redirect to='/login'></Redirect>
            )}
        </div>
    );
};

export default MovieAddScreen;
