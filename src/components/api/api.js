import { handleError } from "./apiUtils";
const baseUrl = "https://7195b8f9-f4de-4520-801f-1a749106f73a.mock.pstmn.io/highScores";

export function loadHighScores() {
    return fetch(baseUrl)
        .then(response => response.json())
        .catch(handleError);
}
