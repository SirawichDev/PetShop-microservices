import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';
import {useContainer, useExpressServer} from 'routing-controllers';
import {Container} from 'typedi';
class RouteConfig {
    app: express.Express;
    constructor(){
        this.app = express();
        this.app.use(bodyParser.urlencoded({
            extended: false
        }));
        this.app.use(bodyParser.json());
        this.setupController();
    }
    setupController() {
        const controllerPAth = path.resolve('dist','service-layer/controllers');
        useContainer(Container);
        useExpressServer(this.app, {
            controllers:[controllerPAth+"/*.js"],
            cors: true
        })

    }
}

export default RouteConfig;