import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    userLoginReducer,
    userRegisterReducer,
    userEmailAuthReducer,
    userAuthenticationReducer_v1,
    userAuthenticationReducer_v2,
    userAuthenticationReducer_v3,
    userUpdatePasswordReducer,
    userListReducer,
    userDetailsReducer,
    userUpdateReducer,
} from './reducers/userReducer';
import {
    movieListReducer,
    movieAddReducer,
    movieUpdateReducer,
    movieDeleteReducer,
    movieDetailsReducer,
    movieUploadReducer,
    seatListReducer,
    seatUpdateReducer,
    seatReserveReducer,
    checkoutReducer,
    checkoutTotalReducer,
    dialogReducer,
    getOrderReducer,
    getMovieReducer,
    listOrdersReducer,
    orderDeleteReducer,
} from './reducers/movieReducer';
const reducer = combineReducers({
    dialog: dialogReducer,

    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userEmailAuth: userEmailAuthReducer,
    userAuthentication_v1: userAuthenticationReducer_v1,
    userAuthentication_v2: userAuthenticationReducer_v2,
    userAuthentication_v3: userAuthenticationReducer_v3,
    userUpdatePassword: userUpdatePasswordReducer,
    userList: userListReducer,
    userDetails: userDetailsReducer,
    userUpdate: userUpdateReducer,

    movieList: movieListReducer,
    movieAdd: movieAddReducer,
    movieUpdate: movieUpdateReducer,
    movieDelete: movieDeleteReducer,
    movieDetails: movieDetailsReducer,
    movieUpload: movieUploadReducer,
    seatList: seatListReducer,
    seatUpdate: seatUpdateReducer,
    seatReserve: seatReserveReducer,
    checkout: checkoutReducer,
    checkoutTotal: checkoutTotalReducer,
    getOrder: getOrderReducer,
    getMovie: getMovieReducer,
    listOrders: listOrdersReducer,
    orderDelete: orderDeleteReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

const movieInfoFromStorage = localStorage.getItem('movieInfo')
    ? JSON.parse(localStorage.getItem('movieInfo'))
    : null;

const initialState = {
    userLogin: {
        userInfo: userInfoFromStorage,
    },
    movieList: { movieInfo: movieInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
