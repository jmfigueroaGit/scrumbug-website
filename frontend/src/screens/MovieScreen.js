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
    // State if seat button is clicked
    const [clickA1, setClickA1] = useState(false);
    const [clickA2, setClickA2] = useState(false);
    const [clickA3, setClickA3] = useState(false);
    const [clickA4, setClickA4] = useState(false);
    const [clickA5, setClickA5] = useState(false);
    const [clickA6, setClickA6] = useState(false);
    const [clickA7, setClickA7] = useState(false);
    const [clickA8, setClickA8] = useState(false);

    const [clickB1, setClickB1] = useState(false);
    const [clickB2, setClickB2] = useState(false);
    const [clickB3, setClickB3] = useState(false);
    const [clickB4, setClickB4] = useState(false);
    const [clickB5, setClickB5] = useState(false);
    const [clickB6, setClickB6] = useState(false);
    const [clickB7, setClickB7] = useState(false);
    const [clickB8, setClickB8] = useState(false);

    const [clickC1, setClickC1] = useState(false);
    const [clickC2, setClickC2] = useState(false);
    const [clickC3, setClickC3] = useState(false);
    const [clickC4, setClickC4] = useState(false);
    const [clickC5, setClickC5] = useState(false);
    const [clickC6, setClickC6] = useState(false);
    const [clickC7, setClickC7] = useState(false);
    const [clickC8, setClickC8] = useState(false);

    const [clickD1, setClickD1] = useState(false);
    const [clickD2, setClickD2] = useState(false);
    const [clickD3, setClickD3] = useState(false);
    const [clickD4, setClickD4] = useState(false);
    const [clickD5, setClickD5] = useState(false);
    const [clickD6, setClickD6] = useState(false);
    const [clickD7, setClickD7] = useState(false);
    const [clickD8, setClickD8] = useState(false);

    // State the availability of seat numbers
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

    // State for logged in user id
    let [userA1, setUserA1] = useState('');
    let [userA2, setUserA2] = useState('');
    let [userA3, setUserA3] = useState('');
    let [userA4, setUserA4] = useState('');
    let [userA5, setUserA5] = useState('');
    let [userA6, setUserA6] = useState('');
    let [userA7, setUserA7] = useState('');
    let [userA8, setUserA8] = useState('');

    let [userB1, setUserB1] = useState('');
    let [userB2, setUserB2] = useState('');
    let [userB3, setUserB3] = useState('');
    let [userB4, setUserB4] = useState('');
    let [userB5, setUserB5] = useState('');
    let [userB6, setUserB6] = useState('');
    let [userB7, setUserB7] = useState('');
    let [userB8, setUserB8] = useState('');

    let [userC1, setUserC1] = useState('');
    let [userC2, setUserC2] = useState('');
    let [userC3, setUserC3] = useState('');
    let [userC4, setUserC4] = useState('');
    let [userC5, setUserC5] = useState('');
    let [userC6, setUserC6] = useState('');
    let [userC7, setUserC7] = useState('');
    let [userC8, setUserC8] = useState('');

    let [userD1, setUserD1] = useState('');
    let [userD2, setUserD2] = useState('');
    let [userD3, setUserD3] = useState('');
    let [userD4, setUserD4] = useState('');
    let [userD5, setUserD5] = useState('');
    let [userD6, setUserD6] = useState('');
    let [userD7, setUserD7] = useState('');
    let [userD8, setUserD8] = useState('');

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const movieDetails = useSelector((state) => state.movieDetails);
    const { movie } = movieDetails;

    const seatList = useSelector((state) => state.seatList);
    const { loading, error, seats } = seatList;

    const rating = parseFloat(movie.rating);
    let flag = 0;
    useEffect(() => {
        if (seats) {
            if (seats.movie) {
                //             //Retrieved seat status from database
                setValueA1(seats.A1.status);
                setValueA2(seats.A2.status);
                setValueA3(seats.A3.status);
                setValueA4(seats.A4.status);
                setValueA5(seats.A5.status);
                setValueA6(seats.A6.status);
                setValueA7(seats.A7.status);
                setValueA8(seats.A8.status);

                setValueB1(seats.B1.status);
                setValueB2(seats.B2.status);
                setValueB3(seats.B3.status);
                setValueB4(seats.B4.status);
                setValueB5(seats.B5.status);
                setValueB6(seats.B6.status);
                setValueB7(seats.B7.status);
                setValueB8(seats.B8.status);

                setValueC1(seats.C1.status);
                setValueC2(seats.C2.status);
                setValueC3(seats.C3.status);
                setValueC4(seats.C4.status);
                setValueC5(seats.C5.status);
                setValueC6(seats.C6.status);
                setValueC7(seats.C7.status);
                setValueC8(seats.C8.status);

                setValueD1(seats.D1.status);
                setValueD2(seats.D2.status);
                setValueD3(seats.D3.status);
                setValueD4(seats.D4.status);
                setValueD5(seats.D5.status);
                setValueD6(seats.D6.status);
                setValueD7(seats.D7.status);
                setValueD8(seats.D8.status);

                //Retrieved seat id from database, if the status if reserved, seat id is same on the users id
                setUserA1(seats.A1.user);
                setUserA2(seats.A2.user);
                setUserA3(seats.A3.user);
                setUserA4(seats.A4.user);
                setUserA5(seats.A5.user);
                setUserA6(seats.A6.user);
                setUserA7(seats.A7.user);
                setUserA8(seats.A8.user);

                setUserB1(seats.B1.user);
                setUserB2(seats.B2.user);
                setUserB3(seats.B3.user);
                setUserB4(seats.B4.user);
                setUserB5(seats.B5.user);
                setUserB6(seats.B6.user);
                setUserB7(seats.B7.user);
                setUserB8(seats.B8.user);

                setUserC1(seats.C1.user);
                setUserC2(seats.C2.user);
                setUserC3(seats.C3.user);
                setUserC4(seats.C4.user);
                setUserC5(seats.C5.user);
                setUserC6(seats.C6.user);
                setUserC7(seats.C7.user);
                setUserC8(seats.C8.user);

                setUserD1(seats.D1.user);
                setUserD2(seats.D2.user);
                setUserD3(seats.D3.user);
                setUserD4(seats.D4.user);
                setUserD5(seats.D5.user);
                setUserD6(seats.D6.user);
                setUserD7(seats.D7.user);
                setUserD8(seats.D8.user);
            }
        }
    }, [dispatch, seats]);

    if (
        valueA1 === 'reserved' &&
        valueA2 === 'reserved' &&
        valueA3 === 'reserved' &&
        valueA4 === 'reserved' &&
        valueA5 === 'reserved' &&
        valueA6 === 'reserved' &&
        valueA7 === 'reserved' &&
        valueA8 === 'reserved' &&
        valueB1 === 'reserved' &&
        valueB2 === 'reserved' &&
        valueB3 === 'reserved' &&
        valueB4 === 'reserved' &&
        valueB5 === 'reserved' &&
        valueB6 === 'reserved' &&
        valueB7 === 'reserved' &&
        valueB8 === 'reserved' &&
        valueC1 === 'reserved' &&
        valueC2 === 'reserved' &&
        valueC3 === 'reserved' &&
        valueC4 === 'reserved' &&
        valueC5 === 'reserved' &&
        valueC6 === 'reserved' &&
        valueC7 === 'reserved' &&
        valueC8 === 'reserved' &&
        valueD1 === 'reserved' &&
        valueD2 === 'reserved' &&
        valueD3 === 'reserved' &&
        valueD4 === 'reserved' &&
        valueD5 === 'reserved' &&
        valueD6 === 'reserved' &&
        valueD7 === 'reserved' &&
        valueD8 === 'reserved'
    ) {
        flag += 1;
        alert('No available seats for this movie');
    }

    //Seat button Handlers

    //1st seat row
    const submitHandlerA1 = (e) => {
        e.preventDefault();
        setClickA1(true);
        setUserA1(userInfo._id);
        setValueA1('reserved');
    };

    const submitHandlerA2 = (e) => {
        e.preventDefault();
        setClickA2(true);
        setUserA2(userInfo._id);
        setValueA2('reserved');
    };

    const submitHandlerA3 = (e) => {
        e.preventDefault();
        setClickA3(true);
        setUserA3(userInfo._id);
        setValueA3('reserved');
    };

    const submitHandlerA4 = (e) => {
        e.preventDefault();
        setClickA4(true);
        setUserA4(userInfo._id);
        setValueA4('reserved');
    };

    const submitHandlerA5 = (e) => {
        e.preventDefault();
        setClickA5(true);
        setUserA5(userInfo._id);
        setValueA5('reserved');
    };

    const submitHandlerA6 = (e) => {
        e.preventDefault();
        setClickA6(true);
        setUserA6(userInfo._id);
        setValueA6('reserved');
    };

    const submitHandlerA7 = (e) => {
        e.preventDefault();
        setClickA7(true);
        setUserA7(userInfo._id);
        setValueA7('reserved');
    };

    const submitHandlerA8 = (e) => {
        e.preventDefault();
        setClickA8(true);
        setUserA8(userInfo._id);
        setValueA8('reserved');
    };

    //2nd seat row
    const submitHandlerB1 = (e) => {
        e.preventDefault();
        setClickB1(true);
        setUserB1(userInfo._id);
        setValueB1('reserved');
    };

    const submitHandlerB2 = (e) => {
        e.preventDefault();
        setClickB2(true);
        setUserB2(userInfo._id);
        setValueB2('reserved');
    };

    const submitHandlerB3 = (e) => {
        e.preventDefault();
        setClickB3(true);
        setUserB3(userInfo._id);
        setValueB3('reserved');
    };

    const submitHandlerB4 = (e) => {
        e.preventDefault();
        setClickB4(true);
        setUserB4(userInfo._id);
        setValueB4('reserved');
    };

    const submitHandlerB5 = (e) => {
        e.preventDefault();
        setClickB5(true);
        setUserB5(userInfo._id);
        setValueB5('reserved');
    };

    const submitHandlerB6 = (e) => {
        e.preventDefault();
        setClickB6(true);
        setUserB6(userInfo._id);
        setValueB6('reserved');
    };

    const submitHandlerB7 = (e) => {
        e.preventDefault();
        setClickB7(true);
        setUserB7(userInfo._id);
        setValueB7('reserved');
    };

    const submitHandlerB8 = (e) => {
        e.preventDefault();
        setClickB8(true);
        setUserB8(userInfo._id);
        setValueB8('reserved');
    };

    //3rd seat row
    const submitHandlerC1 = (e) => {
        e.preventDefault();
        setClickC1(true);
        setUserC1(userInfo._id);
        setValueC1('reserved');
    };

    const submitHandlerC2 = (e) => {
        e.preventDefault();
        setClickC2(true);
        setUserC2(userInfo._id);
        setValueC2('reserved');
    };

    const submitHandlerC3 = (e) => {
        e.preventDefault();
        setClickC3(true);
        setUserC3(userInfo._id);
        setValueC3('reserved');
    };

    const submitHandlerC4 = (e) => {
        e.preventDefault();
        setClickC4(true);
        setUserC4(userInfo._id);
        setValueC4('reserved');
    };

    const submitHandlerC5 = (e) => {
        e.preventDefault();
        setClickC5(true);
        setUserC5(userInfo._id);
        setValueC5('reserved');
    };

    const submitHandlerC6 = (e) => {
        e.preventDefault();
        setClickC6(true);
        setUserC6(userInfo._id);
        setValueC6('reserved');
    };

    const submitHandlerC7 = (e) => {
        e.preventDefault();
        setClickC7(true);
        setUserC7(userInfo._id);
        setValueC7('reserved');
    };

    const submitHandlerC8 = (e) => {
        e.preventDefault();
        setClickC8(true);
        setUserC8(userInfo._id);
        setValueC8('reserved');
    };

    //4th seat row
    const submitHandlerD1 = (e) => {
        e.preventDefault();
        setClickD1(true);
        setUserD1(userInfo._id);
        setValueD1('reserved');
    };

    const submitHandlerD2 = (e) => {
        e.preventDefault();
        setClickD2(true);
        setUserD2(userInfo._id);
        setValueD2('reserved');
    };

    const submitHandlerD3 = (e) => {
        e.preventDefault();
        setClickD3(true);
        setUserD3(userInfo._id);
        setValueD3('reserved');
    };

    const submitHandlerD4 = (e) => {
        e.preventDefault();
        setClickD4(true);
        setUserD4(userInfo._id);
        setValueD4('reserved');
    };

    const submitHandlerD5 = (e) => {
        e.preventDefault();
        setClickD5(true);
        setUserD5(userInfo._id);
        setValueD5('reserved');
    };

    const submitHandlerD6 = (e) => {
        e.preventDefault();
        setClickD6(true);
        setUserD6(userInfo._id);
        setValueD6('reserved');
    };

    const submitHandlerD7 = (e) => {
        e.preventDefault();
        setClickD7(true);
        setUserD7(userInfo._id);
        setValueD7('reserved');
    };

    const submitHandlerD8 = (e) => {
        e.preventDefault();
        setClickD8(true);
        setUserD8(userInfo._id);
        setValueD8('reserved');
    };

    const A1 = ' A1';
    const A2 = ' A2';
    const A3 = ' A3';
    const A4 = ' A4';
    const A5 = ' A5';
    const A6 = ' A6';
    const A7 = ' A7';
    const A8 = ' A8';

    const B1 = ' B1';
    const B2 = ' B2';
    const B3 = ' B3';
    const B4 = ' B4';
    const B5 = ' B5';
    const B6 = ' B6';
    const B7 = ' B7';
    const B8 = ' B8';

    const C1 = ' C1';
    const C2 = ' C2';
    const C3 = ' C3';
    const C4 = ' C4';
    const C5 = ' C5';
    const C6 = ' C6';
    const C7 = ' C7';
    const C8 = ' C8';

    const D1 = ' D1';
    const D2 = ' D2';
    const D3 = ' D3';
    const D4 = ' D4';
    const D5 = ' D5';
    const D6 = ' D6';
    const D7 = ' D7';
    const D8 = ' D8';

    let show = '';
    let prize = 250;
    let total = 0;

    const submitDataHandler = (e) => {
        e.preventDefault();
        if (
            clickA1 === false &&
            clickA2 === false &&
            clickA3 === false &&
            clickA4 === false &&
            clickA5 === false &&
            clickA6 === false &&
            clickA7 === false &&
            clickA8 === false &&
            clickB1 === false &&
            clickB2 === false &&
            clickB3 === false &&
            clickB4 === false &&
            clickB5 === false &&
            clickB6 === false &&
            clickB7 === false &&
            clickB8 === false &&
            clickC1 === false &&
            clickC2 === false &&
            clickC3 === false &&
            clickC4 === false &&
            clickC5 === false &&
            clickC6 === false &&
            clickC7 === false &&
            clickC8 === false &&
            clickD1 === false &&
            clickD2 === false &&
            clickD3 === false &&
            clickD4 === false &&
            clickD5 === false &&
            clickD6 === false &&
            clickD7 === false &&
            clickD8 === false
        ) {
            alert('Please select seats');
        } else {
            dispatch(
                updateSeat({
                    A1: { status: valueA1, user: userA1 },
                    A2: { status: valueA2, user: userA2 },
                    A3: { status: valueA3, user: userA3 },
                    A4: { status: valueA4, user: userA4 },
                    A5: { status: valueA5, user: userA5 },
                    A6: { status: valueA6, user: userA6 },
                    A7: { status: valueA7, user: userA7 },
                    A8: { status: valueA8, user: userA8 },
                    B1: { status: valueB1, user: userB1 },
                    B2: { status: valueB2, user: userB2 },
                    B3: { status: valueB3, user: userB3 },
                    B4: { status: valueB4, user: userB4 },
                    B5: { status: valueB5, user: userB5 },
                    B6: { status: valueB6, user: userB6 },
                    B7: { status: valueB7, user: userB7 },
                    B8: { status: valueB8, user: userB8 },
                    C1: { status: valueC1, user: userC1 },
                    C2: { status: valueC2, user: userC2 },
                    C3: { status: valueC3, user: userC3 },
                    C4: { status: valueC4, user: userC4 },
                    C5: { status: valueC5, user: userC5 },
                    C6: { status: valueC6, user: userC6 },
                    C7: { status: valueC7, user: userC7 },
                    C8: { status: valueC8, user: userC8 },
                    D1: { status: valueD1, user: userD1 },
                    D2: { status: valueD2, user: userD2 },
                    D3: { status: valueD3, user: userD3 },
                    D4: { status: valueD4, user: userD4 },
                    D5: { status: valueD5, user: userD5 },
                    D6: { status: valueD6, user: userD6 },
                    D7: { status: valueD7, user: userD7 },
                    D8: { status: valueD8, user: userD8 },
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
                                                            disabled
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
                                                </div>{' '}
                                                <div>
                                                    {seats?.A2?.status !==
                                                    'available' ? (
                                                        <Button
                                                            style={
                                                                theme.available
                                                            }
                                                            className='seat-guide'
                                                            id='ads'
                                                            disabled
                                                        >
                                                            <span className='seat-place'>
                                                                A2
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <div>
                                                            {clickA2 ===
                                                            true ? (
                                                                (total += prize) &&
                                                                (show += A2) && (
                                                                    <Button
                                                                        style={
                                                                            theme.select
                                                                        }
                                                                        className='seat-guide'
                                                                        id='ads'
                                                                    >
                                                                        <span className='seat-place'>
                                                                            {A2}
                                                                        </span>
                                                                    </Button>
                                                                )
                                                            ) : (
                                                                <Button
                                                                    className='seat-guide'
                                                                    id='ads'
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setValueA2(
                                                                            'reserved'
                                                                        )
                                                                    }
                                                                    onClick={
                                                                        submitHandlerA2
                                                                    }
                                                                >
                                                                    <span className='seat-place'>
                                                                        A2
                                                                    </span>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    {' '}
                                                    {seats?.A3?.status !==
                                                    'available' ? (
                                                        <Button
                                                            style={
                                                                theme.available
                                                            }
                                                            className='seat-guide'
                                                            id='ads'
                                                            disabled
                                                        >
                                                            <span className='seat-place'>
                                                                A3
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <div>
                                                            {clickA3 ===
                                                            true ? (
                                                                (total += prize) &&
                                                                (show += A3) && (
                                                                    <Button
                                                                        style={
                                                                            theme.select
                                                                        }
                                                                        className='seat-guide'
                                                                        id='ads'
                                                                    >
                                                                        <span className='seat-place'>
                                                                            {A3}
                                                                        </span>
                                                                    </Button>
                                                                )
                                                            ) : (
                                                                <Button
                                                                    className='seat-guide'
                                                                    id='ads'
                                                                    onClick={
                                                                        submitHandlerA3
                                                                    }
                                                                >
                                                                    <span className='seat-place'>
                                                                        A3
                                                                    </span>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    {' '}
                                                    {seats?.A4?.status !==
                                                    'available' ? (
                                                        <Button
                                                            style={
                                                                theme.available
                                                            }
                                                            className='seat-guide'
                                                            id='ads'
                                                            disabled
                                                        >
                                                            <span className='seat-place'>
                                                                A4
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <div>
                                                            {clickA4 ===
                                                            true ? (
                                                                (total += prize) &&
                                                                (show += A4) && (
                                                                    <Button
                                                                        style={
                                                                            theme.select
                                                                        }
                                                                        className='seat-guide'
                                                                        id='ads'
                                                                    >
                                                                        <span className='seat-place'>
                                                                            {A4}
                                                                        </span>
                                                                    </Button>
                                                                )
                                                            ) : (
                                                                <Button
                                                                    className='seat-guide'
                                                                    id='ads'
                                                                    onClick={
                                                                        submitHandlerA4
                                                                    }
                                                                >
                                                                    <span className='seat-place'>
                                                                        A4
                                                                    </span>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    {' '}
                                                    {seats?.A5?.status !==
                                                    'available' ? (
                                                        <Button
                                                            style={
                                                                theme.available
                                                            }
                                                            className='seat-guide'
                                                            id='ads'
                                                            disabled
                                                        >
                                                            <span className='seat-place'>
                                                                A5
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <div>
                                                            {clickA5 ===
                                                            true ? (
                                                                (total += prize) &&
                                                                (show += A5) && (
                                                                    <Button
                                                                        style={
                                                                            theme.select
                                                                        }
                                                                        className='seat-guide'
                                                                        id='ads'
                                                                    >
                                                                        <span className='seat-place'>
                                                                            {A5}
                                                                        </span>
                                                                    </Button>
                                                                )
                                                            ) : (
                                                                <Button
                                                                    className='seat-guide'
                                                                    id='ads'
                                                                    onClick={
                                                                        submitHandlerA5
                                                                    }
                                                                >
                                                                    <span className='seat-place'>
                                                                        A5
                                                                    </span>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    {' '}
                                                    {seats?.A6?.status !==
                                                    'available' ? (
                                                        <Button
                                                            style={
                                                                theme.available
                                                            }
                                                            className='seat-guide'
                                                            id='ads'
                                                            disabled
                                                        >
                                                            <span className='seat-place'>
                                                                A6
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <div>
                                                            {clickA6 ===
                                                            true ? (
                                                                (total += prize) &&
                                                                (show += A6) && (
                                                                    <Button
                                                                        style={
                                                                            theme.select
                                                                        }
                                                                        className='seat-guide'
                                                                        id='ads'
                                                                    >
                                                                        <span className='seat-place'>
                                                                            {A6}
                                                                        </span>
                                                                    </Button>
                                                                )
                                                            ) : (
                                                                <Button
                                                                    className='seat-guide'
                                                                    id='ads'
                                                                    onClick={
                                                                        submitHandlerA6
                                                                    }
                                                                >
                                                                    <span className='seat-place'>
                                                                        A6
                                                                    </span>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    {' '}
                                                    {seats?.A7?.status !==
                                                    'available' ? (
                                                        <Button
                                                            style={
                                                                theme.available
                                                            }
                                                            className='seat-guide'
                                                            id='ads'
                                                            disabled
                                                        >
                                                            <span className='seat-place'>
                                                                A7
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <div>
                                                            {clickA7 ===
                                                            true ? (
                                                                (total += prize) &&
                                                                (show += A7) && (
                                                                    <Button
                                                                        style={
                                                                            theme.select
                                                                        }
                                                                        className='seat-guide'
                                                                        id='ads'
                                                                    >
                                                                        <span className='seat-place'>
                                                                            {A7}
                                                                        </span>
                                                                    </Button>
                                                                )
                                                            ) : (
                                                                <Button
                                                                    className='seat-guide'
                                                                    id='ads'
                                                                    onClick={
                                                                        submitHandlerA7
                                                                    }
                                                                >
                                                                    <span className='seat-place'>
                                                                        A7
                                                                    </span>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    {' '}
                                                    {seats?.A8?.status !==
                                                    'available' ? (
                                                        <Button
                                                            style={
                                                                theme.available
                                                            }
                                                            className='seat-guide'
                                                            id='ads'
                                                            disabled
                                                        >
                                                            <span className='seat-place'>
                                                                A8
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <div>
                                                            {clickA8 ===
                                                            true ? (
                                                                (total += prize) &&
                                                                (show += A8) && (
                                                                    <Button
                                                                        style={
                                                                            theme.select
                                                                        }
                                                                        className='seat-guide'
                                                                        id='ads'
                                                                    >
                                                                        <span className='seat-place'>
                                                                            {A8}
                                                                        </span>
                                                                    </Button>
                                                                )
                                                            ) : (
                                                                <Button
                                                                    className='seat-guide'
                                                                    id='ads'
                                                                    onClick={
                                                                        submitHandlerA8
                                                                    }
                                                                >
                                                                    <span className='seat-place'>
                                                                        A8
                                                                    </span>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className='row-seat'>
                                            <Col className='seat-row'>
                                                <div>
                                                    {seats?.B1?.status !==
                                                    'available' ? (
                                                        <Button
                                                            style={
                                                                theme.available
                                                            }
                                                            className='seat-guide'
                                                            id='ads'
                                                            disabled
                                                        >
                                                            <span className='seat-place'>
                                                                B1
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <div>
                                                            {clickB1 ===
                                                            true ? (
                                                                (total += prize) &&
                                                                (show += B1) && (
                                                                    <Button
                                                                        style={
                                                                            theme.select
                                                                        }
                                                                        className='seat-guide'
                                                                        id='ads'
                                                                    >
                                                                        <span className='seat-place'>
                                                                            {B1}
                                                                        </span>
                                                                    </Button>
                                                                )
                                                            ) : (
                                                                <Button
                                                                    className='seat-guide'
                                                                    id='ads'
                                                                    onClick={
                                                                        submitHandlerB1
                                                                    }
                                                                >
                                                                    <span className='seat-place'>
                                                                        B1
                                                                    </span>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>{' '}
                                                <div>
                                                    {seats?.B2?.status !==
                                                    'available' ? (
                                                        <Button
                                                            style={
                                                                theme.available
                                                            }
                                                            className='seat-guide'
                                                            id='ads'
                                                            disabled
                                                        >
                                                            <span className='seat-place'>
                                                                B2
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <div>
                                                            {clickB2 ===
                                                            true ? (
                                                                (total += prize) &&
                                                                (show += B2) && (
                                                                    <Button
                                                                        style={
                                                                            theme.select
                                                                        }
                                                                        className='seat-guide'
                                                                        id='ads'
                                                                    >
                                                                        <span className='seat-place'>
                                                                            {B2}
                                                                        </span>
                                                                    </Button>
                                                                )
                                                            ) : (
                                                                <Button
                                                                    className='seat-guide'
                                                                    id='ads'
                                                                    onClick={
                                                                        submitHandlerB2
                                                                    }
                                                                >
                                                                    <span className='seat-place'>
                                                                        B2
                                                                    </span>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    {' '}
                                                    {seats?.B3?.status !==
                                                    'available' ? (
                                                        <Button
                                                            style={
                                                                theme.available
                                                            }
                                                            className='seat-guide'
                                                            id='ads'
                                                            disabled
                                                        >
                                                            <span className='seat-place'>
                                                                B3
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <div>
                                                            {clickB3 ===
                                                            true ? (
                                                                (total += prize) &&
                                                                (show += B3) && (
                                                                    <Button
                                                                        style={
                                                                            theme.select
                                                                        }
                                                                        className='seat-guide'
                                                                        id='ads'
                                                                    >
                                                                        <span className='seat-place'>
                                                                            {B3}
                                                                        </span>
                                                                    </Button>
                                                                )
                                                            ) : (
                                                                <Button
                                                                    className='seat-guide'
                                                                    id='ads'
                                                                    onClick={
                                                                        submitHandlerB3
                                                                    }
                                                                >
                                                                    <span className='seat-place'>
                                                                        B3
                                                                    </span>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    {' '}
                                                    {seats?.B4?.status !==
                                                    'available' ? (
                                                        <Button
                                                            style={
                                                                theme.available
                                                            }
                                                            className='seat-guide'
                                                            id='ads'
                                                            disabled
                                                        >
                                                            <span className='seat-place'>
                                                                B4
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <div>
                                                            {clickB4 ===
                                                            true ? (
                                                                (total += prize) &&
                                                                (show += B4) && (
                                                                    <Button
                                                                        style={
                                                                            theme.select
                                                                        }
                                                                        className='seat-guide'
                                                                        id='ads'
                                                                    >
                                                                        <span className='seat-place'>
                                                                            {B4}
                                                                        </span>
                                                                    </Button>
                                                                )
                                                            ) : (
                                                                <Button
                                                                    className='seat-guide'
                                                                    id='ads'
                                                                    onClick={
                                                                        submitHandlerB4
                                                                    }
                                                                >
                                                                    <span className='seat-place'>
                                                                        B4
                                                                    </span>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    {' '}
                                                    {seats?.B5?.status !==
                                                    'available' ? (
                                                        <Button
                                                            style={
                                                                theme.available
                                                            }
                                                            className='seat-guide'
                                                            id='ads'
                                                            disabled
                                                        >
                                                            <span className='seat-place'>
                                                                B5
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <div>
                                                            {clickB5 ===
                                                            true ? (
                                                                (total += prize) &&
                                                                (show += B5) && (
                                                                    <Button
                                                                        style={
                                                                            theme.select
                                                                        }
                                                                        className='seat-guide'
                                                                        id='ads'
                                                                    >
                                                                        <span className='seat-place'>
                                                                            {B5}
                                                                        </span>
                                                                    </Button>
                                                                )
                                                            ) : (
                                                                <Button
                                                                    className='seat-guide'
                                                                    id='ads'
                                                                    onClick={
                                                                        submitHandlerB5
                                                                    }
                                                                >
                                                                    <span className='seat-place'>
                                                                        B5
                                                                    </span>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    {' '}
                                                    {seats?.B6?.status !==
                                                    'available' ? (
                                                        <Button
                                                            style={
                                                                theme.available
                                                            }
                                                            className='seat-guide'
                                                            id='ads'
                                                            disabled
                                                        >
                                                            <span className='seat-place'>
                                                                B6
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <div>
                                                            {clickB6 ===
                                                            true ? (
                                                                (total += prize) &&
                                                                (show += B6) && (
                                                                    <Button
                                                                        style={
                                                                            theme.select
                                                                        }
                                                                        className='seat-guide'
                                                                        id='ads'
                                                                    >
                                                                        <span className='seat-place'>
                                                                            {B6}
                                                                        </span>
                                                                    </Button>
                                                                )
                                                            ) : (
                                                                <Button
                                                                    className='seat-guide'
                                                                    id='ads'
                                                                    onClick={
                                                                        submitHandlerB6
                                                                    }
                                                                >
                                                                    <span className='seat-place'>
                                                                        B6
                                                                    </span>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    {' '}
                                                    {seats?.B7?.status !==
                                                    'available' ? (
                                                        <Button
                                                            style={
                                                                theme.available
                                                            }
                                                            className='seat-guide'
                                                            id='ads'
                                                            disabled
                                                        >
                                                            <span className='seat-place'>
                                                                B7
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <div>
                                                            {clickB7 ===
                                                            true ? (
                                                                (total += prize) &&
                                                                (show += B7) && (
                                                                    <Button
                                                                        style={
                                                                            theme.select
                                                                        }
                                                                        className='seat-guide'
                                                                        id='ads'
                                                                    >
                                                                        <span className='seat-place'>
                                                                            {B7}
                                                                        </span>
                                                                    </Button>
                                                                )
                                                            ) : (
                                                                <Button
                                                                    className='seat-guide'
                                                                    id='ads'
                                                                    onClick={
                                                                        submitHandlerB7
                                                                    }
                                                                >
                                                                    <span className='seat-place'>
                                                                        B7
                                                                    </span>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    {' '}
                                                    {seats?.B8?.status !==
                                                    'available' ? (
                                                        <Button
                                                            style={
                                                                theme.available
                                                            }
                                                            className='seat-guide'
                                                            id='ads'
                                                            disabled
                                                        >
                                                            <span className='seat-place'>
                                                                B8
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <div>
                                                            {clickB8 ===
                                                            true ? (
                                                                (total += prize) &&
                                                                (show += B8) && (
                                                                    <Button
                                                                        style={
                                                                            theme.select
                                                                        }
                                                                        className='seat-guide'
                                                                        id='ads'
                                                                    >
                                                                        <span className='seat-place'>
                                                                            {B8}
                                                                        </span>
                                                                    </Button>
                                                                )
                                                            ) : (
                                                                <Button
                                                                    className='seat-guide'
                                                                    id='ads'
                                                                    onClick={
                                                                        submitHandlerB8
                                                                    }
                                                                >
                                                                    <span className='seat-place'>
                                                                        B8
                                                                    </span>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row className='row-seat'>
                                            <Col className='seat-row'>
                                                <div>
                                                    {seats?.C1?.status !==
                                                    'available' ? (
                                                        <Button
                                                            style={
                                                                theme.available
                                                            }
                                                            className='seat-guide'
                                                            id='ads'
                                                            disabled
                                                        >
                                                            <span className='seat-place'>
                                                                C1
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <div>
                                                            {clickC1 ===
                                                            true ? (
                                                                (total += prize) &&
                                                                (show += C1) && (
                                                                    <Button
                                                                        style={
                                                                            theme.select
                                                                        }
                                                                        className='seat-guide'
                                                                        id='ads'
                                                                    >
                                                                        <span className='seat-place'>
                                                                            {C1}
                                                                        </span>
                                                                    </Button>
                                                                )
                                                            ) : (
                                                                <Button
                                                                    className='seat-guide'
                                                                    id='ads'
                                                                    onClick={
                                                                        submitHandlerC1
                                                                    }
                                                                >
                                                                    <span className='seat-place'>
                                                                        C1
                                                                    </span>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>{' '}
                                                <div>
                                                    {seats?.C2?.status !==
                                                    'available' ? (
                                                        <Button
                                                            style={
                                                                theme.available
                                                            }
                                                            className='seat-guide'
                                                            id='ads'
                                                            disabled
                                                        >
                                                            <span className='seat-place'>
                                                                C2
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <div>
                                                            {clickC2 ===
                                                            true ? (
                                                                (total += prize) &&
                                                                (show += C2) && (
                                                                    <Button
                                                                        style={
                                                                            theme.select
                                                                        }
                                                                        className='seat-guide'
                                                                        id='ads'
                                                                    >
                                                                        <span className='seat-place'>
                                                                            {C2}
                                                                        </span>
                                                                    </Button>
                                                                )
                                                            ) : (
                                                                <Button
                                                                    className='seat-guide'
                                                                    id='ads'
                                                                    onClick={
                                                                        submitHandlerC2
                                                                    }
                                                                >
                                                                    <span className='seat-place'>
                                                                        C2
                                                                    </span>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    {' '}
                                                    {seats?.C3?.status !==
                                                    'available' ? (
                                                        <Button
                                                            style={
                                                                theme.available
                                                            }
                                                            className='seat-guide'
                                                            id='ads'
                                                            disabled
                                                        >
                                                            <span className='seat-place'>
                                                                C3
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <div>
                                                            {clickC3 ===
                                                            true ? (
                                                                (total += prize) &&
                                                                (show += C3) && (
                                                                    <Button
                                                                        style={
                                                                            theme.select
                                                                        }
                                                                        className='seat-guide'
                                                                        id='ads'
                                                                    >
                                                                        <span className='seat-place'>
                                                                            {C3}
                                                                        </span>
                                                                    </Button>
                                                                )
                                                            ) : (
                                                                <Button
                                                                    className='seat-guide'
                                                                    id='ads'
                                                                    onClick={
                                                                        submitHandlerC3
                                                                    }
                                                                >
                                                                    <span className='seat-place'>
                                                                        C3
                                                                    </span>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    {' '}
                                                    {seats?.C4?.status !==
                                                    'available' ? (
                                                        <Button
                                                            style={
                                                                theme.available
                                                            }
                                                            className='seat-guide'
                                                            id='ads'
                                                            disabled
                                                        >
                                                            <span className='seat-place'>
                                                                C4
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <div>
                                                            {clickC4 ===
                                                            true ? (
                                                                (total += prize) &&
                                                                (show += C4) && (
                                                                    <Button
                                                                        style={
                                                                            theme.select
                                                                        }
                                                                        className='seat-guide'
                                                                        id='ads'
                                                                    >
                                                                        <span className='seat-place'>
                                                                            {C4}
                                                                        </span>
                                                                    </Button>
                                                                )
                                                            ) : (
                                                                <Button
                                                                    className='seat-guide'
                                                                    id='ads'
                                                                    onClick={
                                                                        submitHandlerC4
                                                                    }
                                                                >
                                                                    <span className='seat-place'>
                                                                        C4
                                                                    </span>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    {' '}
                                                    {seats?.C5?.status !==
                                                    'available' ? (
                                                        <Button
                                                            style={
                                                                theme.available
                                                            }
                                                            className='seat-guide'
                                                            id='ads'
                                                            disabled
                                                        >
                                                            <span className='seat-place'>
                                                                C5
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <div>
                                                            {clickC5 ===
                                                            true ? (
                                                                (total += prize) &&
                                                                (show += C5) && (
                                                                    <Button
                                                                        style={
                                                                            theme.select
                                                                        }
                                                                        className='seat-guide'
                                                                        id='ads'
                                                                    >
                                                                        <span className='seat-place'>
                                                                            {C5}
                                                                        </span>
                                                                    </Button>
                                                                )
                                                            ) : (
                                                                <Button
                                                                    className='seat-guide'
                                                                    id='ads'
                                                                    onClick={
                                                                        submitHandlerC5
                                                                    }
                                                                >
                                                                    <span className='seat-place'>
                                                                        C5
                                                                    </span>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    {' '}
                                                    {seats?.C6?.status !==
                                                    'available' ? (
                                                        <Button
                                                            style={
                                                                theme.available
                                                            }
                                                            className='seat-guide'
                                                            id='ads'
                                                            disabled
                                                        >
                                                            <span className='seat-place'>
                                                                C6
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <div>
                                                            {clickC6 ===
                                                            true ? (
                                                                (total += prize) &&
                                                                (show += C6) && (
                                                                    <Button
                                                                        style={
                                                                            theme.select
                                                                        }
                                                                        className='seat-guide'
                                                                        id='ads'
                                                                    >
                                                                        <span className='seat-place'>
                                                                            {C6}
                                                                        </span>
                                                                    </Button>
                                                                )
                                                            ) : (
                                                                <Button
                                                                    className='seat-guide'
                                                                    id='ads'
                                                                    onClick={
                                                                        submitHandlerC6
                                                                    }
                                                                >
                                                                    <span className='seat-place'>
                                                                        C6
                                                                    </span>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    {' '}
                                                    {seats?.C7?.status !==
                                                    'available' ? (
                                                        <Button
                                                            style={
                                                                theme.available
                                                            }
                                                            className='seat-guide'
                                                            id='ads'
                                                            disabled
                                                        >
                                                            <span className='seat-place'>
                                                                C7
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <div>
                                                            {clickC7 ===
                                                            true ? (
                                                                (total += prize) &&
                                                                (show += C7) && (
                                                                    <Button
                                                                        style={
                                                                            theme.select
                                                                        }
                                                                        className='seat-guide'
                                                                        id='ads'
                                                                    >
                                                                        <span className='seat-place'>
                                                                            {C7}
                                                                        </span>
                                                                    </Button>
                                                                )
                                                            ) : (
                                                                <Button
                                                                    className='seat-guide'
                                                                    id='ads'
                                                                    onClick={
                                                                        submitHandlerC7
                                                                    }
                                                                >
                                                                    <span className='seat-place'>
                                                                        C7
                                                                    </span>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    {' '}
                                                    {seats?.C8?.status !==
                                                    'available' ? (
                                                        <Button
                                                            style={
                                                                theme.available
                                                            }
                                                            className='seat-guide'
                                                            id='ads'
                                                            disabled
                                                        >
                                                            <span className='seat-place'>
                                                                C8
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <div>
                                                            {clickC8 ===
                                                            true ? (
                                                                (total += prize) &&
                                                                (show += C8) && (
                                                                    <Button
                                                                        style={
                                                                            theme.select
                                                                        }
                                                                        className='seat-guide'
                                                                        id='ads'
                                                                    >
                                                                        <span className='seat-place'>
                                                                            {C8}
                                                                        </span>
                                                                    </Button>
                                                                )
                                                            ) : (
                                                                <Button
                                                                    className='seat-guide'
                                                                    id='ads'
                                                                    onClick={
                                                                        submitHandlerC8
                                                                    }
                                                                >
                                                                    <span className='seat-place'>
                                                                        C8
                                                                    </span>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row className='row-seat'>
                                            <Col className='seat-row'>
                                                <div>
                                                    {seats?.D1?.status !==
                                                    'available' ? (
                                                        <Button
                                                            style={
                                                                theme.available
                                                            }
                                                            className='seat-guide'
                                                            id='ads'
                                                            disabled
                                                        >
                                                            <span className='seat-place'>
                                                                D1
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <div>
                                                            {clickD1 ===
                                                            true ? (
                                                                (total += prize) &&
                                                                (show += D1) && (
                                                                    <Button
                                                                        style={
                                                                            theme.select
                                                                        }
                                                                        className='seat-guide'
                                                                        id='ads'
                                                                    >
                                                                        <span className='seat-place'>
                                                                            {D1}
                                                                        </span>
                                                                    </Button>
                                                                )
                                                            ) : (
                                                                <Button
                                                                    className='seat-guide'
                                                                    id='ads'
                                                                    onClick={
                                                                        submitHandlerD1
                                                                    }
                                                                >
                                                                    <span className='seat-place'>
                                                                        D1
                                                                    </span>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>{' '}
                                                <div>
                                                    {seats?.D2?.status !==
                                                    'available' ? (
                                                        <Button
                                                            style={
                                                                theme.available
                                                            }
                                                            className='seat-guide'
                                                            id='ads'
                                                            disabled
                                                        >
                                                            <span className='seat-place'>
                                                                D2
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <div>
                                                            {clickD2 ===
                                                            true ? (
                                                                (total += prize) &&
                                                                (show += D2) && (
                                                                    <Button
                                                                        style={
                                                                            theme.select
                                                                        }
                                                                        className='seat-guide'
                                                                        id='ads'
                                                                    >
                                                                        <span className='seat-place'>
                                                                            {D2}
                                                                        </span>
                                                                    </Button>
                                                                )
                                                            ) : (
                                                                <Button
                                                                    className='seat-guide'
                                                                    id='ads'
                                                                    onClick={
                                                                        submitHandlerD2
                                                                    }
                                                                >
                                                                    <span className='seat-place'>
                                                                        D2
                                                                    </span>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    {' '}
                                                    {seats?.D3?.status !==
                                                    'available' ? (
                                                        <Button
                                                            style={
                                                                theme.available
                                                            }
                                                            className='seat-guide'
                                                            id='ads'
                                                            disabled
                                                        >
                                                            <span className='seat-place'>
                                                                D3
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <div>
                                                            {clickD3 ===
                                                            true ? (
                                                                (total += prize) &&
                                                                (show += D3) && (
                                                                    <Button
                                                                        style={
                                                                            theme.select
                                                                        }
                                                                        className='seat-guide'
                                                                        id='ads'
                                                                    >
                                                                        <span className='seat-place'>
                                                                            {D3}
                                                                        </span>
                                                                    </Button>
                                                                )
                                                            ) : (
                                                                <Button
                                                                    className='seat-guide'
                                                                    id='ads'
                                                                    onClick={
                                                                        submitHandlerD3
                                                                    }
                                                                >
                                                                    <span className='seat-place'>
                                                                        D3
                                                                    </span>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    {' '}
                                                    {seats?.D4?.status !==
                                                    'available' ? (
                                                        <Button
                                                            style={
                                                                theme.available
                                                            }
                                                            className='seat-guide'
                                                            id='ads'
                                                            disabled
                                                        >
                                                            <span className='seat-place'>
                                                                D4
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <div>
                                                            {clickD4 ===
                                                            true ? (
                                                                (total += prize) &&
                                                                (show += D4) && (
                                                                    <Button
                                                                        style={
                                                                            theme.select
                                                                        }
                                                                        className='seat-guide'
                                                                        id='ads'
                                                                    >
                                                                        <span className='seat-place'>
                                                                            {D4}
                                                                        </span>
                                                                    </Button>
                                                                )
                                                            ) : (
                                                                <Button
                                                                    className='seat-guide'
                                                                    id='ads'
                                                                    onClick={
                                                                        submitHandlerD4
                                                                    }
                                                                >
                                                                    <span className='seat-place'>
                                                                        D4
                                                                    </span>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    {' '}
                                                    {seats?.D5?.status !==
                                                    'available' ? (
                                                        <Button
                                                            style={
                                                                theme.available
                                                            }
                                                            className='seat-guide'
                                                            id='ads'
                                                            disabled
                                                        >
                                                            <span className='seat-place'>
                                                                D5
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <div>
                                                            {clickD5 ===
                                                            true ? (
                                                                (total += prize) &&
                                                                (show += D5) && (
                                                                    <Button
                                                                        style={
                                                                            theme.select
                                                                        }
                                                                        className='seat-guide'
                                                                        id='ads'
                                                                    >
                                                                        <span className='seat-place'>
                                                                            {D5}
                                                                        </span>
                                                                    </Button>
                                                                )
                                                            ) : (
                                                                <Button
                                                                    className='seat-guide'
                                                                    id='ads'
                                                                    onClick={
                                                                        submitHandlerD5
                                                                    }
                                                                >
                                                                    <span className='seat-place'>
                                                                        D5
                                                                    </span>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    {' '}
                                                    {seats?.D6?.status !==
                                                    'available' ? (
                                                        <Button
                                                            style={
                                                                theme.available
                                                            }
                                                            className='seat-guide'
                                                            id='ads'
                                                            disabled
                                                        >
                                                            <span className='seat-place'>
                                                                D6
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <div>
                                                            {clickD6 ===
                                                            true ? (
                                                                (total += prize) &&
                                                                (show += D6) && (
                                                                    <Button
                                                                        style={
                                                                            theme.select
                                                                        }
                                                                        className='seat-guide'
                                                                        id='ads'
                                                                    >
                                                                        <span className='seat-place'>
                                                                            {D6}
                                                                        </span>
                                                                    </Button>
                                                                )
                                                            ) : (
                                                                <Button
                                                                    className='seat-guide'
                                                                    id='ads'
                                                                    onClick={
                                                                        submitHandlerD6
                                                                    }
                                                                >
                                                                    <span className='seat-place'>
                                                                        D6
                                                                    </span>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    {' '}
                                                    {seats?.D7?.status !==
                                                    'available' ? (
                                                        <Button
                                                            style={
                                                                theme.available
                                                            }
                                                            className='seat-guide'
                                                            id='ads'
                                                            disabled
                                                        >
                                                            <span className='seat-place'>
                                                                D7
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <div>
                                                            {clickD7 ===
                                                            true ? (
                                                                (total += prize) &&
                                                                (show += D7) && (
                                                                    <Button
                                                                        style={
                                                                            theme.select
                                                                        }
                                                                        className='seat-guide'
                                                                        id='ads'
                                                                    >
                                                                        <span className='seat-place'>
                                                                            {D7}
                                                                        </span>
                                                                    </Button>
                                                                )
                                                            ) : (
                                                                <Button
                                                                    className='seat-guide'
                                                                    id='ads'
                                                                    onClick={
                                                                        submitHandlerD7
                                                                    }
                                                                >
                                                                    <span className='seat-place'>
                                                                        D7
                                                                    </span>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    {' '}
                                                    {seats?.D8?.status !==
                                                    'available' ? (
                                                        <Button
                                                            style={
                                                                theme.available
                                                            }
                                                            className='seat-guide'
                                                            id='ads'
                                                            disabled
                                                        >
                                                            <span className='seat-place'>
                                                                D8
                                                            </span>
                                                        </Button>
                                                    ) : (
                                                        <div>
                                                            {clickD8 ===
                                                            true ? (
                                                                (total += prize) &&
                                                                (show += D8) && (
                                                                    <Button
                                                                        style={
                                                                            theme.select
                                                                        }
                                                                        className='seat-guide'
                                                                        id='ads'
                                                                    >
                                                                        <span className='seat-place'>
                                                                            {D8}
                                                                        </span>
                                                                    </Button>
                                                                )
                                                            ) : (
                                                                <Button
                                                                    className='seat-guide'
                                                                    id='ads'
                                                                    onClick={
                                                                        submitHandlerD8
                                                                    }
                                                                >
                                                                    <span className='seat-place'>
                                                                        D8
                                                                    </span>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className='row-seat legend-row'>
                                            <h5>Legend: </h5>
                                            <Col className='seat-row'>
                                                <div className='legend '>
                                                    <Button
                                                        className='legend-available'
                                                        id='ads'
                                                        onClick={
                                                            submitHandlerD3
                                                        }
                                                    >
                                                        <span className='seat-place'></span>
                                                    </Button>
                                                    <span> - Available</span>
                                                </div>
                                                <div className='legend '>
                                                    <Button
                                                        className='legend-select'
                                                        id='ads'
                                                        onClick={
                                                            submitHandlerD3
                                                        }
                                                    >
                                                        <span className='seat-place'></span>
                                                    </Button>
                                                    <span> - Select</span>
                                                </div>
                                                <div className='legend '>
                                                    <Button
                                                        className='legend-reserved'
                                                        id='ads'
                                                        onClick={
                                                            submitHandlerD3
                                                        }
                                                    >
                                                        <span className='seat-place'></span>
                                                    </Button>
                                                    <span> - Reserved</span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm={4} className='mt-4 add-to-cart'>
                                        {show.length !== 0 ? (
                                            <span>
                                                <span className='add-to-cart-seat'>
                                                    Seat:{' '}
                                                    <span className='reserved-seat'>
                                                        {show}
                                                    </span>{' '}
                                                </span>
                                                <br />
                                                <span className='add-to-cart-prize'>
                                                    Movie Ticket:{' '}
                                                    <span>$ 250</span>
                                                </span>
                                                <br />
                                                <span className='add-to-cart-total'>
                                                    Total:{' '}
                                                    <span>
                                                        {'$ '} {total}
                                                    </span>
                                                </span>
                                            </span>
                                        ) : (
                                            <p></p>
                                        )}
                                        <br />
                                        <div className='add-to-cart-button'>
                                            {flag === 0 ? (
                                                <Button
                                                    onClick={submitDataHandler}
                                                >
                                                    Proceed to checkout
                                                </Button>
                                            ) : (
                                                <Button disabled>
                                                    Proceed to checkout
                                                </Button>
                                            )}
                                        </div>
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
