import mongoose, { Schema } from "mongoose";
import {IMedicalHistory} from '../utils/DataInterface.js'

const medicalHistory: Schema<IMedicalHistory> = new  Schema({
    user: { type: Schema.Types.ObjectId, ref: 'users', required: true, unique: true },
    condition: {type: String, required: false},
    diagnosisDate: {type: String, required: false}, 
    medications: [{type: String, required: false}],
    treatments: [{type: String, required: false}],
    doctorNotes: {type: String, required: false}
});

export default mongoose.model<IMedicalHistory>('History', medicalHistory);

// {
//     "user": "65a4f2d8b6e351f0db123456",
//     "condition": "Hypertension",
//     "diagnosisDate": "2024-01-15",
//     "medications": ["Lisinopril", "Amlodipine"],
//     "treatments": ["Diet modification", "Regular exercise"],
//     "doctorNotes": "Patient responding well to medication regimen"
// }
