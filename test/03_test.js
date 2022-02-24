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
};

export default function () {
    const pages = [
        '/',
        '/oops'
    ]
    for (const page of pages) {
        const res = http.get(constants.albums + page, { tags: { name: '03_test' } });
        check(res, {
            'Status is 200': (r) => r.status === 200,
            'Duration was <= 200': (r) => r.timings.duration <= 200,
        });
        sleep(1);
    }
}
