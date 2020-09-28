import {SAVE_SCORE_FAILED, SAVE_SCORE_SUCCEDEED} from "../actions/actionTypes";

const saveStatus = {
    SUCCEED: 'suceeed',
    FAILED: 'failed',
}

const initialState = {
    saveStatus: '',
}

export function scoreReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_SCORE_SUCCEDEED:
            return saveStatus.SUCCEED;
        case SAVE_SCORE_FAILED:
            return saveStatus.FAILED;
        default:
            return state;
    }
}
