interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    dob: string;
    gender: 'male' | 'female' | 'other';
    phoneNumber: number;
}

interface IMedicalHistory {
    user: string | any;
    condition?: string;
    diagnosisDate?: string;
    medications?: string[];
    treatments?: string[];
    doctorNotes?: string;
}

interface IHealthMetrics {
    user: string | any;
    weight: number;
    height: number;
    bloodPressure?: string;
    heartRate?: number;
}

export { IUser, IMedicalHistory, IHealthMetrics };