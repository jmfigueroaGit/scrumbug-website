import React, { useEffect } from 'react';
import { Button, Col, Container, ListGroup, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import {
    listMovies,
    deleteMovie,
    getMovieDetails,
} from '../../../actions/movieAction';
import Loader from '../../../components/Loader';
const MovieListScreen = ({ history }) => {
    const dispatch = useDispatch();
    const movieList = useSelector((state) => state.movieList);
    const { loading, error, moviesList } = movieList;
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listMovies());
        } else {
            history.push('/login');
        }
    }, [dispatch, history, userInfo]);

    const editHandler = (id) => {
        dispatch(getMovieDetails(id));
    };

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deleteMovie(id));
        }
    };

    return (
        <div>
            {loading && <Loader>Loading</Loader>}
            {userInfo ? (
                <Container fluid className='admin-main'>
                    <Row className='h-100'>
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
                            <div className='add-movie-btn'>
                                <Link to='movie-add'>
                                    <Button type='submit' variant='primary'>
                                        Add Movie
                                    </Button>
                                </Link>
                            </div>
                            <div className='movie-table mt-2 ml-4'>
                                <Table
                                    variant='dark'
                                    striped
                                    bordered
                                    hover
                                    className='table-sm '
                                >
                                    <thead>
                                        <tr className='col-center'>
                                            <th>TITLE</th>
                                            <th>GENRE</th>
                                            <th>DIRECTOR</th>
                                            <th>STATUS</th>
                                            <th>EDIT MOVIE</th>
                                            <th>DELETE MOVIE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {moviesList?.map((movie) => (
                                            <tr
                                                key={movie._id}
                                                className='col-center'
                                            >
                                                <td>{movie.movieTitle}</td>
                                                <td>{movie.genre}</td>
                                                <td>{movie.director}</td>
                                                <td>{movie.status}</td>
                                                <td>
                                                    <Link
                                                        to={`/movie/${movie._id}`}
                                                    >
                                                        <Button
                                                            variant='light'
                                                            className='btn-sm'
                                                            onClick={() =>
                                                                editHandler(
                                                                    movie._id
                                                                )
                                                            }
                                                        >
                                                            <i className='fas fa-edit'></i>
                                                        </Button>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Button
                                                        variant='danger'
                                                        className='btn-sm'
                                                        onClick={() =>
                                                            deleteHandler(
                                                                movie._id
                                                            )
                                                        }
                                                    >
                                                        <i className='fas fa-trash'></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                </Container>
            ) : (
                <Redirect to='/login'></Redirect>
            )}
        </div>
    );
};

export default MovieListScreen;
