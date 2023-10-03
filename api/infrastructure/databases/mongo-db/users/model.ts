import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    }
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
