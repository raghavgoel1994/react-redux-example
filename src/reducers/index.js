import { combineReducers } from 'redux';
import foodreducer from './foodReducers';

const allReducers = combineReducers({
    foodreducers: foodreducer
});
export default allReducers;