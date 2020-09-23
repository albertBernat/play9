import * as types from '../actions/actionTypes'
import initialState from "./initialState";

export function availableNumbersReducer(state = initialState.availableNums, action) {
    if (action.type === types.UPDATE_AVAILABLE_NUMBERS) {
        return action.availableNums;
    }
    return state;
}

export function candidateNumbersReducer(state = initialState.candidateNums, action) {
    if (action.type === types.UPDATE_CANDIDATE_NUMBERS) {
        return action.candidateNums;
    }
    return state;
}

export function starsReducer(state = initialState.stars, action) {
    if (action.type === types.STARS_NEW_RANDOM) {
        return action.stars;
    }
    return state;
}

export function timeRemainingReducer(state = initialState.secondLeft, action) {
    if (action.type === types.TIMER_TICK) {
        return state - 1;
    }
    return state;
}