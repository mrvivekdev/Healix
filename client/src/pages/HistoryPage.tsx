import * as yup from 'yup';
import {useFormik} from 'formik'
import axios, { AxiosResponse } from 'axios'
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { AppContext } from '../utils/GenrealContext';


export default function History(): JSX.Element{
    const navigate = useNavigate();
    const {cookie} = useContext<any>(AppContext);
    
    const [data, setData] = useState<AxiosResponse | null>(null);

    const YupSchema = yup.object({
        condition: yup.string().required('Condition is required'),
        medications: yup.string().required('Medications is required'),
        treatments: yup.string().required('Treatments is required'),
        diagnosisDate: yup.date().required('Diagnosis Date is required'),
        doctorNotes: yup.string().required('Doctor Notes is required'),    
    });

    async function HistoryApiCall(values: any){
        try {
            const PostCall: AxiosResponse = await axios.post(`${import.meta.env.VITE_SERVER_API_CALL}/medical/mediaclhistroy/`, values) 
            setData(PostCall);
        
            if(data?.data?.status === "success"){
                toast.success("Submission Successful!", {                    
                    position: "top-right",
                    autoClose: 3000,
                });
                navigate('/Matrics'); 
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
            condition: '',
            medications: '',
            treatments: '',
            diagnosisDate: '',
            doctorNotes: '',
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
                <div className="h-full w-full p-5 bg-white rounded-xl shadow-lg lg:w-2/3">
                
                    <form onSubmit={handleSubmit} className="h-full w-full flex flex-col justify-center items-center pt-6 lg:pt-12">
                        <h1 className="text-4xl font-extrabold text-center text-black mb-10">History</h1>

                        <input 
                            placeholder="Condition" 
                            type="text" 
                            name="condition"
                            value={values.condition}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={`border border-black rounded-lg p-3 w-full mt-2 mb-4 lg:w-1/2 lg:mx-auto lg:block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                errors.condition && touched.condition ? 'border-3 border-red-500 text-red-500' : ''
                            }`}  
                        />
                        {touched.condition && errors.condition && (
                            <div className="text-red-500 m-0">
                                {errors.condition}
                            </div>
                        )}

                        <input 
                            placeholder="Medications" 
                            type="text" 
                            name="medications" 
                            value={values.medications}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={`border border-black rounded-lg p-3 w-full mt-2 mb-4 lg:w-1/2 lg:mx-auto lg:block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                errors.medications && touched.medications ? 'border-3 border-red-500 text-red-500' : ''
                            }`}                              
                        />
                        {touched.medications && errors.medications && (
                            <div className="text-red-500 m-0">
                                {errors.medications}
                            </div>
                        )}

                        <input 
                            placeholder="Treatments" 
                            type="text" 
                            name="treatments" 
                            value={values.treatments}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={`border border-black rounded-lg p-3 w-full mt-2 mb-4 lg:w-1/2 lg:mx-auto lg:block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                errors.treatments && touched.treatments ? 'border-3 border-red-500 text-red-500' : ''
                            }`}  
                        />
                        {touched.treatments && errors.treatments && (
                            <div className="text-red-500 m-0">
                                {errors.treatments}
                            </div>
                        )}

                        <input 
                            placeholder="Diagnosis Date" 
                            type="date"
                            name="diagnosisDate"
                            value={values.diagnosisDate}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={`border border-black rounded-lg p-3 w-full mt-2 mb-4 lg:w-1/2 lg:mx-auto lg:block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                errors.diagnosisDate && touched.diagnosisDate ? 'border-3 border-red-500 text-red-500' : ''
                            }`}  
                        />
                        {touched.diagnosisDate && errors.diagnosisDate && (
                            <div className="text-red-500 m-0">
                                {errors.diagnosisDate}
                            </div>
                        )}

                        <input 
                            placeholder="Doctor Notes" 
                            type="text" 
                            name="doctorNotes"
                            value={values.doctorNotes}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={`border border-black rounded-lg p-3 w-full mt-2 mb-4 lg:w-1/2 lg:mx-auto lg:block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                errors.doctorNotes && touched.doctorNotes ? 'border-3 border-red-500 text-red-500' : ''
                            }`}  
                        />
                        {touched.doctorNotes && errors.doctorNotes && (
                            <div className="text-red-500 m-0">
                                {errors.doctorNotes}
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

                <div className="flex flex-col items-center">
                    <h1 className="select-none m-0 hidden lg:flex bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text text-[250px] font-extrabold" >History</h1>
                    <h1 className="select-none m-0 hidden lg:flex bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text text-[300px] font-extrabold" >Healix</h1>
                </div>
            </div>
        </>
    )
}