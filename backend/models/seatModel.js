import mongoose from 'mongoose';

const seatSchema = mongoose.Schema({
    A1: {
        status: {
            type: String,
            enum: ['available', 'reserved'],
            default: 'available',
        },
        user: {
            type: String,
            default: 'user',
        },
    },
    movie: {
        type: mongoose.Schema.ObjectId,
        ref: 'Movie',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Seat = mongoose.model('Seat', seatSchema);

export default Seat;
