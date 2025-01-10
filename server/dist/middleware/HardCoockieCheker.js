import { VerifyToken } from '../utils/JsonWebAuth.js';
export default async function HardCookieCheck(req, res, next) {
    const UidCookie = req.cookies?.uid;
    const { cookie } = req.body;
    const RequestUser = req.user;
    if (UidCookie) {
        const CookieChecker = await VerifyToken(cookie);
        if (CookieChecker) {
            req.user = CookieChecker;
            next();
        }
    }
    else if (RequestUser) {
        const CookieChecker = await VerifyToken(cookie);
        if (CookieChecker) {
            req.user = CookieChecker;
            next();
        }
    }
    else if (cookie) {
        const CookieChecker = await VerifyToken(cookie);
        if (CookieChecker) {
            req.user = CookieChecker;
            next();
        }
    }
    else {
        let payload = {
            status: "missing",
            message: "CookieDoseNotHave",
            transport: "LoginPage",
        };
        return res.json(payload);
    }
}
