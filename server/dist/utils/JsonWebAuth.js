import jwt from 'jsonwebtoken';
export async function GenerateToken(UserData) {
    if (!UserData) {
        return null;
    }
    let JWTpayload = {
        id: UserData._id,
        email: UserData.email,
        firstname: UserData.firstName,
        lastname: UserData.lastName,
        dob: UserData.dob,
        phonenumber: UserData.phoneNumber
    };
    return jwt.sign(JWTpayload, process.env.JWT_SECRET);
}
export async function VerifyToken(token) {
    if (!token) {
        return null;
    }
    return jwt.verify(token, process.env.JWT_SECRET);
}
