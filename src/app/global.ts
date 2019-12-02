import { HttpHeaders } from '@angular/common/http';

export const serverUrl = 'http://192.168.20.218/';
export const headers = () => {
    return new HttpHeaders({
        'content-type': 'application/json',
        // 'Access-Control-Allow-Origin': '*'
    });
};
