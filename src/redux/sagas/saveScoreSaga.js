import {call, put, takeLatest} from "redux-saga/effects";
import * as api from "../../api/api";
import {saveScoreFailed, saveScoreSuceeded} from "../actions/saveScoreActions";
import {SAVE_SCORE} from "../actions/actionTypes";

function* saveScore(action) {
    try {
        yield call(api.createHighScore,action.highscore)
        yield put(saveScoreSuceeded())
    } catch (e) {
        yield put(saveScoreFailed())
    }
}

export function* saveScoreSaga() {
    yield takeLatest(SAVE_SCORE, saveScore);
}
