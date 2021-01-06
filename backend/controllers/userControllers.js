import ErrorResponse from '../utils/errorResponse.js';
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';

//This controller provides CRUD functions of accessing user routes

// @desc    Register user
// @route   POST /api/users/register
// @access  Public
const registerUser = asyncHandler(async (req, res, next) => {
    const {
        fullName,
        email,
        password,
        question1,
        answer1,
        question2,
        answer2,
        question3,
        answer3,
    } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        return next(new ErrorResponse('User is already exist', 400));
    }

    const user = await User.create({
        fullName,
        email,
        password,
        question1,
        answer1,
        question2,
        answer2,
        question3,
        answer3,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            question1: user.question1,
            answer1: user.answer1,
            question2: user.question2,
            answer2: user.answer2,
            question3: user.question3,
            answer3: user.answer3,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

// @desc    Login user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    //Validate email & password
    if (!email || !password) {
        return next(
            new ErrorResponse('Please Provide an email and password', 400)
        );
    }

    //Check for user
    const user = await User.findOne({ email }).select('+password');

    if (user) {
        //Check if user is active
        if (user.isActive) {
            //Check if password matches
            if (await user.matchPassword(password)) {
                res.json({
                    _id: user._id,
                    fullName: user.fullName,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token: generateToken(user._id),
                });
            } else {
                return next(new ErrorResponse('Invalid Credentials', 401));
            }
        } else {
            return next(new ErrorResponse('Account is inactive', 400));
        }
    } else {
        return next(new ErrorResponse(`User account doesn't exist`, 404));
    }
});

// @desc    Forgot Password user
// @route   PUT /api/users/forgotPassword
// @access  Public
const forgotPassword = asyncHandler(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return next(new ErrorResponse(`There is no user with that email`, 404));
    }
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
    user.password = req.body.password;
    await user.save();
    res.json({
        fullName: user.fullName,
        email: user.email,
        isActive: user.isActive,
    });
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        res.json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        user.fullName = req.body.fullName || user.fullName;
        user.email = req.body.email || user.email;
        if (req.body.password) {
            user.password = req.body.password;
        }

        const updatedUser = await user.save();

        res.json({
            _id: updatedUser._id,
            name: updatedUser.fullName,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id),
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({})
        .select('-password')
        .select('-question1')
        .select('-question2')
        .select('-question3')
        .select('-answer1')
        .select('-answer2')
        .select('-answer3');
    res.json(users);
});

// @desc    Get user profile
// @route   GET /api/users/:id
// @access  Private
const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
        .select('-password')
        .select('-question1')
        .select('-question2')
        .select('-question3')
        .select('-answer1')
        .select('-answer2')
        .select('-answer3');

    if (user) {
        res.json(user);
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        user.fullName = req.body.fullName || user.fullName;
        user.email = req.body.email || user.email;
        user.isActive = req.body.isActive;

        const updatedUser = await user.save();

        res.json({
            _id: updatedUser._id,
            fullName: updatedUser.fullName,
            email: updatedUser.email,
            isActive: updatedUser.isActive,
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

export {
    registerUser,
    loginUser,
    forgotPassword,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserById,
    updateUser,
};
