import utils from "../../utils/Utils";
import {EASY, HARD, MEDIUM} from "../../components/game/difficultyLevels";

export const INITIAL_EASY_LEVEL = {
    stars: utils.random(1, 9),
    availableNums: utils.range(1, 9),
    candidateNums: [],
    secondLeft: 30,
    difficultyLevel: EASY
};

export const INITIAL_MEDIUM_LEVEL = {
    stars: utils.random(1, 12),
    availableNums: utils.range(1, 9),
    candidateNums: [],
    secondLeft: 20,
    difficultyLevel: MEDIUM
};

export const INITIAL_HARD_LEVEL = {
    stars: utils.random(1, 15),
    availableNums: utils.range(1, 9),
    candidateNums: [],
    secondLeft: 10,
    difficultyLevel: HARD
};
