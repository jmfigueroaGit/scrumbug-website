import mongoose from 'mongoose';
import slugify from 'slugify';

const movieSchema = mongoose.Schema(
    {
        movieTitle: {
            type: String,
            required: [true, 'Title field is required'],
        },

        mainCast: {
            type: String,
            required: [true, 'Main Cast field is required'],
        },
        director: {
            type: String,
            required: [true, 'Director field is required'],
        },

        language: {
            type: String,
            required: [true, 'Language field is required'],
        },
        genre: {
            type: String,
            enum: [
                'Action',
                'Animation',
                'Comedy',
                'Crime',
                'Drama',
                'Experimental',
                'Fantasy',
                'Historical',
                'Horror',
                'Romance',
                'Science Fiction',
                'Thriller',
                'Western',
                'Other',
            ],
            required: [true, 'Genre field is required'],
        },
        duration: {
            type: Number,
            required: [true, 'Duration field is required'],
        },
        rating: {
            type: String,
            required: true,
        },
        releasedDate: {
            type: String,
            required: true,
        },
        endScreening: {
            type: String,
            required: true,
        },
        cinemaNumber: {
            type: String,
            required: true,
        },
        startTime: {
            type: String,
            required: true,
        },
        endTime: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        slug: String,
        poster: {
            type: String,
            default: 'no-photo.jpg',
        },
    },
    {
        collection: 'movies',
    }
);

movieSchema.pre('save', function (next) {
    this.slug = slugify(this.movieTitle, { lower: true });
    this.status = slugify(this.status, { lower: true });
    next();
});

const Movie = mongoose.model('Movie', movieSchema);
export default Movie;
