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
    NOW_LIST_REQUEST,
    NOW_LIST_SUCCESS,
    NOW_LIST_FAIL,
    COMING_LIST_REQUEST,
    COMING_LIST_SUCCESS,
    COMING_LIST_FAIL,
    MOVIE_LIST_RESET,
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
export const movieNowReducer = (state = { moviesNow: [] }, action) => {
    switch (action.type) {
        case NOW_LIST_REQUEST:
            return { loading: true };
        case NOW_LIST_SUCCESS:
            return {
                loading: false,
                moviesNow: action.payload,
            };
        case NOW_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const movieComingReducer = (state = { moviesComing: [] }, action) => {
    switch (action.type) {
        case COMING_LIST_REQUEST:
            return { loading: true };
        case COMING_LIST_SUCCESS:
            return { loading: false, moviesComing: action.payload };
        case COMING_LIST_FAIL:
            return { loading: false, error: action.payload };
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

export const movieUpdateReducer = (state = { movieAdd: {} }, action) => {
    switch (action.type) {
        case MOVIE_UPDATE_REQUEST:
            return { loading: true };
        case MOVIE_UPDATE_SUCCESS:
            return { loading: false, movieAdd: action.payload };
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
            return { user: {} };
        default:
            return state;
    }
};
