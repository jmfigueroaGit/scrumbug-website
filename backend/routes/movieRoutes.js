import express from 'express';
import {
    addMovie,
    deleteMovie,
    getMovieById,
    getMovies,
    getSortedMovies,
    updateMovie,
    checkMovie,
    uploadMoviePoster,
} from '../controllers/movieControllers.js';
import { findSeat, updateSeat } from '../controllers/seatController.js';
import { reserveTicket } from '../controllers/reservationControllers.js';
import { admin, protect } from '../middlewares/authMiddleware.js';

const router = express();

//@desc movie controller routes

router.route('/').get(getMovies);
router.route('/check').post(protect, admin, checkMovie);
router.route('/sorted').get(getSortedMovies);
router.route('/add').post(protect, admin, addMovie);
router
    .route('/:id')
    .get(getMovieById)
    .put(protect, admin, updateMovie)
    .delete(protect, admin, deleteMovie);
router.route('/poster/:id').put(protect, admin, uploadMoviePoster);
router.route('/seat/:id').get(findSeat).put(updateSeat);
router.route('/checkout/:id').post(reserveTicket);
export default router;
