import { signinApi, signoutApi, signupApi } from '@/api';
import { HYDRATE } from 'next-redux-wrapper';
import { createAction, handleActions } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';

export const initialState = {
	currentUser: null,
	signinError: null,
	signupError: null,
	isLoggedin: false,
};

const SIGNUP_REQUEST = 'auth/SIGNUP_REQUEST';
const SIGNUP_SUCCESS = 'auth/SIGNUP_SUCCESS';
const SIGNUP_FAILURE = 'auth/SIGNUP_FAILURE';

const SIGNIN_REQUEST = 'auth/SIGNIN_REQUEST';
const SIGNIN_SUCCESS = 'auth/SIGNIN_SUCCESS';
const SIGNIN_FAILURE = 'auth/SIGNIN_FAILURE';

const CURRENTUSER_REQUEST = 'auth/CURRENTUSER_REQUEST';
const CURRENTUSER_SUCCESS = 'auth/CURRENTUSER_SUCCESS';
const CURRENTUSER_FAILURE = 'auth/CURRENTUSER_FAILURE';

const SIGNOUT_REQUEST = 'auth/SIGNOUT_REQUEST';
const SIGNOUT_SUCCESS = 'auth/SIGNOUT_SUCCESS';

export const signinRequest = createAction(SIGNIN_REQUEST, (data) => data);
export const signupRequest = createAction(SIGNUP_REQUEST, (data) => data);
export const signoutRequest = createAction(SIGNOUT_REQUEST);
export const currentUserRequest = createAction(
	CURRENTUSER_REQUEST,
	(data) => data
);

export function* authSaga() {
	yield takeLatest(SIGNIN_REQUEST, signinCall);
	yield takeLatest(SIGNUP_REQUEST, signupCall);
	yield takeLatest(CURRENTUSER_REQUEST, getCurrentUser);
	yield takeLatest(SIGNOUT_REQUEST, signoutCall);
}

function* signinCall(action) {
	try {
		const response = yield call(signinApi, action.payload);
		const result = response.data;
		yield put({ type: SIGNIN_SUCCESS, payload: result });
		yield put((window.location.href = '/'));
	} catch (err) {
		yield put({ type: SIGNIN_FAILURE, payload: err.response.data.message });
	}
}

function* signupCall(action) {
	try {
		const response = yield call(signupApi, action.payload);
		const result = response.data;
		yield put({ type: SIGNUP_SUCCESS, payload: result });
		yield put((window.location.href = '/'));
	} catch (err) {
		yield put({ type: SIGNUP_FAILURE, payload: err.response.data.message });
	}
}

function* signoutCall() {
	try {
		yield call(signoutApi);
		yield put({ type: SIGNOUT_SUCCESS });
		yield put((window.location.href = '/'));
	} catch (err) {}
}

function* getCurrentUser(action) {
	if (!action.payload) {
		yield put({ type: CURRENTUSER_FAILURE, payload: action.payload });
	} else {
		yield put({ type: CURRENTUSER_SUCCESS, payload: action.payload });
	}
}

const authReducer = handleActions(
	{
		[HYDRATE]: (state, action) => ({
			...state,
			...action.payload,
		}),
		[SIGNIN_SUCCESS]: (state, _action) => ({
			...state,
			isLoggedin: true,
			signinError: null,
			signupError: null,
		}),
		[SIGNIN_FAILURE]: (state, action) => ({
			...state,
			signinError: action.payload,
		}),
		[SIGNUP_SUCCESS]: (state, _action) => ({
			...state,
			isLoggedin: true,
			signinError: null,
			signupError: null,
		}),
		[SIGNUP_FAILURE]: (state, action) => ({
			...state,
			signupError: action.payload,
		}),
		[CURRENTUSER_SUCCESS]: (state, action) => ({
			...state,
			isLoggedin: true,
			currentUser: action.payload,
		}),
		[CURRENTUSER_FAILURE]: (state, action) => ({
			...state,
			isLoggedin: false,
			currentUser: action.payload,
		}),
		[SIGNOUT_SUCCESS]: (state, _action) => ({
			...state,
			isLoggedin: false,
			currentUser: null,
		}),
	},
	initialState
);
export default authReducer;
