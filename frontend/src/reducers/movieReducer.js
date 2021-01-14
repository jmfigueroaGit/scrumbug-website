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
    MOVIE_SEAT_RESERVE_REQUEST,
    MOVIE_SEAT_RESERVE_SUCCESS,
    MOVIE_SEAT_RESERVE_FAIL,
    MOVIE_SEAT_RESERVE_RESET,
    MOVIE_CHECKOUT_REQUEST,
    MOVIE_CHECKOUT_SUCCESS,
    MOVIE_CHECKOUT_FAIL,
    MOVIE_CHECKOUT_RESET,
    MOVIE_CHECKOUT_TOTAL_FAIL,
    MOVIE_CHECKOUT_TOTAL_SUCCESS,
    MOVIE_CHECKOUT_TOTAL_REQUEST,
    MOVIE_CHECKOUT_TOTAL_RESET,
    DIALOG_REQUEST,
    DIALOG_SUCCESS,
    DIALOG_FAIL,
    DIALOG_RESET,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_FAIL,
    GET_ORDER_RESET,
    GET_MOVIE_REQUEST,
    GET_MOVIE_SUCCESS,
    GET_MOVIE_FAIL,
    GET_MOVIE_RESET,
    LIST_ORDER_REQUEST,
    LIST_ORDER_SUCCESS,
    LIST_ORDER_FAIL,
    LIST_ORDER_RESET,
    ORDER_DELETE_REQUEST,
    ORDER_DELETE_SUCCESS,
    ORDER_DELETE_FAIL,
    ORDER_DELETE_RESET,
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

export const seatReserveReducer = (state = { reserveInfo: {} }, action) => {
    switch (action.type) {
        case MOVIE_SEAT_RESERVE_REQUEST:
            return { loading: true };
        case MOVIE_SEAT_RESERVE_SUCCESS:
            return { loading: false, reserveInfo: action.payload };
        case MOVIE_SEAT_RESERVE_FAIL:
            return { loading: false, error: action.payload };
        case MOVIE_SEAT_RESERVE_RESET:
            return { reserveInfo: {} };
        default:
            return state;
    }
};

export const checkoutReducer = (state = { checkoutInfo: {} }, action) => {
    switch (action.type) {
        case MOVIE_CHECKOUT_REQUEST:
            return { loading: true };
        case MOVIE_CHECKOUT_SUCCESS:
            return { loading: false, checkoutInfo: action.payload };
        case MOVIE_CHECKOUT_FAIL:
            return { loading: false, error: action.payload };
        case MOVIE_CHECKOUT_RESET:
            return { checkoutInfo: {} };
        default:
            return state;
    }
};

export const checkoutTotalReducer = (state = { checkoutData: {} }, action) => {
    switch (action.type) {
        case MOVIE_CHECKOUT_TOTAL_REQUEST:
            return { loading: true };
        case MOVIE_CHECKOUT_TOTAL_SUCCESS:
            return { loading: false, checkoutData: action.payload };
        case MOVIE_CHECKOUT_TOTAL_FAIL:
            return { loading: false, error: action.payload };
        case MOVIE_CHECKOUT_TOTAL_RESET:
            return { checkoutData: {} };
        default:
            return state;
    }
};

export const dialogReducer = (state = { messageData: {} }, action) => {
    switch (action.type) {
        case DIALOG_REQUEST:
            return { loading: true };
        case DIALOG_SUCCESS:
            return { loading: false, messageData: action.payload };
        case DIALOG_FAIL:
            return { loading: false, error: action.payload };
        case DIALOG_RESET:
            return { messageData: {} };
        default:
            return state;
    }
};

export const getOrderReducer = (state = { order: [] }, action) => {
    switch (action.type) {
        case GET_ORDER_REQUEST:
            return { loading: true };
        case GET_ORDER_SUCCESS:
            return { loading: false, order: action.payload };
        case GET_ORDER_FAIL:
            return { loading: false, error: action.payload };
        case GET_ORDER_RESET:
            return { order: [] };
        default:
            return state;
    }
};

export const getMovieReducer = (state = { movies: [] }, action) => {
    switch (action.type) {
        case GET_MOVIE_REQUEST:
            return { loading: true };
        case GET_MOVIE_SUCCESS:
            return { loading: false, movies: action.payload };
        case GET_MOVIE_FAIL:
            return { loading: false, error: action.payload };
        case GET_MOVIE_RESET:
            return { movies: [] };
        default:
            return state;
    }
};
export const listOrdersReducer = (state = { orderList: [] }, action) => {
    switch (action.type) {
        case LIST_ORDER_REQUEST:
            return { loading: true };
        case LIST_ORDER_SUCCESS:
            return { loading: false, orderList: action.payload };
        case LIST_ORDER_FAIL:
            return { loading: false, error: action.payload };
        case LIST_ORDER_RESET:
            return { orderList: [] };
        default:
            return state;
    }
};

export const orderDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_DELETE_REQUEST:
            return { loading: true };
        case ORDER_DELETE_SUCCESS:
            return { loading: false, success: true };
        case ORDER_DELETE_FAIL:
            return { loading: false, error: action.payload };
        case ORDER_DELETE_RESET:
            return { orderInfo: {} };
        default:
            return state;
    }
};
