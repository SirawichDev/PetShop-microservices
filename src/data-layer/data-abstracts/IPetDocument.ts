import mongoose = require('mongoose');

interface IPetDocument extends mongoose.Document {
    id: string;
    breed: {
        name: string;
    };
    name: string;
    lastUpdated: Date;
    createdAt: Date;
    description: string;
}

export default IPetDocument;
