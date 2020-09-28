import {combineReducers} from 'redux';
import {scoreReducer} from "./saveScoreReducer";
import {gameReducer} from "./gameReducers";
import {highscoreReducer} from "./highscoreReducers";

const rootReducer = combineReducers({
    game: gameReducer,
    scores: highscoreReducer,
    saveScoreStatus: scoreReducer
});

export default rootReducer;
