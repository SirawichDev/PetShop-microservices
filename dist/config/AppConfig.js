"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express_1 = require("./Express");
class AppConfig {
    constructor() {
        this.express = new Express_1.default();
        const port = 4444;
        this.server = this.express.app.listen(port, () => {
            console.info(`Running At localhost:${port}`);
        });
    }
}
exports.default = AppConfig;
//# sourceMappingURL=AppConfig.js.map