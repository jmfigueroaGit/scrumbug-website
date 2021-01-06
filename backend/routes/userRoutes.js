import express from 'express';
import { protect, admin } from '../middlewares/authMiddleware.js';
import {
    registerUser,
    loginUser,
    forgotPassword,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserById,
    updateUser,
} from '../controllers/userControllers.js';
import {
    registerAuth1,
    registerAuth2,
    registerAuth3,
    auth1,
    auth2,
    auth3,
    checkUser,
    findUser,
} from '../controllers/authControllers.js';

const router = express();

// @decs protect means user need to be logged in
// @decs admin means only admin can on access routes

router.route('/').get(protect, admin, getUsers);
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);

// @desc this is for register section of website
router.route('/auth').post(checkUser);
router.route('/auth/v1').post(registerAuth1);
router.route('/auth/v2').post(registerAuth2);
router.route('/auth/v3').post(registerAuth3);

// @desc this is for forgot password section of website
router.route('/recover').post(findUser);
router.route('/recover-v1').post(auth1);
router.route('/recover-v2').post(auth2);
router.route('/recover-v3').post(auth3);
router.route('/forgotPassword').put(forgotPassword);

router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);
router.route('/:id').get(protect, admin, getUserById).put(updateUser);

export default router;
