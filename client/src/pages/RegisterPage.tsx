import * as yup from 'yup';
import {useFormik} from 'formik'
import axios, { AxiosResponse } from 'axios'
import { useState } from 'react';
import {Link} from 'react-router-dom';

export default function Register(){
    const [data, setData] = useState<AxiosResponse | null>(null);

    const YupSchema = yup.object({
        firstName: yup.string().required('FirstName is required'),
        lastName: yup.string().required('LastName is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        phoneNumber: yup.string().required('Phone is required'),
        dob: yup.date().required('Date of Birth is required'),
        gender: yup.string().required('Gender is required'),
        password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
        confirmPassword: yup.string().required('Confirm Password is required').oneOf([yup.ref('password')], 'Passwords must match'),
    });

    async function RegisterApiCall(values: any){
        try {
            const PostCall: AxiosResponse = await axios.post(`${import.meta.env.VITE_SERVER_API_CALL}/user/create/`, values) 
            setData(PostCall);
        
            if(data?.data.transport === "LoginPage" && data?.data?.status === "success"){
                console.log('Form submitted successfully:', data);
                resetForm();
            }

        } catch (error) {
            console.error('Error during registration:', error);
        }    
    }

    const {values, handleBlur, handleChange, touched, errors, handleSubmit, resetForm} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '', 
            email: '',
            phoneNumber: '',
            dob: '',
            gender: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: YupSchema,
        onSubmit: async(values)=>{
            await RegisterApiCall(values);
        }
    });

    return(
        <>
            <div className="h-screen w-screen bg-purple-950 p-6 lg:p-10 flex flex-row">
                <div className="h-full w-full p-5 bg-white rounded-xl shadow-lg lg:w-2/3">
                
                    <form onSubmit={handleSubmit} className="h-full w-full flex flex-col justify-center items-center pt-6 lg:pt-12">
                        <h1 className="text-4xl font-extrabold text-center text-black mb-10">Register</h1>

                        <input 
                            placeholder="First Name" 
                            type="text" 
                            name="firstName"
                            value={values.firstName}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={`border border-black rounded-lg p-3 w-full mt-2 mb-4 lg:w-1/2 lg:mx-auto lg:block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                errors.firstName && touched.firstName ? 'border-3 border-red-500 text-red-500' : ''
                            }`}  
                        />
                        {touched.firstName && errors.firstName && (
                            <div className="text-red-500 m-0">
                                {errors.firstName}
                            </div>
                        )}

                        <input 
                            placeholder="Last Name" 
                            type="text" 
                            name="lastName" 
                            value={values.lastName}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={`border border-black rounded-lg p-3 w-full mt-2 mb-4 lg:w-1/2 lg:mx-auto lg:block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                errors.lastName && touched.lastName ? 'border-3 border-red-500 text-red-500' : ''
                            }`}                              
                        />
                        {touched.lastName && errors.lastName && (
                            <div className="text-red-500 m-0">
                                {errors.lastName}
                            </div>
                        )}

                        <input 
                            placeholder="Email" 
                            type="email" 
                            name="email" 
                            value={values.email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={`border border-black rounded-lg p-3 w-full mt-2 mb-4 lg:w-1/2 lg:mx-auto lg:block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                errors.email && touched.email ? 'border-3 border-red-500 text-red-500' : ''
                            }`}  
                        />
                        {touched.email && errors.email && (
                            <div className="text-red-500 m-0">
                                {errors.email}
                            </div>
                        )}

                        <input 
                            placeholder="Phone Number" 
                            type="tel" 
                            name="phoneNumber" 
                            value={values.phoneNumber}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={`border border-black rounded-lg p-3 w-full mt-2 mb-4 lg:w-1/2 lg:mx-auto lg:block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                errors.phoneNumber && touched.phoneNumber ? 'border-3 border-red-500 text-red-500' : ''
                            }`}  
                        />
                        {touched.phoneNumber && errors.phoneNumber && (
                            <div className="text-red-500 m-0">
                                {errors.phoneNumber}
                            </div>
                        )}

                        <input 
                            placeholder="Date of Birth" 
                            type="date"
                            name="dob"
                            value={values.dob}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={`border border-black rounded-lg p-3 w-full mt-2 mb-4 lg:w-1/2 lg:mx-auto lg:block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                errors.dob && touched.dob ? 'border-3 border-red-500 text-red-500' : ''
                            }`}  
                        />
                        {touched.dob && errors.dob && (
                            <div className="text-red-500 m-0">
                                {errors.dob}
                            </div>
                        )}

                        <input 
                            placeholder="Gender" 
                            type="text" 
                            name="gender"
                            value={values.gender}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={`border border-black rounded-lg p-3 w-full mt-2 mb-4 lg:w-1/2 lg:mx-auto lg:block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                errors.gender && touched.gender ? 'border-3 border-red-500 text-red-500' : ''
                            }`}  
                        />
                        {touched.gender && errors.gender && (
                            <div className="text-red-500 m-0">
                                {errors.gender}
                            </div>
                        )}

                        <input 
                            placeholder="Password" 
                            type="password" 
                            name="password"
                            value={values.password}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={`border border-black rounded-lg p-3 w-full mt-2 mb-4 lg:w-1/2 lg:mx-auto lg:block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                errors.password && touched.password ? 'border-3 border-red-500 text-red-500' : ''
                            }`}  
                        />
                        {touched.password && errors.password && (
                            <div className="text-red-500 m-0">
                                {errors.password}
                            </div>
                        )}

                        <input 
                            placeholder="Confirm Password" 
                            type="password" 
                            name="confirmPassword"
                            value={values.confirmPassword}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={`border border-black rounded-lg p-3 w-full mt-2 mb-4 lg:w-1/2 lg:mx-auto lg:block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                errors.confirmPassword && touched.confirmPassword ? 'border-3 border-red-500 text-red-500' : ''
                            }`}  
                        />
                        {touched.confirmPassword && errors.confirmPassword && (
                            <div className="text-red-500 m-0">
                                {errors.confirmPassword}
                            </div>
                        )}

                        <button type='submit' className="border border-black rounded-lg text-l px-2 py-2 w-2/5 lg:w-1/6 lg:px-5 lg:py-2 font-bold hover:bg-black hover:text-white hover:scale-110 transition ease-in-out delay-200">Sing up</button>

                        <span className="text-gray-600 mt-4">
                            Already have an account? 
                            <Link to="/login" className="text-blue-500 hover:underline ml-1">Login</Link>
                        </span>
                    </form>
                </div>

                <div className="flex flex-col items-center">
                    <h1 className="select-none m-0 hidden lg:flex bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text text-[300px] font-extrabold" >Hello</h1>
                    <h1 className="select-none m-0 hidden lg:flex bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text text-[300px] font-extrabold" >Healix</h1>
                </div>
            </div>
        </>
    )
}
