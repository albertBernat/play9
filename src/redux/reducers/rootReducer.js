import {combineReducers} from 'redux';
import * as gameReducers from './gameReducers'
import * as highscoreReducers from "./highscoreReducers";

const rootReducer = combineReducers({
    game: gameReducers.gameReducer,
    scores: highscoreReducers.highscoreReducer,
});

export default rootReducer;
