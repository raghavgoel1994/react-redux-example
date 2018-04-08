import { combineReducers } from 'redux';
import foodreducer from './reducers-food';

const allReducers = combineReducers({
    foodreducers: foodreducer
});
export default allReducers;