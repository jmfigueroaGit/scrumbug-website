import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Button,
    Col,
    Container,
    Form,
    Image,
    ListGroup,
    Row,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Message from '../../../../components/Message';
import Loader from '../../../../components/Loader';
import { uploadMoviePoster } from '../../../../actions/movieAction';
import {
    MOVIE_DETAILS_RESET,
    MOVIE_UPLOAD_RESET,
    MOVIE_ADD_RESET,
} from '../../../../constants/movieConstant';
const MovieAddPoster = ({ history, match }) => {
    const movieId = match.params.id;

    const [poster, setPoster] = useState('');
    const [banner, setBanner] = useState('');
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const movieAdd = useSelector((state) => state.movieAdd);
    const { loading, error, movieInfo } = movieAdd;

    const movieDetails = useSelector((state) => state.movieDetails);
    const { movie } = movieDetails;

    useEffect(() => {
        if (movieInfo) {
            if (movieInfo._id) {
                setPoster(movieInfo.poster);
                setBanner(movieInfo.banner);
            }
        }
        if (movie) {
            if (movie._id) {
                dispatch({ type: MOVIE_ADD_RESET });
                dispatch({ type: MOVIE_DETAILS_RESET });
                dispatch({ type: MOVIE_UPLOAD_RESET });
                history.push('/movielist');
            }
        }
    }, [history, movieInfo, dispatch, movie]);

    const uploadPosterHandler = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        setUploading(true);

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };

            const { data } = await axios.post('/api/upload', formData, config);

            setPoster(data);
            setUploading(false);
        } catch (error) {
            console.error(error);
            setUploading(false);
        }
    };

    const uploadBannerHandler = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        setUploading(true);

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };

            const { data } = await axios.post('/api/upload', formData, config);

            setBanner(data);
            setUploading(false);
        } catch (error) {
            console.error(error);
            setUploading(false);
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (poster.length === 0 || banner.length === 0) {
            setMessage('Please fill in required fields');
        } else {
            dispatch(uploadMoviePoster({ _id: movieId, poster, banner }));
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
                                </ListGroup.Item>{' '}
                                <Link to='/order-list'>
                                <ListGroup.Item as='li'>
                                    <span>
                                        <i className='fas fa-shopping-cart' />
                                        Orders
                                    </span>
                                </ListGroup.Item></Link>
                            </ListGroup>
                        </Col>
                        <Col sm={10} className='admin-main-col'>
                            <Container>
                                <Row className='add-movie-steps'>
                                    <Col className='inactive-add add-btn'>
                                        <h5>Step 1</h5>
                                        <i className='fas fa-video'></i>
                                        <p>Movie information</p>
                                    </Col>
                                    <Col className='inactive-add add-btn'>
                                        <h5>Step 2</h5>
                                        <i className='fas fa-ticket-alt'></i>
                                        <p>Cinema information</p>
                                    </Col>
                                    <Col className='active-add add-btn'>
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
                                    <Form className='mt-1'>
                                        <div className='button-upload'>
                                            <Button
                                                variant='primary'
                                                type='submit'
                                                className='form-submit'
                                                onClick={submitHandler}
                                            >
                                                Upload
                                            </Button>
                                        </div>
                                        <Row className='add-movie-form'>
                                            <Col>
                                                <Form.Group controlId='image'>
                                                    <Form.Label>
                                                        Image
                                                    </Form.Label>
                                                    <Form.Control
                                                        className='image-upload-holder'
                                                        type='text'
                                                        placeholder='Enter image url'
                                                        value={poster}
                                                        onChange={(e) =>
                                                            setPoster(
                                                                e.target.value
                                                            )
                                                        }
                                                    ></Form.Control>
                                                    <Form.File
                                                        id='image-file'
                                                        label='Choose File'
                                                        custom
                                                        onChange={
                                                            uploadPosterHandler
                                                        }
                                                    ></Form.File>
                                                    {uploading && <Loader />}
                                                    <div className='mt-3 image-upload'>
                                                        <Image
                                                            src={poster}
                                                            variant='top'
                                                            className='upload-poster'
                                                        />
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                            <Col className='ml-3'>
                                                <Form.Group controlId='image'>
                                                    <Form.Label>
                                                        Image
                                                    </Form.Label>
                                                    <Form.Control
                                                        className='image-upload-holder'
                                                        type='text'
                                                        placeholder='Enter image url'
                                                        value={banner}
                                                        onChange={(e) =>
                                                            setBanner(
                                                                e.target.value
                                                            )
                                                        }
                                                    ></Form.Control>
                                                    <Form.File
                                                        id='image-file'
                                                        label='Choose File'
                                                        custom
                                                        onChange={
                                                            uploadBannerHandler
                                                        }
                                                    ></Form.File>
                                                    {uploading && <Loader />}
                                                    <div className='mt-3 banner-upload'>
                                                        <Image
                                                            src={banner}
                                                            variant='top'
                                                            className='upload-banner'
                                                        />
                                                    </div>
                                                </Form.Group>
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

export default MovieAddPoster;
