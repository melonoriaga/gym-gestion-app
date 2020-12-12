import {
    LOGIN,
    USERNAME,
    PASSWORD,
    EMAIL,
    LOGOUT
} from './types';

function login() {
    return {
        type: LOGIN
    }
}

function setUsername() {
    return {
        type: USERNAME
    }
}

function setPassword() {
    return {
        type: PASSWORD
    }
}

function setEmail() {
    return {
        type: EMAIL
    }
}

function logout() {
    return {
        type: LOGOUT
    }
}


const actionCreation = {
    login,
    setUsername,
    setPassword,
    setEmail,
    logout
};

export actionCreation;