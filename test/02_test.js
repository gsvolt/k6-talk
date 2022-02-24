import http from 'k6/http';
import { getConstants } from './helpers.js';

let constants = getConstants();

export const options = {
    vus: 100,
    duration: '30s',
}

export default function () {
    http.get(constants.albums, { tags: { name: '02_test' } });
}
