import asyncHandler from 'express-async-handler';
import Movie from '../models/movieModel.js';
import ErrorResponse from '../utils/errorResponse.js';

// @desc    ADD movie
// @route   POST /api/movies/add
// @access  Private/Admin
const addMovie = asyncHandler(async (req, res, next) => {
    const {
        movieTitle,
        mainCast,
        director,
        language,
        genre,
        duration,
        rating,
        releasedDate,
        endScreening,
        cinemaNumber,
        startTime,
        endTime,
        status,
    } = req.body;

    const movieExist = await Movie.findOne({ movieTitle });

    if (movieExist) {
        return next(new ErrorResponse('Movie is already exist', 400));
    }

    const movie = await Movie.create({
        movieTitle,
        mainCast,
        director,
        language,
        genre,
        duration,
        rating,
        releasedDate,
        endScreening,
        cinemaNumber,
        startTime,
        endTime,
        status,
    });

    if (movie) {
        res.status(201).json({
            _id: movie._id,
            title: movie.movieTitle,
            mainCast: movie.mainCast,
            director: movie.director,
            poster: movie.poster,
            language: movie.language,
            genre: movie.genre,
            duration: movie.duration,
            rating: movie.rating,
            releasedDate: movie.releasedDate,
            endScreening: movie.endScreening,
            cinemaNumber: movie.cinemaNumber,
            startTime: movie.startTime,
            endTime: movie.endTime,
            status: movie.status,
        });
    } else {
        return next(new ErrorResponse('Invalid Data', 400));
    }
});

// @desc    UPDATE movie
// @route   PUT /api/movies/:id
// @access  Private/Admin
const updateMovie = asyncHandler(async (req, res, next) => {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    if (movie) {
        res.send(movie);
    } else {
        return next(new ErrorResponse('Could not find movie', 400));
    }
});

// @desc    GET all movies
// @route   GET /api/movies/list
// @access  Public
const getMovies = asyncHandler(async (req, res, next) => {
    const movie = await Movie.find({});
    res.json(movie);
});

// @desc    Delete a movie
// @route   DELETE /api/movies/:id
// @access  Private/Admin
const deleteMovie = asyncHandler(async (req, res, next) => {
    const movie = await Movie.findById(req.params.id);

    if (movie) {
        await movie.remove();
        res.json({ message: 'Movie removed' });
    } else {
        return next(new ErrorResponse('Movie not found', 400));
    }
});

// @desc    Get user profile
// @route   GET /api/movies/:id
// @access  Private
const getMovieById = asyncHandler(async (req, res) => {
    const movie = await Movie.findById(req.params.id);

    if (movie) {
        res.json(movie);
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

// @desc    Get user profile
// @route   GET /api/movies/:id
// @access  Private
const getSortedMovies = asyncHandler(async (req, res) => {
    let query;

    //Copy req.query
    const reqQuery = { ...req.query };

    //Create query string
    let queryStr = JSON.stringify(reqQuery);

    //Create operators ($gt, $gte, etc)
    queryStr = queryStr.replace(
        /\b(gt|gte|lt|lte|in)\b/g,
        (match) => `$${match}`
    );

    query = Movie.find(JSON.parse(queryStr));

    const movie = await query;

    res.status(200).json(movie);
});

// @desc    Check movie if exist
// @route   GET /api/movies/check
// @access  Private
const checkMovie = asyncHandler(async (req, res) => {
    const {
        movieTitle,
        mainCast,
        director,
        language,
        genre,
        rating,
    } = req.body;
    const movie = await Movie.findOne({ movieTitle });

    if (movie) {
        res.status(404);
        throw new Error('Movie is already exist');
    } else {
        res.json({ movieTitle, mainCast, director, language, genre, rating });
    }
});

export {
    getMovieById,
    addMovie,
    updateMovie,
    getMovies,
    deleteMovie,
    getSortedMovies,
    checkMovie,
};
