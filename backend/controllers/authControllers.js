//Authentication Part of user controller

import ErrorResponse from '../utils/errorResponse.js';
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';

//FORGOT PASSWORD CONTROLLER PART

// @desc   Find user email if exist before security question authentication
// @route   POST /api/users/forgotPassword/auth/
// @access  Public
const findUser = asyncHandler(async (req, res, next) => {
    const { email } = req.body;

    const userFind = await User.findOne({ email });

    if (userFind) {
        res.status(200);
        res.json({
            success: true,
            email: userFind.email,
            question1: userFind.question1,
            question2: userFind.question2,
            question3: userFind.question3,
        });
    } else {
        return next(new ErrorResponse('User is already exist', 400));
    }
});

// @desc   Validate security question1 and answer1
// @route   POST /api/users/forgotPassword/auth/v1
// @access  Public
const auth1 = asyncHandler(async (req, res, next) => {
    const { email, answer } = req.body;

    const user = await User.findOne({ email: email });

    if (await user.compareAnswer1(answer)) {
        res.status(200).json({
            success: true,
            data: user.email,
            question: user.question1,
        });
    } else {
        return next(new ErrorResponse(`Invalid input credentials`, 401));
    }
});

// @desc   Validate security question2 and answer2
// @route   POST /api/users/forgotPassword/auth/v2
// @access  Public
const auth2 = asyncHandler(async (req, res, next) => {
    const { email, answer } = req.body;

    const user = await User.findOne({ email: email });

    if (await user.compareAnswer2(answer)) {
        res.status(200).json({
            success: true,
            data: user.email,
            question: user.question2,
        });
    } else {
        return next(new ErrorResponse(`Invalid input credentials1`, 401));
    }
});

// @desc   Validate security question3 and answer3
// @route   POST /api/users/forgotPassword/auth/v3
// @access  Public
const auth3 = asyncHandler(async (req, res, next) => {
    const { email, answer } = req.body;

    const user = await User.findOne({ email: email });

    if (await user.compareAnswer3(answer)) {
        res.status(200).json({
            success: true,
            data: user.email,
            question: user.question3,
        });
    } else {
        return next(new ErrorResponse(`Invalid input credentials1`, 401));
    }
});

//REGISTER CONTROLLER PART

//REGISTER

// @desc    Check user email if exist
// @route   POST /api/check
// @access  Public
const checkUser = asyncHandler(async (req, res) => {
    const { fullName, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    } else {
        res.status(200).json({
            fullName: fullName,
            email: email,
            password: password,
        });
    }
});

// @desc    GET Security Auth 1
// @route   POST /api/v1
// @access  Public
const registerAuth1 = asyncHandler(async (req, res, next) => {
    const { fullName, email, password, question1, answer1 } = req.body;

    const user = await User.findOne({ email: email });

    if (user) {
        return next(new ErrorResponse(`Email is already used`, 401));
    } else {
        res.status(200).json({
            success: true,
            fullName,
            email,
            password,
            question1,
            answer1,
        });
    }
});

// @desc    GET Security Auth 2
// @route   POST /api/v2
// @access  Public
const registerAuth2 = asyncHandler(async (req, res, next) => {
    const {
        fullName,
        email,
        password,
        question1,
        answer1,
        question2,
        answer2,
    } = req.body;

    const user = await User.findOne({ email: email });

    if (user) {
        return next(new ErrorResponse(`Email is already used`, 401));
    } else {
        res.status(200).json({
            success: true,
            fullName,
            email,
            password,
            question1,
            answer1,
            question2,
            answer2,
        });
    }
});

// @desc    GET Security Auth 3
// @route   POST /api/v3
// @access  Public
const registerAuth3 = asyncHandler(async (req, res, next) => {
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

export {
    findUser,
    auth1,
    auth2,
    auth3,
    checkUser,
    registerAuth1,
    registerAuth2,
    registerAuth3,
};
