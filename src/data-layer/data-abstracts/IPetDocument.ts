import mongoose = require('mongoose');

interface IPetDocument extends mongoose.Document {
    id: string,
    breed: {
        id: number,
        name:string
    },
    name: string,
    lastUpdated: Date,
    createAt: Date,
    description: string,
}

export default IPetDocument;