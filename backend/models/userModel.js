import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Full name field is require'],
    },
    email: {
        type: String,
        required: [true, 'Email field is require'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password field is require'],
        minlength: 6,
        select: false,
    },
    question1: {
        type: String,
        required: [true, 'Question Field is required'],
    },
    answer1: {
        type: String,
        required: [true, 'Answer Field is required'],
    },
    question2: {
        type: String,
        required: [true, 'Question Field is required'],
    },
    answer2: {
        type: String,
        required: [true, 'Answer Field is required'],
    },
    question3: {
        type: String,
        required: [true, 'Question Field is required'],
    },
    answer3: {
        type: String,
        required: [true, 'Answer Field is required'],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.compareAnswer1 = async function (enteredKey) {
    return await bcrypt.compare(enteredKey, this.answer1);
};

userSchema.methods.compareAnswer2 = async function (enteredKey) {
    return await bcrypt.compare(enteredKey, this.answer2);
};
userSchema.methods.compareAnswer3 = async function (enteredKey) {
    return await bcrypt.compare(enteredKey, this.answer3);
};

userSchema.pre('save', async function (next) {
    if (
        !this.isModified('password') ||
        !this.isModified('answer1') ||
        !this.isModified('answer2') ||
        !this.isModified('answer3')
    ) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    this.answer1 = await bcrypt.hash(this.answer1, salt);
    this.answer2 = await bcrypt.hash(this.answer2, salt);
    this.answer3 = await bcrypt.hash(this.answer3, salt);
});

const User = mongoose.model('User', userSchema);

export default User;
