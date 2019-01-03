import mongoose = require('mongoose');

interface PetDocuments extends mongoose.Document {
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

export default PetDocuments;