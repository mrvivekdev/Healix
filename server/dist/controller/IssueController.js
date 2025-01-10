import medicalHistory from '../models/HandelHistroyModel.js';
import healthMetrics from '../models/HealthMetricsModel.js';
import { GoogleGenerativeAI } from "@google/generative-ai";
async function NormalIssueHandler(req, res) {
    const { Symptoms, Temperature, BloodPressure, PulseRate, Allergies, Triggers, Location, Diabetes, Duration, ColdAndFlu, Headaches, StomachIssues, SkinIssues, Sleep, Diet, Prompt } = req.body;
    let payload = {
        status: "pending",
        message: "ReqIsInPending",
        user: req.user
    };
    if (!Symptoms || !Temperature || !BloodPressure || !PulseRate || !Allergies || !Triggers || !Location || !Diabetes || !Duration || !ColdAndFlu || !Headaches || !StomachIssues || !SkinIssues || !Sleep || !Diet || !Prompt) {
        payload = {
            status: "error",
            message: "ParameterMissing",
            user: req.user
        };
        return res.status(400).json(payload);
    }
    try {
        const Histroy = await medicalHistory.findOne({ user: req.user._id });
        const Metrics = await healthMetrics.findOne({ user: req.user._id });
        const RequestPrompt = `I am experiencing health issues and need advice. Here are the details of my condition:

            Hello, I’m ${req.user.firstname} from ${Location}. I am facing the following issue: ${Prompt}.  
            Here is a detailed list of symptoms and related information:  
            - **Symptoms**: ${Symptoms}  
            - **Temperature**: ${Temperature}  
            - **Blood Pressure**: ${BloodPressure}  
            - **Pulse Rate**: ${PulseRate}  
            - **Allergies**: ${Allergies}  
            - **Triggers**: ${Triggers}  
            - **Diabetes**: ${Diabetes}  
            - **Cold and Flu Symptoms**: ${ColdAndFlu}  
            - **Headaches**: ${Headaches}  
            - **Stomach Issues**: ${StomachIssues}  
            - **Skin Issues**: ${SkinIssues}  

            These symptoms started ${Duration} ago.  
            Additionally:  
            - **Sleep**: I’ve been getting ${Sleep} hours of sleep recently.  
            - **Diet**: My recent diet includes ${Diet}.  

            **Medical History**:  
            - Condition: ${Histroy?.condition}  
            - Diagnosis Date: ${Histroy?.diagnosisDate}  
            - Medications: ${Histroy?.medications?.join(', ') ?? 'No medication data available'}  
            - Treatments: ${Histroy?.treatments?.join(', ') ?? 'No treatment data available'}  
            - Doctor Notes: ${Histroy?.doctorNotes ?? 'No doctor notes available'}  

            **Health Metrics**:  
            - Weight: ${Metrics?.weight ?? 'No weight data available'} kg  
            - Height: ${Metrics?.height ?? 'No height data available'} cm  
            - Blood Pressure: ${Metrics?.bloodPressure ?? 'No blood pressure data available'}  
            - Heart Rate: ${Metrics?.heartRate ?? 'No heart rate data available'} bpm  

            Please provide some solutions, advice, and tips for managing my condition.`;
        const genAI = new GoogleGenerativeAI(process.env.API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent([RequestPrompt]);
        console.log("Ai Result", result);
        payload = {
            status: "success",
            message: "GenAiIssueAnswer",
            user: req.user,
            result: result,
        };
        return res.status(201).json(payload);
    }
    catch (error) {
        // Handle duplicate key error
        if (error.code === 11000) {
            payload = {
                status: "error",
                message: "HealthMetricsAlreadyExists",
                user: req.user
            };
            return res.status(409).json(payload);
        }
        // Handle validation errors
        if (error.name === 'ValidationError') {
            payload = {
                status: "error",
                message: "ValidationError",
                user: req.user
            };
            return res.status(400).json(payload);
        }
        // Handle cast errors (invalid data types)
        if (error.name === 'CastError') {
            payload = {
                status: "error",
                message: "InvalidDataFormat",
                user: req.user
            };
            return res.status(400).json(payload);
        }
        // Handle other errors
        payload = {
            status: "error",
            message: "InternalServerError",
            user: req.user
        };
        return res.status(500).json(payload);
    }
}
export { NormalIssueHandler };
// console.log(`
// ================= Health Data =================
// Symptoms       : ${Symptoms}
// Temperature    : ${Temperature}
// Blood Pressure : ${BloodPressure}
// Pulse Rate     : ${PulseRate}
// Allergies      : ${Allergies}
// Triggers       : ${Triggers}
// Location       : ${Location}
// Diabetes       : ${Diabetes ? "Yes" : "No"}
// Duration       : ${Duration}
// Cold/Flu       : ${ColdAndFlu}
// Headaches      : ${Headaches}
// Stomach Issues : ${StomachIssues}
// Skin Issues    : ${SkinIssues}
// Sleep          : ${Sleep}
// Diet           : ${Diet}
// Prompt         : ${Prompt}
// ================================================
// `);
