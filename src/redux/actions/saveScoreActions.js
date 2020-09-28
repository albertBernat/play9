import {SAVE_SCORE, SAVE_SCORE_FAILED, SAVE_SCORE_SUCCEDEED} from "./actionTypes";
import {toast} from "react-toastify";

export function saveScore(highscore) {
    return {
        type: SAVE_SCORE,
        highscore
    }
}

export function saveScoreSuceeded() {
    toast.success('Score saved');
    return {
        type: SAVE_SCORE_SUCCEDEED,
    }
}

export function saveScoreFailed() {
    toast.error('Error saving score');
    return {
        type: SAVE_SCORE_FAILED,
    }
}
