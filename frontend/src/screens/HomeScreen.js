import React, { useState, useEffect } from 'react';
import { Button, Carousel, Col, Container, Row, Card } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listMovies } from '../actions/movieAction';
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
            if (userInfo._id) {
                dispatch(listMovies());
            }
        }
    }, [dispatch, userInfo]);

    return (
        <div>
            {userInfo ? (
                <div>
                    {loading && <Loader>Loading</Loader>}
                    {movieList ? (
                        <Container fluid>
                            <Carousel>
                                {moviesList?.map((movie) => (
                                    <Carousel.Item interval={2500}>
                                        <div>
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
                                                        <i class='fas fa-star' />
                                                        {movie.rating}
                                                    </h5>
                                                </Col>
                                                <Col xs={3} className='rating'>
                                                    <h5>
                                                        <i
                                                            class='fa fa-film'
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
                                                    <Button className='buy-ticket'>
                                                        <i
                                                            class='fas fa-ticket-alt '
                                                            style={{
                                                                padding: '5px',
                                                            }}
                                                        />
                                                        Book a Ticket
                                                    </Button>
                                                </Col>
                                                <Col>
                                                    <Button className='wishlist'>
                                                        <i class='fas fa-grin-stars' />
                                                        Add to Wishlist
                                                    </Button>
                                                </Col>
                                                <Col></Col>
                                            </Row>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                            {moviesList?.map((movie) => (
                                <div>
                                    {movie.status === 'coming-soon' ? (
                                        <Col>
                                            <Row
                                                style={{
                                                    borderBottom:
                                                        '2px solid #505050',
                                                    padding: '0',
                                                    margin: '0',
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        color: '#C4C4C4',
                                                        fontSize: '25px',
                                                        paddingTop: '5rem',
                                                    }}
                                                >
                                                    <i class='fas fa-film mr-2'></i>
                                                    Coming Soon
                                                </span>
                                            </Row>
                                            <Row className='py-5'>
                                                <Col xs={2} className='mr-1'>
                                                    <Card
                                                        style={{
                                                            width: '18rem',
                                                            backgroundColor:
                                                                '#333333',
                                                            border: 'none',
                                                        }}
                                                    >
                                                        <Card.Img
                                                            variant='top'
                                                            src={movie.poster}
                                                            style={{
                                                                width: '180px',
                                                                height: 'auto',
                                                            }}
                                                        />
                                                        <Card.Body
                                                            style={{
                                                                padding: '0',
                                                                margin: '0',
                                                            }}
                                                        >
                                                            <Card.Title
                                                                style={{
                                                                    color:
                                                                        'white',
                                                                    fontWeight:
                                                                        'bold',
                                                                    fontSize:
                                                                        '18px',
                                                                    paddingTop:
                                                                        '1rem',
                                                                }}
                                                            >
                                                                {
                                                                    movie.movieTitle
                                                                }
                                                            </Card.Title>
                                                            <Card.Text
                                                                style={{
                                                                    color:
                                                                        'white',
                                                                    fontWeight:
                                                                        '100',
                                                                }}
                                                            >
                                                                {movie.genre}
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Col>
                                    ) : (
                                        <span></span>
                                    )}
                                    {movie.status === 'now-showing' ? (
                                        <Col>
                                            <Row
                                                style={{
                                                    borderBottom:
                                                        '2px solid #505050',
                                                    padding: '0',
                                                    margin: '0',
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        color: '#C4C4C4',
                                                        fontSize: '25px',
                                                        paddingTop: '5rem',
                                                    }}
                                                >
                                                    <i class='fas fa-film mr-2'></i>
                                                    Now Showing
                                                </span>
                                            </Row>
                                            <Row className='py-5'>
                                                <Col xs={2} className='mr-1'>
                                                    <Card
                                                        style={{
                                                            width: '18rem',
                                                            backgroundColor:
                                                                '#333333',
                                                            border: 'none',
                                                        }}
                                                    >
                                                        <Card.Img
                                                            variant='top'
                                                            src={movie.poster}
                                                            style={{
                                                                width: '180px',
                                                                height: 'auto',
                                                            }}
                                                        />
                                                        <Card.Body
                                                            style={{
                                                                padding: '0',
                                                                margin: '0',
                                                            }}
                                                        >
                                                            <Card.Title
                                                                style={{
                                                                    color:
                                                                        'white',
                                                                    fontWeight:
                                                                        'bold',
                                                                    fontSize:
                                                                        '18px',
                                                                    paddingTop:
                                                                        '1rem',
                                                                }}
                                                            >
                                                                {
                                                                    movie.movieTitle
                                                                }
                                                            </Card.Title>
                                                            <Card.Text
                                                                style={{
                                                                    color:
                                                                        'white',
                                                                    fontWeight:
                                                                        '100',
                                                                }}
                                                            >
                                                                {movie.genre}
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Col>
                                    ) : (
                                        <span></span>
                                    )}
                                </div>
                            ))}
                        </Container>
                    ) : (
                        <span></span>
                    )}
                </div>
            ) : (
                <span></span>
            )}
        </div>
    );
};

export default HomeScreen;
