import * as yup from 'yup';
import {useFormik} from 'formik'
import axios, { AxiosResponse } from 'axios'
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { AppContext } from '../utils/GenrealContext';


export default function Matrics(): JSX.Element{
    const navigate = useNavigate();
    const {cookie} = useContext<any>(AppContext);
    
    const [data, setData] = useState<AxiosResponse | null>(null);

    const YupSchema = yup.object({
        date: yup.date(),
        weight: yup.number().required('Weight is required'),
        height: yup.number().required('Height is required'),
        bloodPressure: yup.string(),
        heartRate: yup.number(),        
    });

    async function HistoryApiCall(values: any){
        try {
            const PostCall: AxiosResponse = await axios.post(`${import.meta.env.VITE_SERVER_API_CALL}/medical/healthmetrics/`, values) 
            setData(PostCall);
        
            if(data?.data?.status === "success"){
                toast.success("Submission Successful!", {                    
                    position: "top-right",
                    autoClose: 3000,
                });
                navigate('/Home'); 
                resetForm();
            }

        } catch (error: any) {
            toast.error(
                error.response?.data?.message || "Server error occurred during registration.",
                    {
                        position: "top-right", // Use string for position
                        autoClose: 5000,
                    }
            );
            console.error('Error during registration:', error);
        }    
    }

    const {values, handleBlur, handleChange, touched, errors, handleSubmit, resetForm} = useFormik({
        initialValues: {
            date: '',
            weight: '',
            height: '',
            bloodPressure: '',
            heartRate: '',            
            cookie: cookie,
        },
        validationSchema: YupSchema,
        onSubmit: async(values)=>{
            await HistoryApiCall(values);
        }
    });

    useEffect(()=>{
        document.title = "History - Healix"
    }, [])

    if(!cookie){
        navigate('/Login');
    }

    return(
        <>
            <div className="h-screen w-screen bg-purple-950 p-6 lg:p-10 flex flex-row">
                <div className="flex flex-col items-center">
                    <h1 className="select-none m-0 hidden lg:flex bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text text-[250px] font-extrabold" >Matrics</h1>
                    <h1 className="select-none m-0 hidden lg:flex bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text text-[300px] font-extrabold" >Healix</h1>
                </div>

                <div className="h-full w-full p-5 bg-white rounded-xl shadow-lg lg:w-2/3">
                
                    <form onSubmit={handleSubmit} className="h-full w-full flex flex-col justify-center items-center pt-6 lg:pt-12">
                        <h1 className="text-4xl font-extrabold text-center text-black mb-10">Matrics</h1>

                        <input 
                            placeholder="Date" 
                            type="date" 
                            name="date"
                            value={values.date}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={`border border-black rounded-lg p-3 w-full mt-2 mb-4 lg:w-1/2 lg:mx-auto lg:block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                errors.date && touched.date ? 'border-3 border-red-500 text-red-500' : ''
                            }`}  
                        />
                        {touched.date && errors.date && (
                            <div className="text-red-500 m-0">
                                {errors.date}
                            </div>
                        )}

                        <input 
                            placeholder="Weight" 
                            type="number" 
                            name="weight" 
                            value={values.weight}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={`border border-black rounded-lg p-3 w-full mt-2 mb-4 lg:w-1/2 lg:mx-auto lg:block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                errors.weight && touched.weight ? 'border-3 border-red-500 text-red-500' : ''
                            }`}                              
                        />
                        {touched.weight && errors.weight && (
                            <div className="text-red-500 m-0">
                                {errors.weight}
                            </div>
                        )}

                        <input 
                            placeholder="Height" 
                            type="number" 
                            name="height" 
                            value={values.height}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={`border border-black rounded-lg p-3 w-full mt-2 mb-4 lg:w-1/2 lg:mx-auto lg:block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                errors.height && touched.height ? 'border-3 border-red-500 text-red-500' : ''
                            }`}  
                        />
                        {touched.height && errors.height && (
                            <div className="text-red-500 m-0">
                                {errors.height}
                            </div>
                        )}

                        <input 
                            placeholder="Blood Pressure" 
                            type="text"
                            name="bloodPressure"
                            value={values.bloodPressure}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={`border border-black rounded-lg p-3 w-full mt-2 mb-4 lg:w-1/2 lg:mx-auto lg:block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                errors.bloodPressure && touched.bloodPressure ? 'border-3 border-red-500 text-red-500' : ''
                            }`}  
                        />
                        {touched.bloodPressure && errors.bloodPressure && (
                            <div className="text-red-500 m-0">
                                {errors.bloodPressure}
                            </div>
                        )}

                        <input 
                            placeholder="Heart Rate" 
                            type="number" 
                            name="heartRate"
                            value={values.heartRate}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={`border border-black rounded-lg p-3 w-full mt-2 mb-4 lg:w-1/2 lg:mx-auto lg:block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                errors.heartRate && touched.heartRate ? 'border-3 border-red-500 text-red-500' : ''
                            }`}  
                        />
                        {touched.heartRate && errors.heartRate && (
                            <div className="text-red-500 m-0">
                                {errors.heartRate}
                            </div>
                        )}   

                        <button type='submit' className="border border-black rounded-lg text-l px-2 py-2 w-2/5 lg:w-1/6 lg:px-5 lg:py-2 font-bold hover:bg-black hover:text-white hover:scale-110 transition ease-in-out delay-200">Submit</button>
                        <ToastContainer 
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick={false}
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                            transition={Bounce}
                        />
                    </form>
                </div>
            </div>
        </>
    )
}