import * as types from "./actionTypes";
import utils from "../../utils/Utils";

export function updateAvailableNumbers(availableNumbers) {
    return {
        type: types.UPDATE_AVAILABLE_NUMBERS,
        availableNums: availableNumbers
    }
}

export function updateCandidateNumbers(candidateNums) {
    return {
        type: types.UPDATE_CANDIDATE_NUMBERS,
        candidateNums
    }
}

export function starsNewRandom(possibleRange) {
    return {
        type: types.STARS_NEW_RANDOM,
        stars: utils.randomSumIn(possibleRange, 9)
    }
}

export function timeRemainingTick() {
    return {
        type: types.TIMER_TICK
    }
}

export function resetState() {
    return {
        type: types.STATE_RESET
    }
}