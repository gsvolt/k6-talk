import { check, sleep } from 'k6';
import http from 'k6/http';
import { getConstants } from './helpers.js';

let constants = getConstants();

export const options = {
    vus: 100,
    stages: [
        { duration: '30s', target: 25 },
        { duration: '1m', target: 50 },
        { duration: '20s', target: 0 },
    ],
    thresholds: {
        http_req_duration: ['p(90)<200', 'p(95) < 300'],
        'http_req_duration{page:home}': [{
            thresholds: 'p(95)<100',
            abortOnFail: true,
            delayAbortEval: '10s',
        }],
    }
};

export default function () {
    const pages = [
        '/oops',
    ]
    for (const page of pages) {
        const resHome = http.get(constants.albums, { tags: { name: '04_test_1', page: 'home' } });
        check(resHome, {
            'Status is 200': (r) => r.status === 200,
        });
        const res = http.get(constants.albums + page, { tags: { name: '04_test_2' } });
        check(res, {
            'Status is 200': (r) => r.status === 200,
        });
        sleep(Math.round() * 5);
    }
}
