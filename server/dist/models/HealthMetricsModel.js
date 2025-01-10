import mongoose, { Schema } from "mongoose";
const healthMetrics = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'users', required: true, unique: true },
    weight: { type: Number, required: true },
    height: { type: Number, required: true },
    bloodPressure: { type: String, required: false },
    heartRate: { type: Number, required: false }
});
export default mongoose.model('Metrics', healthMetrics);
// {
//     "user": "65a4f2d8b6e351f0db123456",
//     "weight": 75.5,
//     "height": 175,
//     "bloodPressure": "120/80",
//     "heartRate": 72
// }
