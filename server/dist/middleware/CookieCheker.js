import { VerifyToken } from '../utils/JsonWebAuth.js';
export async function CheckAuthCookie(req, res, next) {
    const { cookie } = req.body;
    if (cookie) {
        const CookieChecker = await VerifyToken(cookie);
        if (CookieChecker) {
            req.user = CookieChecker;
            next();
        }
    }
    else {
        next();
    }
}
export async function CookierByBrowser(req, res, next) {
    const cookie = req.cookies?.uid;
    if (cookie) {
        const CookieChecker = await VerifyToken(cookie);
        if (CookieChecker) {
            req.user = CookieChecker;
            next();
        }
    }
    else {
        next();
    }
}
