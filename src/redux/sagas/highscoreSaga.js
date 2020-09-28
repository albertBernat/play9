import {call, put, takeLatest} from "redux-saga/effects";
import * as api from '../../api/api'
import {fetchHighscoresFailed, fetchHighscoresSuceeded,} from "../actions/highscoreActions";
import {FETCH_HIGHSCORE} from "../actions/actionTypes";

function* fetchHighscores() {
    try {
        const highscores = yield call(api.loadHighScores)
        yield put(fetchHighscoresSuceeded(highscores))
    } catch (e) {
        yield put(fetchHighscoresFailed(e.message))
    }
}

export function* fetchHighScoresSaga() {
    yield takeLatest(FETCH_HIGHSCORE, fetchHighscores)
}

