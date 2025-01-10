import jwt from 'jsonwebtoken';

export async function GenerateToken(UserData: any) {
    if(!UserData){
        return null
    }

    let JWTpayload = {
        id: UserData._id,
        email: UserData.email,
        firstname: UserData.firstName,
        lastname: UserData.lastName,
        dob: UserData.dob,
        phonenumber: UserData.phoneNumber
    }
    return jwt.sign(JWTpayload as object, process.env.JWT_SECRET as string);
}

export async function VerifyToken(token: string) {
    if(!token){
        return null
    }
    return jwt.verify(token, process.env.JWT_SECRET as string);
}