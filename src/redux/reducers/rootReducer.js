import {combineReducers} from 'redux';
import * as gameReducers from './gameReducers'
import * as types from '../actions/actionTypes'
import {EASY, HARD, MEDIUM} from "../../components/game/difficultyLevels";
import {INITIAL_EASY_LEVEL, INITIAL_HARD_LEVEL, INITIAL_MEDIUM_LEVEL} from "./initialState";

const appReducer = combineReducers({
    secondLeft: gameReducers.timeRemainingReducer,
    stars: gameReducers.starsReducer,
    availableNums: gameReducers.availableNumbersReducer,
    candidateNums: gameReducers.candidateNumbersReducer,
    difficultyLevel: (state = EASY) => state,
})


//https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store/51831112
const rootReducer = (state = INITIAL_EASY_LEVEL, action) => {
    if (action.type === types.CHANGE_DIFFICULTY_LEVEL) {
        if (action.difficultyLevel === EASY) {
            state = INITIAL_EASY_LEVEL;
        }
        if (action.difficultyLevel === MEDIUM) {
            state = INITIAL_MEDIUM_LEVEL;
        }
        if (action.difficultyLevel === HARD) {
            state = INITIAL_HARD_LEVEL;
        }
    }
    return appReducer(state, action);
}

export default rootReducer;