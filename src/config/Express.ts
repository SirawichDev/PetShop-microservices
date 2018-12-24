import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { useExpressServer } from 'routing-controllers';
import * as path from 'path';

class ExpressConf {
    app: express.Express;
    constructor() {
        this.app = express();
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.setControllersUp();
    }
    setControllersUp() {
        const controllPath = path.resolve('dist', 'controllers');
        useExpressServer(this.app, {
            controllers: [controllPath + '/*.js']
        });
    }
}

export default ExpressConf;
