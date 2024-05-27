import { Schema } from "mongoose";

const cardSchema = Schema({
    number: {
        type: String,
        required: true,
    },

    cvv: {
        type: String,
        required: true,
    },

    expiry: {
        type: String,
        required: true,
    }
})

export default cardSchema;