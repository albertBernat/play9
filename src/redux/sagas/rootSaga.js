import {fetchHighScoresSaga} from "./highscoreSaga";
import {saveScoreSaga} from "./saveScoreSaga";
import {all} from "@redux-saga/core/effects";

export default function* rootSaga() {
    yield all([fetchHighScoresSaga(), saveScoreSaga()]);
}
