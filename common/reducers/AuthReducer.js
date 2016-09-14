import Immutable from 'immutable';
import {AuthState} from '../constants/Types';
import createReducer from '../utils/createReducer';
import types from '../constants/ActionTypes';

const handlers = {
    [types.LOGIN_SUCCESS]: (state, action) => {
        console.log(state);
        return state.set('auth', true)
        .set('token', 'fksladjflaskask');
    },
};

export default createReducer(new AuthState(), handlers);
