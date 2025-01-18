import * as yup from 'yup';
import {useFormik} from "formik"
import { useEffect, useContext, useState } from 'react';
import { AppContext } from '../utils/GenrealContext';
import { useNavigate } from 'react-router-dom';
import {AxiosResponse} from "axios";
import axios from "axios";
import { ToastContainer, toast, Bounce } from 'react-toastify';

export default function NormalIssue(){
    const navigate = useNavigate();
    const {cookie, setUser} = useContext<any>(AppContext);
    const [data, setData] = useState<string | null | any>(null);

    const YupSchema = yup.object({
        symptoms: yup.string().required("Symptoms is required"),
        temperature: yup.string().required("Temperature is required"),
        bloodPressure: yup.string().required("Blood pressure is required"), 
        pulseRate: yup.string().required("Pulse rate is required"),
        allergies: yup.string().required("Allergies information is required"),
        location: yup.string().required("Location is required"),
        diabetes: yup.string().required("Diabetes information is required"),
        duration: yup.string().required("Duration is required"),
        coldAndFlu: yup.string().required("Cold and flu information is required"),
        headaches: yup.string().required("Headaches information is required"),
        stomachIssues: yup.string().required("Stomach issues information is required"),
        skinIssues: yup.string().required("Skin issues information is required"),
        sleep: yup.string().required("Sleep information is required"),
        diet: yup.string().required("Diet information is required"),
        prompt: yup.string().required("Prompt is required")
    })

    async function SubmitApiHandler(values: any){

        try {
            const PostCall: AxiosResponse = await axios.post(`${import.meta.env.VITE_SERVER_API_CALL}/user/login/`, values);
            setData(PostCall);
            
            if(data?.data?.status === "success"){
                toast.success("Registration Successful! Redirecting to login...", {
                    position: "top-right",
                    autoClose: 3000,
                });
                setUser(data?.data.user);
                navigate('/Home');
                resetForm();
            }

        } catch(error: any) {
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
            symptoms: "",
            temperature: "",
            bloodPressure: "",
            pulseRate: "",
            allergies: "",
            location: "",
            diabetes: "",
            duration: "",
            coldAndFlu: "",
            headaches: "",
            stomachIssues: "",
            skinIssues: "",
            sleep: "",
            diet: "",
            prompt: ""
        },
        validationSchema: YupSchema,
        onSubmit: async(values) => {
            await SubmitApiHandler(values)
        }
    })

    useEffect(()=>{
        document.title = "Healix - Basic Issue"

        if(!cookie){
            navigate("/")
        }
    })

    return (
        <>
             <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500 px-4 py-8 overflow-hidden">
                <div className="w-full max-w-5xl p-8 bg-white rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">Normal And Basic Issue Form</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
    <div>
        <label htmlFor="symptoms" className="block text-sm font-medium text-gray-600">Symptoms</label>
        <textarea 
            id="symptoms" 
            name="symptoms"
            value={values.symptoms}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none ${
                errors.symptoms && touched.symptoms ? 'border-red-500' : ''
            }`}
        />
        {touched.symptoms && errors.symptoms && (
            <div className="text-red-500 text-sm mt-1">{errors.symptoms}</div>
        )}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
            <label htmlFor="temperature" className="block text-sm font-medium text-gray-600">Temperature</label>
            <input 
                type="text" 
                id="temperature" 
                name="temperature"
                value={values.temperature}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    errors.temperature && touched.temperature ? 'border-red-500' : ''
                }`}
            />
            {touched.temperature && errors.temperature && (
                <div className="text-red-500 text-sm mt-1">{errors.temperature}</div>
            )}
        </div>
        <div>
            <label htmlFor="bloodPressure" className="block text-sm font-medium text-gray-600">Blood Pressure</label>
            <input 
                type="text" 
                id="bloodPressure" 
                name="bloodPressure"
                value={values.bloodPressure}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    errors.bloodPressure && touched.bloodPressure ? 'border-red-500' : ''
                }`}
            />
            {touched.bloodPressure && errors.bloodPressure && (
                <div className="text-red-500 text-sm mt-1">{errors.bloodPressure}</div>
            )}
        </div>
        <div>
            <label htmlFor="pulseRate" className="block text-sm font-medium text-gray-600">Pulse Rate</label>
            <input 
                type="text" 
                id="pulseRate" 
                name="pulseRate"
                value={values.pulseRate}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    errors.pulseRate && touched.pulseRate ? 'border-red-500' : ''
                }`}
            />
            {touched.pulseRate && errors.pulseRate && (
                <div className="text-red-500 text-sm mt-1">{errors.pulseRate}</div>
            )}
        </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label htmlFor="allergies" className="block text-sm font-medium text-gray-600">Allergies</label>
            <textarea 
                id="allergies" 
                name="allergies"
                value={values.allergies}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none ${
                    errors.allergies && touched.allergies ? 'border-red-500' : ''
                }`}
            />
            {touched.allergies && errors.allergies && (
                <div className="text-red-500 text-sm mt-1">{errors.allergies}</div>
            )}
        </div>
        <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-600">Location</label>
            <input 
                type="text" 
                id="location" 
                name="location"
                value={values.location}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    errors.location && touched.location ? 'border-red-500' : ''
                }`}
            />
            {touched.location && errors.location && (
                <div className="text-red-500 text-sm mt-1">{errors.location}</div>
            )}
        </div>
    </div>

    <div>
        <label htmlFor="diabetes" className="block text-sm font-medium text-gray-600">Diabetes</label>
        <input 
            type="text" 
            id="diabetes" 
            name="diabetes"
            value={values.diabetes}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.diabetes && touched.diabetes ? 'border-red-500' : ''
            }`}
        />
        {touched.diabetes && errors.diabetes && (
            <div className="text-red-500 text-sm mt-1">{errors.diabetes}</div>
        )}
    </div>

    <div>
        <label htmlFor="duration" className="block text-sm font-medium text-gray-600">Duration</label>
        <input 
            type="text" 
            id="duration" 
            name="duration"
            value={values.duration}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.duration && touched.duration ? 'border-red-500' : ''
            }`}
        />
        {touched.duration && errors.duration && (
            <div className="text-red-500 text-sm mt-1">{errors.duration}</div>
        )}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label htmlFor="coldAndFlu" className="block text-sm font-medium text-gray-600">Cold and Flu</label>
            <textarea 
                id="coldAndFlu" 
                name="coldAndFlu"
                value={values.coldAndFlu}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none ${
                    errors.coldAndFlu && touched.coldAndFlu ? 'border-red-500' : ''
                }`}
            />
            {touched.coldAndFlu && errors.coldAndFlu && (
                <div className="text-red-500 text-sm mt-1">{errors.coldAndFlu}</div>
            )}
        </div>
        <div>
            <label htmlFor="headaches" className="block text-sm font-medium text-gray-600">Headaches</label>
            <textarea 
                id="headaches" 
                name="headaches"
                value={values.headaches}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none ${
                    errors.headaches && touched.headaches ? 'border-red-500' : ''
                }`}
            />
            {touched.headaches && errors.headaches && (
                <div className="text-red-500 text-sm mt-1">{errors.headaches}</div>
            )}
        </div>
    </div>

    <div>
        <label htmlFor="stomachIssues" className="block text-sm font-medium text-gray-600">Stomach Issues</label>
        <textarea 
            id="stomachIssues" 
            name="stomachIssues"
            value={values.stomachIssues}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none ${
                errors.stomachIssues && touched.stomachIssues ? 'border-red-500' : ''
            }`}
        />
        {touched.stomachIssues && errors.stomachIssues && (
            <div className="text-red-500 text-sm mt-1">{errors.stomachIssues}</div>
        )}
    </div>

    <div>
        <label htmlFor="skinIssues" className="block text-sm font-medium text-gray-600">Skin Issues</label>
        <textarea 
            id="skinIssues" 
            name="skinIssues"
            value={values.skinIssues}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none ${
                errors.skinIssues && touched.skinIssues ? 'border-red-500' : ''
            }`}
        />
        {touched.skinIssues && errors.skinIssues && (
            <div className="text-red-500 text-sm mt-1">{errors.skinIssues}</div>
        )}
    </div>

    <div>
        <label htmlFor="sleep" className="block text-sm font-medium text-gray-600">Sleep</label>
        <textarea 
            id="sleep" 
            name="sleep"
            value={values.sleep}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none ${
                errors.sleep && touched.sleep ? 'border-red-500' : ''
            }`}
        />
        {touched.sleep && errors.sleep && (
            <div className="text-red-500 text-sm mt-1">{errors.sleep}</div>
        )}
    </div>

    <div>
        <label htmlFor="diet" className="block text-sm font-medium text-gray-600">Diet</label>
        <textarea 
            id="diet" 
            name="diet"
            value={values.diet}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none ${
                errors.diet && touched.diet ? 'border-red-500' : ''
            }`}
        />
        {touched.diet && errors.diet && (
            <div className="text-red-500 text-sm mt-1">{errors.diet}</div>
        )}
    </div>

    <div>
        <label htmlFor="prompt" className="block text-sm font-medium text-gray-600">Prompt</label>
        <textarea 
            id="prompt" 
            name="prompt"
            value={values.prompt}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none ${
                errors.prompt && touched.prompt ? 'border-red-500' : ''
            }`}
        />
        {touched.prompt && errors.prompt && (
            <div className="text-red-500 text-sm mt-1">{errors.prompt}</div>
        )}
    </div>

    <div className="mt-6">
        <button 
            type="submit" 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
            Submit
        </button>
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
    </div>
</form>                </div>
            </div>
        </>
    )
}