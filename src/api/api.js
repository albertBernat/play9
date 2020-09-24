import {handleError} from "./apiUtils";
import axios from 'axios'

// const baseUrl = "https://7195b8f9-f4de-4520-801f-1a749106f73a.mock.pstmn.io/highScores";
const baseUrl = "http://localhost:8080/api/";

export function loadHighScores() {
    return fetch(`${baseUrl}scores/best`)
        .then(response => response.json())
        .catch(handleError);
}

export function createHighScore(score) {
    return axios.post(`${baseUrl}scores`, score);
}