import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
const Application = express();
const port = process.env.PORT || 3000;
import mongoDBConnation from './utils/MongoConnation.js';
import UserRoute from './routes/UserRoute.js';
import MediaclInfoRoute from './routes/UserMedicalHistory.js';
import IssueRoute from './routes/IssueRoute.js';
import { CheckAuthCookie, CookierByBrowser } from './middleware/CookieCheker.js';
import HardCookieCheck from './middleware/HardCoockieCheker.js';
const CorsUrl = [
    "http://localhost:5172"
];
const corsOptions = {
    origin: CorsUrl,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
};
mongoDBConnation(process.env.MONGODB_URL).then(() => {
    console.log("MongoDB connected");
});
// Meddlewere 
Application.use(cors());
Application.use(express.json());
Application.use(express.urlencoded({ extended: true }));
Application.use(express.static('public'));
Application.use(CookierByBrowser);
Application.use(CheckAuthCookie);
// Post API Route
Application.use('/user', UserRoute);
Application.use('/medical', MediaclInfoRoute);
Application.use('/issue', HardCookieCheck, IssueRoute);
Application.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
