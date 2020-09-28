import {FETCH_HIGHSCORE, FETCH_HIGHSCORE_FAILED, FETCH_HIGHSCORE_SUCEEDED,} from "./actionTypes";

export function fetchHighscores() {
    return {
        type: FETCH_HIGHSCORE,
    };
}

export function fetchHighscoresSuceeded(highscores) {
    return {
        type: FETCH_HIGHSCORE_SUCEEDED,
        highscores
    };
}

export function fetchHighscoresFailed(message) {
    return {
        type: FETCH_HIGHSCORE_FAILED,
        message
    };
}




