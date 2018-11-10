import { combineReducers } from 'redux';
import PlanetsReducer from './reducer_planets';

const rootReducer = combineReducers({
    planets: PlanetsReducer
});

export default rootReducer;