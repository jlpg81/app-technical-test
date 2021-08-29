import {combineReducers} from 'redux';
import vehicles from './vehicles';
import origin from './origin';
import vehicleArray from './vehicleArray';

const rootReducer = combineReducers({
  vehicles,
  origin,
  vehicleArray,
});

export default rootReducer;
