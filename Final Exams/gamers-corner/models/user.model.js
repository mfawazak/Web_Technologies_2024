import { Schema, model } from 'mongoose';
import cardSchema from './card.model.js';

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
    },

    modifiedAt: {
        type: Date,
    },

    address: {
        type: String,
    },

    phone: {
        type: String,
    },

    card: {
        type: cardSchema,
    }
})

const User = model('User', userSchema);

export default User;