import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_RESET,
    USER_EMAIL_AUTH_REQUEST,
    USER_EMAIL_AUTH_SUCCESS,
    USER_EMAIL_AUTH_FAIL,
    USER_EMAIL_AUTH_RESET,
    USER_AUTHENTICATION_v1_FAIL,
    USER_AUTHENTICATION_v1_REQUEST,
    USER_AUTHENTICATION_v1_SUCCESS,
    USER_AUTHENTICATION_v1_RESET,
    USER_AUTHENTICATION_v2_FAIL,
    USER_AUTHENTICATION_v2_SUCCESS,
    USER_AUTHENTICATION_v2_REQUEST,
    USER_AUTHENTICATION_v2_RESET,
    USER_AUTHENTICATION_v3_FAIL,
    USER_AUTHENTICATION_v3_SUCCESS,
    USER_AUTHENTICATION_v3_REQUEST,
    USER_AUTHENTICATION_v3_RESET,
    USER_UPDATE_PASSWORD_FAIL,
    USER_UPDATE_PASSWORD_SUCCESS,
    USER_UPDATE_PASSWORD_REQUEST,
    USER_UPDATE_PASSWORD_RESET,
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_DELETE_FAIL,
    USER_DELETE_RESET,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_RESET,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAIL,
    USER_UPDATE_RESET,
} from '../constants/userConstant';

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true };
        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload };
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
};

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true };
        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        case USER_REGISTER_RESET:
            return { userInfo: {} };
        default:
            return state;
    }
};

export const userEmailAuthReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_EMAIL_AUTH_REQUEST:
            return { loading: true };
        case USER_EMAIL_AUTH_SUCCESS:
            return { loading: false, user: action.payload };
        case USER_EMAIL_AUTH_FAIL:
            return { loading: false, error: action.payload };
        case USER_EMAIL_AUTH_RESET:
            return { user: {} };
        default:
            return state;
    }
};

export const userAuthenticationReducer_v1 = (state = {}, action) => {
    switch (action.type) {
        case USER_AUTHENTICATION_v1_REQUEST:
            return { loading: true };
        case USER_AUTHENTICATION_v1_SUCCESS:
            return { loading: false, authentication_v1: action.payload };
        case USER_AUTHENTICATION_v1_FAIL:
            return { loading: false, error: action.payload };
        case USER_AUTHENTICATION_v1_RESET:
            return { user: {} };
        default:
            return state;
    }
};

export const userAuthenticationReducer_v2 = (state = {}, action) => {
    switch (action.type) {
        case USER_AUTHENTICATION_v2_REQUEST:
            return { loading: true };
        case USER_AUTHENTICATION_v2_SUCCESS:
            return { loading: false, authentication_v2: action.payload };
        case USER_AUTHENTICATION_v2_FAIL:
            return { loading: false, error: action.payload };
        case USER_AUTHENTICATION_v2_RESET:
            return { user: {} };
        default:
            return state;
    }
};

export const userAuthenticationReducer_v3 = (state = {}, action) => {
    switch (action.type) {
        case USER_AUTHENTICATION_v3_REQUEST:
            return { loading: true };
        case USER_AUTHENTICATION_v3_SUCCESS:
            return { loading: false, authentication_v3: action.payload };
        case USER_AUTHENTICATION_v3_FAIL:
            return { loading: false, error: action.payload };
        case USER_AUTHENTICATION_v3_RESET:
            return { user: {} };
        default:
            return state;
    }
};

export const userUpdatePasswordReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_UPDATE_PASSWORD_REQUEST:
            return { loading: true };
        case USER_UPDATE_PASSWORD_SUCCESS:
            return {
                loading: false,
                success: true,
                userUpdate: action.payload,
            };
        case USER_UPDATE_PASSWORD_FAIL:
            return { loading: false, error: action.payload };
        case USER_UPDATE_PASSWORD_RESET:
            return { user: {} };
        default:
            return state;
    }
};

export const userListReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case USER_LIST_REQUEST:
            return { loading: true };
        case USER_LIST_SUCCESS:
            return { loading: false, users: action.payload };
        case USER_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const userDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_DELETE_REQUEST:
            return { loading: true };
        case USER_DELETE_SUCCESS:
            return { loading: false, success: true };
        case USER_DELETE_FAIL:
            return { loading: false, error: action.payload };
        case USER_DELETE_RESET:
            return { users: [] };
        default:
            return state;
    }
};

export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return { ...state, loading: true };
        case USER_DETAILS_SUCCESS:
            return { loading: false, user: action.payload };
        case USER_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        case USER_DETAILS_RESET:
            return { user: {} };
        default:
            return state;
    }
};

export const userUpdateReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_UPDATE_REQUEST:
            return { loading: true };
        case USER_UPDATE_SUCCESS:
            return { loading: false, success: true };
        case USER_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case USER_UPDATE_RESET:
            return {
                user: {},
            };
        default:
            return state;
    }
};
