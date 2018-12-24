import ExpressConf from './Express';

class AppConfig {
    server: any;
    express: ExpressConf;

    constructor() {
        this.express = new ExpressConf();
        const port = 4444;
        this.server = this.express.app.listen(port, () => {
            console.info(`Running At localhost:${port}`);
        });
    }
}

export default AppConfig;
