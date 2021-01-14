import ErrorResponse from '../utils/errorResponse.js';
import asyncHandler from 'express-async-handler';
import Reserve from '../models/reservationModel.js';
import Movie from '../models/movieModel.js';
import Seat from '../models/seatModel.js';
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

// @desc    Ticket Reservation
// @route   POST /api/movies/checkout/:id
// @access  Public
const findOrders = asyncHandler(async (req, res, next) => {
    const orders = await Reserve.find({ user_id: req.body.user_id });

    if (orders) {
        res.json(orders);
    } else {
        res.status(404);
        throw new Error('Order not found');
    }
});

// @desc    GET all orders
// @route   GET /api/movies/order-list
// @access  Private
const getOrders = asyncHandler(async (req, res, next) => {
    const orders = await Reserve.find({});

    if (orders) {
        res.json(orders);
    } else {
        res.status(404);
        throw new Error('Order not found');
    }
});

// @desc    Delete order
// @route   DELETE /api/movies/orders/:id
// @access  Private/Admin
const deleteOrder = asyncHandler(async (req, res, next) => {
    const order = await Reserve.findById(req.params.id);

    if (order) {
        await Reserve.findOneAndDelete({ order: req.params.id });
        await order.remove();
        res.json({ message: 'Order removed' });
    } else {
        return next(new ErrorResponse('Order not found', 400));
    }
});

export { reserveTicket, findOrders, getOrders, deleteOrder };
