import IPetDocument from './IPetDocument';
import { Schema } from 'mongoose';

let PetSchemal: Schema = new Schema({
    name: {
        type: String,
        required: true,
        index:{
            unique: true,dropDups:true
        }
    },
    breed: {
        type: String,
        required: true
    },
    createdAt: {
        type:Date,
        default: Date.now
    },
    lastUpdated: {
        type:Date,
        default: Date.now
    },
    description: {
        type: String
    }

});