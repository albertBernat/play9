import * as types from '../actions/actionTypes'
import {INITIAL_EASY_LEVEL} from "./initialState";

export function availableNumbersReducer(state = INITIAL_EASY_LEVEL.availableNums, action) {
    if (action.type === types.UPDATE_AVAILABLE_NUMBERS) {
        return action.availableNums;
    }
    return state;
}

export function candidateNumbersReducer(state = INITIAL_EASY_LEVEL.candidateNums, action) {
    if (action.type === types.UPDATE_CANDIDATE_NUMBERS) {
        return action.candidateNums;
    }
    return state;
}

export function starsReducer(state = INITIAL_EASY_LEVEL.stars, action) {
    if (action.type === types.STARS_NEW_RANDOM) {
        return action.stars;
    }
    return state;
}

export function timeRemainingReducer(state = INITIAL_EASY_LEVEL.secondLeft, action) {
    if (action.type === types.TIMER_TICK) {
        return state - 1;
    }
    return state;
}
