import {FETCH_HIGHSCORE_FAILED, FETCH_HIGHSCORE_SUCEEDED} from "../actions/actionTypes";

const initialState = {
    highscores: [],
    errorMessage: ''
}
export function highscoreReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_HIGHSCORE_SUCEEDED:
            return {...state, highscores: action.highscores};
        case FETCH_HIGHSCORE_FAILED:
            return {...state, errorMessage: action.message};
        default:
            return state;
    }
}
