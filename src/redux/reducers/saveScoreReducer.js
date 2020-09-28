import {RESET_SAVE_SCORE, SAVE_SCORE_FAILED, SAVE_SCORE_SUCCEDEED} from "../actions/actionTypes";
import {SCORE_NOT_SAVED, SCORE_SAVED} from "../../saveScoreStatus";

const initialState =  SCORE_NOT_SAVED;

export function scoreReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_SCORE_SUCCEDEED:
            return SCORE_SAVED;
        case SAVE_SCORE_FAILED:
        case RESET_SAVE_SCORE:
            return SCORE_NOT_SAVED;
        default:
            return state;
    }
}
