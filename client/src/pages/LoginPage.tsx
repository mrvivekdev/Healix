import * as yup from 'yup';
import Coookie from 'js-cookie';
import {useFormik} from 'formik'
import axios, { AxiosResponse } from 'axios'
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AppContext } from '../utils/GenrealContext';

export default function Login(){
    const {setCookie, setUser} = useContext<any>(AppContext);

    const [data, setData] = useState<AxiosResponse | null>(null);

    const YupSchema = yup.object({
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
        agreeToTerms: yup.bool().oneOf([true], 'You must agree to the terms and conditions').required('Terms must be accepted'),
    });

    async function LoginApiCall(values: any){
        try {
            const PostCall: AxiosResponse = await axios.post(`${import.meta.env.VITE_SERVER_API_CALL}/user/login/`, values) 
            setData(PostCall);
        
            if(data?.data?.status === "success"){
                Coookie.set("uid", data?.data.cookie);
                setCookie(data?.data.cookie);
                setUser(data?.data.user);
                resetForm();
            }

        } catch (error) {
            console.error('Error during registration:', error);
        }    
    }

    const {values, handleBlur, handleChange, touched, errors, handleSubmit, resetForm} = useFormik({
        initialValues: {
            email: '',
            password: '',
            agreeToTerms: false,
        },
        validationSchema: YupSchema,
        onSubmit: async(values)=>{
            await LoginApiCall(values);
        }
    });

    useEffect(()=>{
        document.title = "Login - Healix"
    }, [])

    return(
        <>
            <div className="h-screen w-screen bg-purple-950 p-6 lg:p-10 flex flex-row">
                <div className="flex flex-col items-center">
                    <h1 className="select-none m-0 hidden lg:flex bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text text-[300px] font-extrabold" >Login</h1>
                    <h1 className="select-none m-0 hidden lg:flex bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text text-[300px] font-extrabold mr-3" >Healix</h1>
                </div>

                <div className="h-full w-full p-5 bg-white rounded-xl shadow-lg lg:w-2/3">

                    <form onSubmit={handleSubmit} className="h-full w-full flex flex-col justify-center items-center pt-6 lg:pt-12">
                        <h1 className="text-4xl font-extrabold text-center text-black mb-10">Login</h1>

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
                        {data?.data.status === "error" && (
                            <div className="text-red-500 m-0">
                                {data?.data.message}
                            </div>
                        )}

                        <div className="flex items-center mt-1 mb-3">
                            <input
                                type="checkbox"
                                id="terms"
                                name="agreeToTerms"
                                value={values.agreeToTerms.toString()}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="terms" className="text-sm text-gray-600">
                                I agree to the{' '}
                                <Link to="/terms" className="text-blue-500 hover:underline">
                                    Terms and Conditions
                                </Link>
                            </label>
                        </div>
                        {touched.agreeToTerms && errors.agreeToTerms && (
                            <div className="text-red-500 m-0">
                                {errors.agreeToTerms}
                            </div>
                        )}

                        <button type='submit' className="border border-black rounded-lg text-l px-2 py-2 w-2/5 lg:w-1/6 lg:px-5 lg:py-2 font-bold hover:bg-black hover:text-white hover:scale-110 transition ease-in-out delay-200">Login</button>

                        <span className="text-gray-600 mt-4">
                            Don't have an account? 
                            <Link to="/Register" className="text-blue-500 hover:underline ml-1">Create</Link>
                        </span>
                    </form>
                </div>
            </div>
        </>
    )
}
