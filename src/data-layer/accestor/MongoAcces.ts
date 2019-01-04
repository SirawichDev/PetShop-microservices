import Mongo = require('mongoose');
import * as config from 'config';

Mongo.Promise = global.Promise;

class MongoAccestor {
    static mongoInstance: any;
    static mongoConnection: Mongo.Connection;

    constructor() {
        MongoAccestor.letsConnect();
    }
    static letsConnect(): Mongo.Connection {
        if (this.mongoInstance) {
            return this.mongoInstance;
        }
        let connectionString = config.get('mongo.front-url').toString();
        this.mongoConnection = Mongo.connection;

        this.mongoConnection.once('open', () => {
            console.info('Connected to mongo');
        });

        this.mongoInstance = Mongo.connect(connectionString);
        this.mongoConnection.on('connected', () => {
            console.info('default ' + connectionString);
        });
        return this.mongoInstance;
    }
}
MongoAccestor.letsConnect();
export { MongoAccestor };
