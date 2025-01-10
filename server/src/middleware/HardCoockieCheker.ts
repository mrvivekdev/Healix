import { Request, Response, NextFunction } from 'express';
import {PayloadType} from '../utils/TypesAll.js'
import {CustomRequest} from "./CookieCheker.js"
import {VerifyToken} from '../utils/JsonWebAuth.js';

export default async function HardCookieCheck(req: CustomRequest, res: Response, next: NextFunction): Promise<any> {
    const UidCookie = req.cookies?.uid;
    const {cookie} = req.body;
    const RequestUser = req.user;

    if(UidCookie){
        const CookieChecker = await VerifyToken(cookie);
        if(CookieChecker as any){
            req.user = CookieChecker;
            next();
        }

    } else if(RequestUser){
        const CookieChecker = await VerifyToken(cookie);
        if(CookieChecker as any){
            req.user = CookieChecker;
            next();
        }

    } else if(cookie){
        const CookieChecker = await VerifyToken(cookie);
        if(CookieChecker as any){
            req.user = CookieChecker;
            next();
        }

    } else{
        let payload: PayloadType = {
            status: "missing",
            message: "CookieDoseNotHave",
            transport: "LoginPage",
        }
        return res.json(payload);
    }
}

