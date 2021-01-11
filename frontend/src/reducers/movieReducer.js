import {
    MOVIE_LIST_REQUEST,
    MOVIE_LIST_SUCCESS,
    MOVIE_LIST_FAIL,
    MOVIE_ADD_REQUEST,
    MOVIE_ADD_SUCCESS,
    MOVIE_ADD_FAIL,
    MOVIE_ADD_RESET,
    MOVIE_UPDATE_REQUEST,
    MOVIE_UPDATE_SUCCESS,
    MOVIE_UPDATE_FAIL,
    MOVIE_UPDATE_RESET,
    MOVIE_DELETE_REQUEST,
    MOVIE_DELETE_SUCCESS,
    MOVIE_DELETE_FAIL,
    MOVIE_DELETE_RESET,
    MOVIE_DETAILS_REQUEST,
    MOVIE_DETAILS_SUCCESS,
    MOVIE_DETAILS_FAIL,
    MOVIE_DETAILS_RESET,
    MOVIE_LIST_RESET,
    MOVIE_UPLOAD_REQUEST,
    MOVIE_UPLOAD_SUCCESS,
    MOVIE_UPLOAD_FAIL,
    MOVIE_UPLOAD_RESET,
    MOVIE_SEAT_REQUEST,
    MOVIE_SEAT_SUCCESS,
    MOVIE_SEAT_FAIL,
    MOVIE_SEAT_RESET,
    MOVIE_SEAT_UPDATE_REQUEST,
    MOVIE_SEAT_UPDATE_SUCCESS,
    MOVIE_SEAT_UPDATE_FAIL,
    MOVIE_SEAT_UPDATE_RESET,
} from '../constants/movieConstant';

export const movieListReducer = (state = { moviesList: [] }, action) => {
    switch (action.type) {
        case MOVIE_LIST_REQUEST:
            return { loading: true };
        case MOVIE_LIST_SUCCESS:
            return { loading: false, moviesList: action.payload };
        case MOVIE_LIST_FAIL:
            return { loading: false, error: action.payload };
        case MOVIE_LIST_RESET:
            return { moviesList: {} };
        default:
            return state;
    }
};

export const movieAddReducer = (state = { movieInfo: {} }, action) => {
    switch (action.type) {
        case MOVIE_ADD_REQUEST:
            return { loading: true };
        case MOVIE_ADD_SUCCESS:
            return { loading: false, movieInfo: action.payload };
        case MOVIE_ADD_FAIL:
            return { loading: false, error: action.payload };
        case MOVIE_ADD_RESET:
            return { movies: {} };
        default:
            return state;
    }
};

export const movieUpdateReducer = (state = { movieInfo: {} }, action) => {
    switch (action.type) {
        case MOVIE_UPDATE_REQUEST:
            return { loading: true };
        case MOVIE_UPDATE_SUCCESS:
            return { loading: false, success: true };
        case MOVIE_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case MOVIE_UPDATE_RESET:
            return { movies: {} };
        default:
            return state;
    }
};

export const movieDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case MOVIE_DELETE_REQUEST:
            return { loading: true };
        case MOVIE_DELETE_SUCCESS:
            return { loading: false, success: true };
        case MOVIE_DELETE_FAIL:
            return { loading: false, error: action.payload };
        case MOVIE_DELETE_RESET:
            return { movies: {} };
        default:
            return state;
    }
};

export const movieDetailsReducer = (state = { movie: {} }, action) => {
    switch (action.type) {
        case MOVIE_DETAILS_REQUEST:
            return { ...state, loading: true };
        case MOVIE_DETAILS_SUCCESS:
            return { loading: false, movie: action.payload };
        case MOVIE_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        case MOVIE_DETAILS_RESET:
            return { movie: {} };
        default:
            return state;
    }
};

export const movieUploadReducer = (state = { movieUploads: {} }, action) => {
    switch (action.type) {
        case MOVIE_UPLOAD_REQUEST:
            return { loading: true };
        case MOVIE_UPLOAD_SUCCESS:
            return {
                loading: false,
                success: true,
                movieUploads: action.payload,
            };
        case MOVIE_UPLOAD_FAIL:
            return { loading: false, error: action.payload };
        case MOVIE_UPLOAD_RESET:
            return { movieUploads: {} };
        default:
            return state;
    }
};

export const seatListReducer = (state = { seats: [] }, action) => {
    switch (action.type) {
        case MOVIE_SEAT_REQUEST:
            return { loading: true };
        case MOVIE_SEAT_SUCCESS:
            return { loading: false, seats: action.payload };
        case MOVIE_SEAT_FAIL:
            return { loading: false, error: action.payload };
        case MOVIE_SEAT_RESET:
            return { seats: {} };
        default:
            return state;
    }
};

export const seatUpdateReducer = (state = { seat: {} }, action) => {
    switch (action.type) {
        case MOVIE_SEAT_UPDATE_REQUEST:
            return { loading: true };
        case MOVIE_SEAT_UPDATE_SUCCESS:
            return { loading: false, seat: action.payload };
        case MOVIE_SEAT_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case MOVIE_SEAT_UPDATE_RESET:
            return { seat: {} };
        default:
            return state;
    }
};
