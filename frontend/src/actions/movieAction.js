import axios from 'axios';
import {
    MOVIE_LIST_REQUEST,
    MOVIE_LIST_SUCCESS,
    MOVIE_LIST_FAIL,
    MOVIE_ADD_REQUEST,
    MOVIE_ADD_SUCCESS,
    MOVIE_ADD_FAIL,
    MOVIE_UPDATE_REQUEST,
    MOVIE_UPDATE_SUCCESS,
    MOVIE_UPDATE_FAIL,
    MOVIE_DELETE_REQUEST,
    MOVIE_DELETE_SUCCESS,
    MOVIE_DELETE_FAIL,
    MOVIE_DETAILS_REQUEST,
    MOVIE_DETAILS_SUCCESS,
    MOVIE_DETAILS_FAIL,
    COMING_LIST_REQUEST,
    COMING_LIST_SUCCESS,
    COMING_LIST_FAIL,
    MOVIE_UPLOAD_REQUEST,
    MOVIE_UPLOAD_SUCCESS,
    MOVIE_UPLOAD_FAIL,
    MOVIE_SEAT_REQUEST,
    MOVIE_SEAT_SUCCESS,
    MOVIE_SEAT_FAIL,
    MOVIE_SEAT_UPDATE_REQUEST,
    MOVIE_SEAT_UPDATE_SUCCESS,
    MOVIE_SEAT_UPDATE_FAIL,
    MOVIE_SEAT_UPDATE_RESET,
} from '../constants/movieConstant';
import { USER_LIST_RESET } from '../constants/userConstant';

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    document.location.href = '/login';
    dispatch({ type: USER_LIST_RESET });
};

export const listMovies = () => async (dispatch) => {
    try {
        dispatch({
            type: MOVIE_LIST_REQUEST,
        });

        const { data } = await axios.get(`/api/movies`);

        dispatch({
            type: MOVIE_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: MOVIE_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const sortedMovie = (status) => async (dispatch) => {
    try {
        dispatch({
            type: COMING_LIST_REQUEST,
        });

        const { data } = await axios.get(`/api/movies/sorted?status=${status}`);

        dispatch({
            type: COMING_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: COMING_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const deleteMovie = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: MOVIE_DELETE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        await axios.delete(`/api/movies/${id}`, config);

        dispatch({
            type: MOVIE_DELETE_SUCCESS,
        });
        dispatch(listMovies());
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === 'Not authorized, token failed') {
            dispatch(logout());
        }
        dispatch({
            type: MOVIE_DELETE_FAIL,
            payload: message,
        });
    }
};

export const addMovie = (
    movieTitle,
    mainCast,
    director,
    language,
    genre,
    duration,
    rating,
    movieSynopsis,
    releasedDate,
    endScreening,
    cinemaNumber,
    startTime,
    endTime,
    status
) => async (dispatch, getState, history) => {
    try {
        dispatch({
            type: MOVIE_ADD_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.post(
            '/api/movies/add',
            {
                movieTitle,
                mainCast,
                director,
                language,
                genre,
                duration,
                rating,
                movieSynopsis,
                releasedDate,
                endScreening,
                cinemaNumber,
                startTime,
                endTime,
                status,
            },
            config
        );

        dispatch({
            type: MOVIE_ADD_SUCCESS,
            payload: data,
        });

        localStorage.setItem('movieInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: MOVIE_ADD_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const updateMovie = (movie) => async (dispatch, getState) => {
    try {
        dispatch({
            type: MOVIE_UPDATE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.put(
            `/api/movies/${movie._id}`,
            movie,
            config
        );

        dispatch({ type: MOVIE_UPDATE_SUCCESS });

        dispatch({ type: MOVIE_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === 'Not authorized, token failed') {
            dispatch(logout());
        }
        dispatch({
            type: MOVIE_UPDATE_FAIL,
            payload: message,
        });
    }
};

export const getMovieDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: MOVIE_DETAILS_REQUEST,
        });

        const { data } = await axios.get(`/api/movies/${id}`);

        dispatch({
            type: MOVIE_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === 'Not authorized, token failed') {
            dispatch(logout());
        }
        dispatch({
            type: MOVIE_DETAILS_FAIL,
            payload: message,
        });
    }
};

export const checkMovie = (
    movieTitle,
    mainCast,
    director,
    language,
    genre,
    rating,
    movieSynopsis
) => async (dispatch, getState, history) => {
    try {
        dispatch({
            type: MOVIE_DETAILS_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.post(
            '/api/movies/check',
            {
                movieTitle,
                mainCast,
                director,
                language,
                genre,
                rating,
                movieSynopsis,
            },
            config
        );
        dispatch({
            type: MOVIE_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: MOVIE_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const uploadMoviePoster = (movie) => async (dispatch, getState) => {
    try {
        dispatch({
            type: MOVIE_UPLOAD_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.put(
            `/api/movies/poster/${movie._id}`,
            movie,
            config
        );

        dispatch({ type: MOVIE_UPLOAD_SUCCESS });

        dispatch({ type: MOVIE_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === 'Not authorized, token failed') {
            dispatch(logout());
        }
        dispatch({
            type: MOVIE_UPLOAD_FAIL,
            payload: message,
        });
    }
};

export const getSeatDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: MOVIE_SEAT_REQUEST,
        });

        const { data } = await axios.get(`/api/movies/seat/${id}`);

        dispatch({
            type: MOVIE_SEAT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === 'Not authorized, token failed') {
            dispatch(logout());
        }
        dispatch({
            type: MOVIE_SEAT_FAIL,
            payload: message,
        });
    }
};

export const updateSeat = (seat) => async (dispatch, getState) => {
    try {
        dispatch({
            type: MOVIE_SEAT_UPDATE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.put(
            `/api/movies/seat/${seat.movie}`,
            seat,
            config
        );

        dispatch({ type: MOVIE_SEAT_UPDATE_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === 'Not authorized, token failed') {
            dispatch(logout());
        }
        dispatch({
            type: MOVIE_SEAT_UPDATE_FAIL,
            payload: message,
        });
    }
};
