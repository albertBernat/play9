import {SAVE_SCORE, SAVE_SCORE_FAILED, SAVE_SCORE_SUCCEDEED} from "./actionTypes";

export function saveScore(highscore) {
    return {
        type: SAVE_SCORE,
        highscore
    }
}

export function saveScoreSuceeded() {
    return {
        type: SAVE_SCORE_SUCCEDEED,
    }
}

export function saveScoreFailed() {
    return {
        type: SAVE_SCORE_FAILED,
    }
}
