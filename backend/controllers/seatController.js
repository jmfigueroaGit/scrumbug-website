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
        find.A2.status = req.body.A2.status || find.A2.status;
        find.A3.status = req.body.A3.status || find.A3.status;
        find.A4.status = req.body.A4.status || find.A4.status;
        find.A5.status = req.body.A5.status || find.A5.status;
        find.A6.status = req.body.A6.status || find.A6.status;
        find.A7.status = req.body.A7.status || find.A7.status;
        find.A8.status = req.body.A8.status || find.A8.status;

        find.B1.status = req.body.B1.status || find.B1.status;
        find.B2.status = req.body.B2.status || find.B2.status;
        find.B3.status = req.body.B3.status || find.B3.status;
        find.B4.status = req.body.B4.status || find.B4.status;
        find.B5.status = req.body.B5.status || find.B5.status;
        find.B6.status = req.body.B6.status || find.B6.status;
        find.B7.status = req.body.B7.status || find.B7.status;
        find.B8.status = req.body.B8.status || find.B8.status;

        find.C1.status = req.body.C1.status || find.C1.status;
        find.C2.status = req.body.C2.status || find.C2.status;
        find.C3.status = req.body.C3.status || find.C3.status;
        find.C4.status = req.body.C4.status || find.C4.status;
        find.C5.status = req.body.C5.status || find.C5.status;
        find.C6.status = req.body.C6.status || find.C6.status;
        find.C7.status = req.body.C7.status || find.C7.status;
        find.C8.status = req.body.C8.status || find.C8.status;

        find.D1.status = req.body.D1.status || find.D1.status;
        find.D2.status = req.body.D2.status || find.D2.status;
        find.D3.status = req.body.D3.status || find.D3.status;
        find.D4.status = req.body.D4.status || find.D4.status;
        find.D5.status = req.body.D5.status || find.D5.status;
        find.D6.status = req.body.D6.status || find.D6.status;
        find.D7.status = req.body.D7.status || find.D7.status;
        find.D8.status = req.body.D8.status || find.D8.status;

        find.A1.user = req.body.A1.user || find.A1.user;
        find.A2.user = req.body.A2.user || find.A2.user;
        find.A3.user = req.body.A3.user || find.A3.user;
        find.A4.user = req.body.A4.user || find.A4.user;
        find.A5.user = req.body.A5.user || find.A5.user;
        find.A6.user = req.body.A6.user || find.A6.user;
        find.A7.user = req.body.A7.user || find.A7.user;
        find.A8.user = req.body.A8.user || find.A8.user;

        find.B1.user = req.body.B1.user || find.B1.user;
        find.B2.user = req.body.B2.user || find.B2.user;
        find.B3.user = req.body.B3.user || find.B3.user;
        find.B4.user = req.body.B4.user || find.B4.user;
        find.B5.user = req.body.B5.user || find.B5.user;
        find.B6.user = req.body.B6.user || find.B6.user;
        find.B7.user = req.body.B7.user || find.B7.user;
        find.B8.user = req.body.B8.user || find.B8.user;

        find.C1.user = req.body.C1.user || find.C1.user;
        find.C2.user = req.body.C2.user || find.C2.user;
        find.C3.user = req.body.C3.user || find.C3.user;
        find.C4.user = req.body.C4.user || find.C4.user;
        find.C5.user = req.body.C5.user || find.C5.user;
        find.C6.user = req.body.C6.user || find.C6.user;
        find.C7.user = req.body.C7.user || find.C7.user;
        find.C8.user = req.body.C8.user || find.C8.user;

        find.D1.user = req.body.D1.user || find.D1.user;
        find.D2.user = req.body.D2.user || find.D2.user;
        find.D3.user = req.body.D3.user || find.D3.user;
        find.D4.user = req.body.D4.user || find.D4.user;
        find.D5.user = req.body.D5.user || find.D5.user;
        find.D6.user = req.body.D6.user || find.D6.user;
        find.D7.user = req.body.D7.user || find.D7.user;
        find.D8.user = req.body.D8.user || find.D8.user;

        const updateSeat = await find.save();

        res.json(updateSeat);
    } else {
        res.status(404);
        throw new Error('Seat not found');
    }
});

export { findSeat, updateSeat };
