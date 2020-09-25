import {handleError} from "./apiUtils";
import axios from 'axios'

const baseUrl = process.env.REACT_APP_API_URL;

export function loadHighScores() {
    console.log(process.env.NODE_ENV)
    console.log(baseUrl);
    return fetch(`${baseUrl}scores/best`)
        .then(response => response.json())
        .catch(handleError);
}

export function createHighScore(score) {
    return axios.post(`${baseUrl}scores`, score);
}