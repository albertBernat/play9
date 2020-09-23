import utils from "../../utils/Utils";

export default {
    stars: utils.random(1, 9),
    availableNums: utils.range(1, 9),
    candidateNums: [],
    secondLeft: 10
};
