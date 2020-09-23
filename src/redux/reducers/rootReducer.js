import {combineReducers} from 'redux';
import * as gameReducers from './gameReducers'

const rootReducer = combineReducers({
    game: gameReducers.gameReducer
});

export default rootReducer;