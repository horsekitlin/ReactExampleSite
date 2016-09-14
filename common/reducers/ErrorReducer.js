/**
    @flow
**/
import Immutable from 'immutable';
import {ErrorState} from '../constants/Types';
import createReducer from '../utils/createReducer';
import types from '../constants/ActionTypes';

const handlers = {
    [types.LOGIN_ERROR]: (state, action) => {
        const newState = state.update('loginErrorMsg', action.message);
        return newState;
    },
};

export default createReducer(new ErrorState(), handlers);
