export class Cookie {
    constructor(name: string, value: any, min?: number) {
        // Setear variables Internas
        this.NAME = name;
        this.VALUE = value;
        this.MIN = 0;

        // Crear la cookie
        let make = name + '=';
        make += btoa(JSON.stringify({ d: value })) + '; ';

        if (min !== undefined) {
            // Fecha Expiración
            this.MIN = min;
            const expire = new Date();
            expire.setTime(expire.getTime() + (1000 * 60 * min));

            make += 'expires=' + expire.toUTCString() + '; ';
            make += 'path=/; HttpOnly; Secure; SameSite=Strict';
        }
        document.cookie = make.trim();
    }

    private NAME: string;
    get name() {
        return this.NAME;
    }
    private VALUE: any;
    get value() {
        return this.VALUE;
    }
    private MIN: number;
    get min() {
        return this.MIN;
    }
    static kill(name: string) {
        const expire = new Date();
        expire.setTime(0);
        let make = name + '=; ';
        make += 'expires=' + expire.toUTCString() + '; ';
        make += 'path=/;';
        document.cookie = make;
    }
    static getValue(name: string) {
        const stage1 = document.cookie.split(';');
        let value = null;
        stage1.forEach(item => {
            const data = item.split('=');
            if (data[0].trim() === name) {
                let parsed = JSON.parse(atob(data[1])).d;
                if (parsed == null) {
                    parsed = data[1];
                }
                value = parsed;
                return false;
            }
        });
        return value;
    }
}
