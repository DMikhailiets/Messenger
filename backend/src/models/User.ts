import mongoose, { Schema, Document } from 'mongoose'
import validator from 'validator'

export interface IUser extends Document{
    email: string,
    fullname: string,
    password: string,
    confirmed: boolean,
    avatar: string,
    confirm_hash: string,
    last_seen: Date 
}

const UserSchema = new Schema({
    email: {
        type: String,
        validate: [validator.isEmail, 'Invalid email'],
        unique: true
    }, 
    avatar: String,
    confirm_hash: String,
    fullname: {
        type: String,
        required: 'fullname is required' 
    },
    password: {
        type: String,
        required: 'password is required' 
    },
    confirmed: {
        type: Boolean,
        default: false
    },
    last_seen: {
        type: Date,
        default: new Date()
    }

}, {
    timestamps: true
})

const UserModel = mongoose.model<IUser>('User', UserSchema);

export default UserModel
