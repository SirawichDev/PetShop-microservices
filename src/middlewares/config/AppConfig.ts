import RouteConfig from './RouteConfig';
import * as config from 'config';
import { Router } from 'express';

class AppConfig {
    server: any;
    router: RouteConfig;

    constructor() {
        this.router = new RouteConfig();
        const port = config.get('router.port');

        this.server = this.router.app.listen(port, () => {
            console.log(`Listening Server at ${port}`);
        });
    }
}
export default AppConfig;
