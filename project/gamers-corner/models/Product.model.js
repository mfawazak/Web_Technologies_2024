import { model, Schema } from 'mongoose'

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    },

    brand: {
        type: String,
        required: true
    },

    features: {
        type: [String],
        required: true,
    },

    image: {
        type: String,
        required: true,
    },

    quantity: {
        type: Number,
    }
})

const Product = model('product', productSchema);
export default Product