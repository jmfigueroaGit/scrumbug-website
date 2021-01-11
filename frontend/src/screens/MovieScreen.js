import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Row, Image } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Rating from '../components/Rating';
import { updateSeat } from '../actions/movieAction';

const theme = {
    available: {
        backgroundColor: 'rgb(0, 50, 187)',
    },
    select: {
        backgroundColor: 'rgb(177, 14, 14)',
    },
};

const MovieScreen = () => {
    const [clickA1, setClickA1] = useState(false);
    // const [clickA2, setClickA2] = useState(false);
    // const [clickA3, setClickA3] = useState(false);
    // const [clickA4, setClickA4] = useState(false);
    // const [clickA5, setClickA5] = useState(false);
    // const [clickA6, setClickA6] = useState(false);
    // const [clickA7, setClickA7] = useState(false);
    // const [clickA8, setClickA8] = useState(false);

    // const [clickB1, setClickB1] = useState(false);
    // const [clickB2, setClickB2] = useState(false);
    // const [clickB3, setClickB3] = useState(false);
    // const [clickB4, setClickB4] = useState(false);
    // const [clickB5, setClickB5] = useState(false);
    // const [clickB6, setClickB6] = useState(false);
    // const [clickB7, setClickB7] = useState(false);
    // const [clickB8, setClickB8] = useState(false);

    // const [clickC1, setClickCD1] = useState(false);
    // const [clickC2, setClickC2] = useState(false);
    // const [clickC3, setClickC3] = useState(false);
    // const [clickC4, setClick4C] = useState(false);
    // const [clickC5, setClickC5] = useState(false);
    // const [clickC6, setClickC6] = useState(false);
    // const [clickC7, setClickC7] = useState(false);
    // const [clickC8, setClickC8] = useState(false);

    // const [clickD1, setClickD1] = useState(false);
    // const [clickD2, setClickD2] = useState(false);
    // const [clickD3, setClickD3] = useState(false);
    // const [clickD4, setClickD4] = useState(false);
    // const [clickD5, setClickD5] = useState(false);
    // const [clickD6, setClickD6] = useState(false);
    // const [clickD7, setClickD7] = useState(false);
    // const [clickD8, setClickD8] = useState(false);

    let [valueA1, setValueA1] = useState('');
    let [valueA2, setValueA2] = useState('');
    let [valueA3, setValueA3] = useState('');
    let [valueA4, setValueA4] = useState('');
    let [valueA5, setValueA5] = useState('');
    let [valueA6, setValueA6] = useState('');
    let [valueA7, setValueA7] = useState('');
    let [valueA8, setValueA8] = useState('');

    let [valueB1, setValueB1] = useState('');
    let [valueB2, setValueB2] = useState('');
    let [valueB3, setValueB3] = useState('');
    let [valueB4, setValueB4] = useState('');
    let [valueB5, setValueB5] = useState('');
    let [valueB6, setValueB6] = useState('');
    let [valueB7, setValueB7] = useState('');
    let [valueB8, setValueB8] = useState('');

    let [valueC1, setValueC1] = useState('');
    let [valueC2, setValueC2] = useState('');
    let [valueC3, setValueC3] = useState('');
    let [valueC4, setValueC4] = useState('');
    let [valueC5, setValueC5] = useState('');
    let [valueC6, setValueC6] = useState('');
    let [valueC7, setValueC7] = useState('');
    let [valueC8, setValueC8] = useState('');

    let [valueD1, setValueD1] = useState('');
    let [valueD2, setValueD2] = useState('');
    let [valueD3, setValueD3] = useState('');
    let [valueD4, setValueD4] = useState('');
    let [valueD5, setValueD5] = useState('');
    let [valueD6, setValueD6] = useState('');
    let [valueD7, setValueD7] = useState('');
    let [valueD8, setValueD8] = useState('');

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const movieDetails = useSelector((state) => state.movieDetails);
    const { movie } = movieDetails;

    const seatList = useSelector((state) => state.seatList);
    const { loading, error, seats } = seatList;

    const rating = parseFloat(movie.rating);

    useEffect(() => {
        if (seats) {
            if (seats.movie) {
                setValueA1(seats.A1);
                // setValueA2(seats.A2.user);
                // setValueA3(seats.A3.user);
                // setValueA4(seats.A4.user);
                // setValueA5(seats.A5.user);
                // setValueA6(seats.A6.user);
                // setValueA7(seats.A7.user);
                // setValueA8(seats.A8.user);

                // setValueB1(seats.B1.user);
                // setValueB2(seats.B2.user);
                // setValueB3(seats.B3.user);
                // setValueB4(seats.B4.user);
                // setValueB5(seats.B5.user);
                // setValueB6(seats.B6.user);
                // setValueB7(seats.B7.user);
                // setValueB8(seats.B8.user);

                // setValueC1(seats.C1.user);
                // setValueC2(seats.C2.user);
                // setValueC3(seats.C3.user);
                // setValueC4(seats.C4.user);
                // setValueC5(seats.C5.user);
                // setValueC6(seats.C6.user);
                // setValueC7(seats.C7.user);
                // setValueC8(seats.C8.user);

                // setValueD1(seats.D1.user);
                // setValueD2(seats.D2.user);
                // setValueD3(seats.D3.user);
                // setValueD4(seats.D4.user);
                // setValueD5(seats.D5.user);
                // setValueD6(seats.D6.user);
                // setValueD7(seats.D7.user);
                // setValueD8(seats.D8.user);
            }
        }
    }, [dispatch, seats]);

    const submitHandlerA1 = (e) => {
        e.preventDefault();
        setClickA1(true);
        valueA1 = userInfo._id;
        console.log(userInfo._id);
    };
    // const submitHandlerA2 = (e) => {
    //     e.preventDefault();
    //     setClickA2(true);
    // };
    // const submitHandlerA3 = (e) => {
    //     e.preventDefault();
    //     setClickA3(true);
    // };
    // const submitHandlerA4 = (e) => {
    //     e.preventDefault();
    //     setClickA4(true);
    // };
    // const submitHandlerA5 = (e) => {
    //     e.preventDefault();
    //     setClickA5(true);
    // };
    // const submitHandlerA6 = (e) => {
    //     e.preventDefault();
    //     setClickA6(true);
    // };
    // const submitHandlerA7 = (e) => {
    //     e.preventDefault();
    //     setClickA7(true);
    // };
    // const submitHandlerA8 = (e) => {
    //     e.preventDefault();
    //     setClickA8(true);
    // };

    const A1 = ' A1';
    // const A2 = ' A2';
    // const A3 = ' A3';
    // const A4 = ' A4';
    // const A5 = ' A5';
    // const A6 = ' A6';
    // const A7 = ' A7';
    // const A8 = ' A8';

    // const B1 = ' B1';
    // const B2 = ' B2';
    // const B3 = ' B3';
    // const B4 = ' B4';
    // const B5 = ' B5';
    // const B6 = ' B6';
    // const B7 = ' B7';
    // const B8 = ' B8';

    // const C1 = ' A1';
    // const C2 = ' A2';
    // const C3 = ' A3';
    // const C4 = ' A4';
    // const C5 = ' A5';
    // const C6 = ' A6';
    // const C7 = ' A7';
    // const C8 = ' A8';

    // const D1 = ' D1';
    // const D2 = ' D2';
    // const D3 = ' D3';
    // const D4 = ' D4';
    // const D5 = ' D5';
    // const D6 = ' D6';
    // const D7 = ' D7';
    // const D8 = ' D8';

    let show = '';
    let prize = 250;
    let total = 0;
    const data = {
        status: 'reserved',
        user: valueA1,
    };

    const submitDataHandler = (e) => {
        e.preventDefault();
        if (
            clickA1 === false
            // && clickA2 === false &&
            // clickA3 === false &&
            // clickA4 === false &&
            // clickA5 === false &&
            // clickA6 === false &&
            // clickA7 === false &&
            // clickA8 === false
        ) {
            alert('Please select seats');
        } else {
            dispatch(
                updateSeat({
                    A1: { status: 'reserved', user: userInfo._id },
                    movie: movie._id,
                })
            );
        }
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
                                <Col className='mt-5'>
                                    <Button className='wishlist mt-3'>
                                        <i className='fas fa-grin-stars' />
                                        Watch Trailer
                                    </Button>
                                </Col>
                            </Row>
                            <Container className='cinema-seat' fluid>
                                <Row>
                                    <Col sm={8} className='sample-bg'>
                                        <div className='cinema-screen'>
                                            <span className='main-screen'>
                                                screen
                                            </span>
                                        </div>
                                        <Row className='row-seat'>
                                            <Col className='seat-row'>
                                                <div>
                                                    {seats?.A1?.status !==
                                                    'available' ? (
                                                        <Button
                                                            style={
                                                                theme.available
                                                            }
                                                            className='seat-guide'
                                                            id='ads'
                                                            onClick={
                                                                submitHandlerA1
                                                            }
                                                        >
                                                            <span className='seat-place'>
                                                                A1
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <div>
                                                            {clickA1 ===
                                                            true ? (
                                                                (total += prize) &&
                                                                (show += A1) && (
                                                                    <Button
                                                                        style={
                                                                            theme.select
                                                                        }
                                                                        className='seat-guide'
                                                                        id='ads'
                                                                    >
                                                                        <span className='seat-place'>
                                                                            {A1}
                                                                        </span>
                                                                    </Button>
                                                                )
                                                            ) : (
                                                                <Button
                                                                    className='seat-guide'
                                                                    id='ads'
                                                                    onClick={
                                                                        submitHandlerA1
                                                                    }
                                                                >
                                                                    <span className='seat-place'>
                                                                        A1
                                                                    </span>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm={4}>
                                        {/* {show.length !== 0 ? (
                                            <div>
                                                <p>{show}</p>
                                                <p>
                                                    {'$ '} {total}
                                                </p>
                                            </div>
                                        ) : (
                                            <p></p>
                                        )} */}
                                        <Button onClick={submitDataHandler}>
                                            Proceed to checkout
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
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
