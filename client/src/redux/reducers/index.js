import { combineReducers } from 'redux';
import userReducer from './userReducer';
import loaderReducer from './loaderReducer';
import applicationReducer from './applicationReducer';

const reducer = combineReducers({
    userReducer,
    loaderReducer,
    applicationReducer,
});

export default reducer;
