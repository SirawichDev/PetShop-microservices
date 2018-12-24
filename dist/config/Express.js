"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routing_controllers_1 = require("routing-controllers");
const path = require("path");
class ExpressConf {
    constructor() {
        this.app = express();
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.setControllersUp();
    }
    setControllersUp() {
        const controllPath = path.resolve('dist', 'controllers');
        routing_controllers_1.useExpressServer(this.app, {
            controllers: [controllPath + '/*.js']
        });
    }
}
exports.default = ExpressConf;
//# sourceMappingURL=Express.js.map