import mongoose from 'mongoose';

const reservationSchema = mongoose.Schema(
    {
        user_id: {
            type: String,
            required: true,
        },
        movie_id: {
            type: String,
            required: true,
        },
        screeningDate: {
            type: String,
            required: true,
        },
        cinemaNumber: {
            type: String,
            required: true,
        },
        seatNumber: {
            type: String,
            required: true,
        },
        totalAmount: {
            type: String,
            required: true,
        },
    },
    {
        timestamp: true,
    }
);

const Reservation = mongoose.model('Reservation', reservationSchema);
export default Reservation;
