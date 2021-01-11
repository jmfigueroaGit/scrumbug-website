import asyncHandler from 'express-async-handler';
import Seat from '../models/seatModel.js';
import ErrorResponse from '../utils/errorResponse.js';

// @desc    GET Seat
// @route   GET /api/movies/seat/:id
// @access  PUBLIC
const findSeat = asyncHandler(async (req, res) => {
    const find = await Seat.findOne({ movie: req.params.id });

    if (find) {
        res.json(find);
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

// @desc    UPDATE Seat
// @route   PUT /api/movies/seat/:id
// @access  PUBLIC
const updateSeat = asyncHandler(async (req, res) => {
    const find = await Seat.findOne({ movie: req.params.id });

    if (find) {
        find.A1.status = req.body.A1.status || find.A1.status;
        find.A1.user = req.body.A1.user || find.A1.user;
        // find.A2 = A2 || find.A2;
        // find.A3 = A3 || find.A3;
        // find.A4 = A4 || find.A4;
        // find.A5 = A5 || find.A5;
        // find.A6 = A6 || find.A6;
        // find.A7 = A7 || find.A7;
        // find.A8 = A8 || find.A8;

        // find.B1 = B1 || find.B1;
        // find.B2 = B2 || find.B2;
        // find.B3 = B3 || find.B3;
        // find.B4 = B4 || find.B4;
        // find.B5 = B5 || find.B5;
        // find.B6 = B6 || find.B6;
        // find.B7 = B7 || find.B7;
        // find.B8 = B8 || find.B8;

        // find.C1 = C1 || find.C1;
        // find.C2 = C2 || find.C2;
        // find.C3 = C3 || find.C3;
        // find.C4 = C4 || find.C4;
        // find.C5 = C5 || find.C5;
        // find.C6 = C6 || find.C6;
        // find.C7 = C7 || find.C7;
        // find.C8 = C8 || find.C8;

        // find.D1 = D1 || find.D1;
        // find.D2 = D2 || find.D2;
        // find.D3 = D3 || find.D3;
        // find.D4 = D4 || find.D4;
        // find.D5 = D5 || find.D5;
        // find.D6 = D6 || find.D6;
        // find.D7 = D7 || find.D7;
        // find.D8 = D8 || find.D8;

        const updateSeat = await find.save();

        res.json(updateSeat);
    } else {
        res.status(404);
        throw new Error('Seat not found');
    }
});

export { findSeat, updateSeat };
