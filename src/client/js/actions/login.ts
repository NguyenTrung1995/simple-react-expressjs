import actionCreatorFactory from 'typescript-fsa';
import axios from "axios";
// var md5 = require('md5');

const actionCreator = actionCreatorFactory();

// action names
const LOG_IN = 'LOG_IN';
const LOG_IN_FAILED = 'LOG_IN_FAILED';
const LOG_OUT = 'LOG_OUT';

// actions
export const loginAction = actionCreator(LOG_IN);
export const loginFailedAction = actionCreator(LOG_IN_FAILED);
export const logoutAction = actionCreator(LOG_OUT);

export const dispatchLogOut = () => {
    return dispatch => {
        fetch('/api/signout')
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText);
                }
                dispatch(logoutAction());
            })
            .catch(err => console.log('err dispatch ' + err))
    }
}

export const fetchSessionUser = () => {
    return dispatch => {
        axios('/api/getInfo')
            .then(res => {
                if (res.data) {
                    dispatch(loginAction(res.data))
                }
            })
            .catch(err => console.log(err))
    }
}

export const handleLogIn = user => {
    return dispatch => {
        axios
            .post('/api/signin', user)
            .then((res) => {
                if (res.data) {
                    dispatch(loginAction(res.data));
                }
                else {
                    dispatch(loginFailedAction());
                }
            })
            .catch((err) => {
                    console.log('haha' + err);
            });
    }
}