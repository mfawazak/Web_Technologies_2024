import { Schema, model } from 'mongoose';

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
    }
})

const User = model('User', userSchema);

export default User;