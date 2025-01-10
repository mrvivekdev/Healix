import { Request, Response } from "express";
import bcrypt from 'bcryptjs';

import { PayloadType } from '../utils/TypesAll.js'
import UserModel from '../models/UserModel.js'
import { GenerateToken } from '../utils/JsonWebAuth.js'

const saltRounds = process.env.HASH_SALT || 10 as number;

/*
 * Creates a new user account in the database
 * - Checks if all required user details are provided
 * - Hashes the password for security
 * - Saves user data to database
 * - Handles errors for duplicate emails and invalid data
*/
export async function HandelCreateUser(req: Request, res: Response): Promise<any> {
    let newPassword;
    const { firstName, lastName, email, password, dob, gender, phoneNumber } = req.body

    let payload: PayloadType = {
        status: "pending",
        message: "ReqIsInPending"
    }

    if (!firstName || !lastName || !email || !password || !dob || !gender || !phoneNumber){
        payload = {
            status: "error",
            message: "ParameterMissing"
        }
        return res.status(400).json(payload)
    } 

    try {
        if(password){
            const hash = await bcrypt.hash(password, saltRounds)
            if(hash){
                newPassword = hash
            }
        }

        const userCreate = await UserModel.create({
            firstName,
            lastName,
            email,
            password: newPassword,
            dob,
            gender,
            phoneNumber
        });

        payload = {
            status: "success",
            message: "UserCreated",
            user: userCreate
        }
        return res.status(200).json(payload);

    } catch (error: any) {

        if (error.code === 11000) {
            payload = {
                status: "error", 
                message: "DuplicateEmail",
                error: "Email already exists"
            }
            return res.status(409).json(payload);
        }
        if (error.name === 'ValidationError') {
            payload = {
                status: "error",
                message: "ValidationError",
                error: error.message
            }
            return res.status(400).json(payload);
        }
        payload = {
            status: "error",
            message: "DatabaseError",
            error: error.message
        }
        return res.status(500).json(payload);
    }
}


/*
 * Authenticates user login credentials
 * - Checks if email and password are provided
 * - Finds user by email in database
 * - Verifies password hash matches stored hash
 * - Returns user data on successful login
 * - Handles database errors and invalid credentials
*/
export async function HandelLogin(req: Request, res: Response): Promise<any> {
    const { email, password } = req.body;

    let payload: PayloadType = {
        status: "pending",
        message: "ReqIsInPending"
    }

    if(!email || !password){
        payload = {
            status: "error",
            message: "ParameterMissing"
        }
        return res.status(400).json(payload)
    }

    try {
        const userCheck = await UserModel.findOne({ email: email });
        if(userCheck){
            const hashCheck = await bcrypt.compare(password, userCheck.password as string);

            if(hashCheck as boolean){
                const token = await GenerateToken(userCheck);

                payload = {
                    status: "success",
                    message: "LoginSuccess",
                    user: userCheck,
                    cookie: token,
                }
                return res.status(200).json(payload);
            }
        }

    } catch (error: any) {
        payload = {
            status: "error", 
            message: "DatabaseError",
            error: error.message
        }
        return res.status(500).json(payload);
    }
}