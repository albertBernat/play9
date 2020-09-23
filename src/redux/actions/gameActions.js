import * as types from "./actionTypes";
import utils from "../../utils/Utils";
import {INITIAL_EASY_LEVEL, INITIAL_HARD_LEVEL, INITIAL_MEDIUM_LEVEL} from "../reducers/initialState";
import {EASY, HARD, MEDIUM} from "../../components/game/difficultyLevels";

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

export function changeDifficultyLevel(difficultyLevel) {
    return {
        type: types.CHANGE_DIFFICULTY_LEVEL,
        newState: getStateByDifficultyLevel(difficultyLevel)
    }
}

function getStateByDifficultyLevel(difficultyLevel) {
    if (difficultyLevel === EASY) {
        return INITIAL_EASY_LEVEL;
    }
    if (difficultyLevel === MEDIUM) {
        return  INITIAL_MEDIUM_LEVEL;
    }
    if (difficultyLevel === HARD) {
        return  INITIAL_HARD_LEVEL;
    }
}
