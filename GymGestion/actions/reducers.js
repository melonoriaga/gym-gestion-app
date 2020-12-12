import {
    LOGIN,
    LOGOUT,
    USERNAME,
    PASSWORD,
    EMAIL
} from './types';

const initialState = {
    username: '',
    password: '',
    email: ''
}

function loginApp(state) {
    return {
        ...state
    }
}

function logoutApp(state) {
    return {
        ...state
    }
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return loginApp(state);

        case LOGOUT:
            return logoutApp(state);

        default:
            return state;
    }
}

export default reducer;