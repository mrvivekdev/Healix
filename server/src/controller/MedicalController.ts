import { Request, Response } from 'express';
import { CustomRequest } from '../middleware/CookieCheker.js'
import medicalHistory from '../models/HandelHistroyModel.js';
import healthMetrics from '../models/HealthMetricsModel.js'
import { PayloadType } from '../utils/TypesAll.js'



// This controller function handles creating a new medical history record:
// 1. Validates required fields (condition, diagnosisDate, medications, treatments, doctorNotes)
// 2. Creates new medical history record in database with provided data
// 3. Returns appropriate response based on operation result:
//    - 201: Successfully created
//    - 400: Missing parameters or validation error
//    - 409: Record already exists
//    - 500: Server error
async function getMedicalHistory(req: CustomRequest, res: Response): Promise<any> {
    const { condition, diagnosisDate, medications, treatments, doctorNotes, userID } = req.body;
    
    let payload: PayloadType = {
      status: "pending",
      message: "ReqIsInPending",
      user: req.user
    }

    if(!condition || !diagnosisDate || !medications || !treatments || !doctorNotes ){
        payload = {
            status: "error",
            message: "ParameterMissing",
            user: req.user
        }
        return res.status(400).json(payload)
    }

    try {
        const newHistroy = await medicalHistory.create({
            condition,
            diagnosisDate,
            medications,
            treatments,
            doctorNotes,
            user: userID
        })

        payload = {
            status: "success",
            message: "MedicalHistoryCreated",
            user: req.user,
            data: newHistroy
        }
        return res.status(201).json(payload)
        
    } catch (error: any) {
        // Handle duplicate user error (unique constraint violation)
        if (error.code === 11000) {
            payload = {
                status: "error",
                message: "MedicalHistoryAlreadyExists",
                user: req.user
            }
            return res.status(409).json(payload)
        }

        // Handle validation errors
        if (error.name === 'ValidationError') {
            payload = {
                status: "error",
                message: "ValidationError",
                user: req.user,
            }
            return res.status(400).json(payload)
        }

        // Handle other errors
        payload = {
            status: "error",
            message: "InternalServerError",
            user: req.user
        }
        return res.status(500).json(payload)
    }
}



// Health Metrics Controller:  
// - Records health measurements like weight, height, blood pressure etc
// - Validates required fields (weight & height mandatory)
// - Handles duplicate records and validation errors
// - Returns appropriate status codes (201, 400, 409, 500)
async function getHealthMetrics(req: CustomRequest, res: Response): Promise<any> {
    const { date, weight, height, bloodPressure, heartRate, userID } = req.body;

    let payload: PayloadType = {
        status: "pending",
        message: "ReqIsInPending",
        user: req.user
    }

    if(!weight || !height){
        payload = {
            status: "error",
            message: "ParameterMissing",
            user: req.user
        }
        return res.status(400).json(payload)
    }

    try {
        const MetricsData = await healthMetrics.create({
            user: userID,
            date,
            weight,
            height,
            bloodPressure,
            heartRate
        }) 

        payload = {
            status: "success",
            message: "HealthMetricsCreated",
            user: req.user,
            data: MetricsData
        }
        return res.status(201).json(payload)
        
    } catch (error: any) {
        // Handle duplicate key error
        if (error.code === 11000) {
            payload = {
                status: "error", 
                message: "HealthMetricsAlreadyExists",
                user: req.user
            }
            return res.status(409).json(payload)
        }

        // Handle validation errors
        if (error.name === 'ValidationError') {
            payload = {
                status: "error",
                message: "ValidationError", 
                user: req.user
            }
            return res.status(400).json(payload)
        }

        // Handle cast errors (invalid data types)
        if (error.name === 'CastError') {
            payload = {
                status: "error",
                message: "InvalidDataFormat",
                user: req.user
            }
            return res.status(400).json(payload)
        }

        // Handle other errors
        payload = {
            status: "error",
            message: "InternalServerError",
            user: req.user
        }
        return res.status(500).json(payload)
    }
}

export { getMedicalHistory, getHealthMetrics }