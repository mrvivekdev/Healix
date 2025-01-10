import mongoose, { Schema } from "mongoose";
import {IUser} from '../utils/DataInterface'

const userSchema: Schema<IUser> = new  Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    dob: {type: String, required: true},
    gender: {type: String, required: true},
    phoneNumber: {type: Number, required: true}
})

export default mongoose.model<IUser>('User', userSchema);

// {
//     "firstname": "vivek",
//     "lastname": "kathrotiya",
//     "email": "vivekkathrotiya911@gmail.com",
//     "password": "vivek",
//     "dob": "12/12/2024",
//     "gender": "male",
//     "phonennumber": 9099125675
// }