import {combineReducers} from 'redux';
import * as gameReducers from './gameReducers'
import * as types from '../actions/actionTypes'

const appReducer = combineReducers({
    secondLeft: gameReducers.timeRemainingReducer,
    stars: gameReducers.starsReducer,
    availableNums: gameReducers.availableNumbersReducer,
    candidateNums: gameReducers.candidateNumbersReducer
})

//https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store/51831112
const rootReducer = (state, action) => {
    if (action.type === types.STATE_RESET) {
        state = undefined;
    }
    return appReducer(state, action);
}

export default rootReducer;