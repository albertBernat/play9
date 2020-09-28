import {FETCH_HIGHSCORE_SUCEEDED} from "../actions/actionTypes";

export function highscoreReducer(state = [], action) {
    switch (action.type) {
        case FETCH_HIGHSCORE_SUCEEDED:
            return action.highscores;
        default:
            return state;
    }
}