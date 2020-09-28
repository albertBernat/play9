import {call, put, takeLatest} from "redux-saga/effects";
import * as types from '../actions/actionTypes';
import * as api from '../../api/api'
import {fetchHighscoresFailed, fetchHighscoresSuceeded} from "../actions/highscoreActions";
import {all} from "@redux-saga/core/effects";

function* fetchHighscores() {
    try {
        const highscores = yield call(api.loadHighScores)
        yield put(fetchHighscoresSuceeded(highscores))
    } catch (e) {
        yield put(fetchHighscoresFailed(e.message))
    }
}

export function* fetchHighScoresSaga() {
    yield takeLatest(types.FETCH_HIGHSCORE, fetchHighscores)
}

export default function* rootSaga() {
    yield all([fetchHighScoresSaga()]);
}
