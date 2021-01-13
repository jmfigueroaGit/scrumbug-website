import ErrorResponse from '../utils/errorResponse.js';
import asyncHandler from 'express-async-handler';
import Reserve from '../models/reservationModel.js';

//This controller is for ticket reservation

// @desc    Ticket Reservation
// @route   POST /api/movies/checkout/:id
// @access  Public
const reserveTicket = asyncHandler(async (req, res, next) => {
    const {
        user_id,
        screeningDate,
        cinemaNumber,
        seatNumber,
        totalAmount,
    } = req.body;

    const movie_id = req.params.id;

    const reserve = await Reserve.create({
        user_id,
        movie_id,
        screeningDate,
        cinemaNumber,
        seatNumber,
        totalAmount,
    });

    if (reserve) {
        res.status(201).json(reserve);
    } else {
        res.status(404);
        throw new Error('Invalid data not found');
    }
});

export { reserveTicket };
