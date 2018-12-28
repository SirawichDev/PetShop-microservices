import Mongo = require('mongoose');
import * as config from 'config';

Mongo.Promise = global.Promise;

class MongoConnect {
    static mongooseInstance: any;
    static mongooseConnection: Mongo.Connection;

    constructor() {
        MongoConnect.letsConnect();
    }
    static letsConnect(): Mongo.Connection {
        if (this.mongooseInstance) {
            return this.mongooseInstance;
        }
        let connectionString = config.get('mongo.urlClient').toString();
        this.mongooseConnection = Mongo.connection;

        this.mongooseConnection.once('open', () => {
            console.info('Connected to mongo');
        });

        this.mongooseInstance = Mongo.connect(connectionString);
        this.mongooseConnection.on('connected', () => {
            console.info('default ' + connectionString);
        });
    }
}
