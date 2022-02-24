import http from 'k6/http';

export default function () {
    http.get('http://localhost:8080/albums', { tags: { name: '01_test' } });
}
