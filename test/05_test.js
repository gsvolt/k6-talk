import http from 'k6/http';
import {sleep, check} from 'k6';

export const options = {
    duration: '30s',
    vus: 10,
}

export default function() {
    let res = http.get('http://localhost:8080/albums', {tags: {name: '04_test'}});
    check(res, {
        'Status is 200': (r) => r.status === 200,
        'Title1 in text response': (r) => r.body.includes('Title1'),
        'Title2 in text response': (r) => r.body.includes('Title2'),
        'Title3 in text response': (r) => r.body.includes('Title3'),
    });
    sleep(Math.round()*5);
}

