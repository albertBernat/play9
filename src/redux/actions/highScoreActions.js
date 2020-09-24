import * as types from "./actionTypes";
import * as api from "../../api/api"

async function saveUser(score) {
    return api.createHighScore(score)
}

export function saveUserScoreSuccess(savedUserScore) {
    return {
        type: types.SAVE_USER_SCORE,
        score: savedUserScore
    }
}

export function saveUserScore(score) {
    return function (dispatch) {
        return saveUser(score).then(result => dispatch(saveUserScoreSuccess()));
    }
}