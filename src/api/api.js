import {handleError} from "./apiUtils";
import axios from 'axios'

const baseUrl = process.env.REACT_APP_API_URL;

export function loadHighScores() {
    const highscores = fetch(`${baseUrl}scores/best`)
        .then(response => response.json());
    console.log(highscores);
    return highscores;
}

export function createHighScore(score) {
    return axios.post(`${baseUrl}scores`, score);
}
