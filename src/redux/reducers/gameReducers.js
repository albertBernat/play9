import * as types from '../actions/actionTypes'
import {INITIAL_EASY_LEVEL} from "./initialGameState";

export function gameReducer(state = INITIAL_EASY_LEVEL, action) {
    switch (action.type) {
        case types.UPDATE_AVAILABLE_NUMBERS:
            return {...state, availableNums: action.availableNums};
        case types.UPDATE_CANDIDATE_NUMBERS:
            return {...state, candidateNums: action.candidateNums};
        case types.STARS_NEW_RANDOM:
            return {...state, stars: action.stars};
        case types.TIMER_TICK:
            return {...state, secondLeft: state.secondLeft - 1};
        case types.CHANGE_DIFFICULTY_LEVEL:
            return action.newState;
        default:
            return state;
    }
}
