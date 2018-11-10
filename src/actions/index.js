import axios from 'axios';
const ROOT_URL = 'https://swapi.co/api/';

export const FETCH_PLANETS = 'FETCH_PLANETS';

export function fetchPlanets() {

    const url = `${ROOT_URL}planets`;
    const request = axios.get(url);

    return {
        type: FETCH_PLANETS,
        payload: request
    }
}