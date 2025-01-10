import { Request, Response, NextFunction } from 'express';
import {VerifyToken} from '../utils/JsonWebAuth.js';

export interface CustomRequest extends Request {
    user?: any,
}

export async function CheckAuthCookie(req: CustomRequest, res: Response, next: NextFunction){
    const {cookie} = req.body;

    if(cookie){
        const CookieChecker = await VerifyToken(cookie);
        if(CookieChecker as any){
            req.user = CookieChecker;
            next();
        }
    } else {
        next();
    }
}

export async function CookierByBrowser(req: CustomRequest, res: Response, next: NextFunction){
    const cookie = req.cookies?.uid;

    if(cookie){
        const CookieChecker = await VerifyToken(cookie);
        if(CookieChecker as any){
            req.user = CookieChecker;
            next();
        }
    } else {
        next();
    }
}