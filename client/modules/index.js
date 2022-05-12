import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import authReducer, { authSaga } from './auth';

const rootReducer = combineReducers({
	index: (state = {}, action) => {
		switch (action.type) {
			case HYDRATE:
				return { ...state, ...action.payload };
			default:
				return state;
		}
	},
	authReducer,
});

export function* rootSaga() {
	yield all([authSaga()]);
}

export default rootReducer;
