import express from 'express';
import {
    addMovie,
    deleteMovie,
    getMovieById,
    getMovies,
    getSortedMovies,
    updateMovie,
    checkMovie,
} from '../controllers/movieControllers.js';
import { admin, protect } from '../middlewares/authMiddleware.js';

const router = express();

//@desc movie controller routes

router.route('/').get(getMovies);
router.route('/check').post(protect, admin, checkMovie);
router.route('/sorted').get(getSortedMovies);
router.route('/add').post(protect, admin, addMovie);
router
    .route('/:id')
    .get(protect, admin, getMovieById)
    .put(protect, admin, updateMovie)
    .delete(protect, admin, deleteMovie);

export default router;
