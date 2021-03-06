import axios from 'axios'

const baseUrl = process.env.REACT_APP_API_URL;

export function loadHighScores() {
    return fetch(`${baseUrl}scores/best`)
        .then(response => response.json());
}

export function createHighScore(score) {
    return axios.post(`${baseUrl}scores`, score);
}
