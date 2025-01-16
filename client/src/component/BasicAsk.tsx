import { GiMedicalPackAlt } from "react-icons/gi";
import DoctorImage from '../assets/doctorImage.png'

export default function Basic(){
    return(
        <>
            <div className="h-full w-full lg:h-6/7 lg:w-1/5 border-2 border-black rounded-2xl bg-white overflow-hidden lg:p-0">
                <div className="flex flex-col p-5">
                    <div className="px-1 flex flex-row justify-between">
                        <h1 className="text-black font-bold text-xl">Basic Assist.</h1>
                        <GiMedicalPackAlt style={{ fontSize: '30px' }} />
                    </div>

                    <div className="flex flex-row mt-5">
                        <span>Quick answers to health queries, symptom checks to support informed health decisions.</span>
                    </div>

                    <div className="flex flex-row justify-between lg:mt-6">
                        <button className="bg-gradient-to-r from-purple-400 to-blue-500 text-white h-8 w-20 rounded font-bold mt-24 hover:text-black hover:scale-110 transition ease-in-out delay-200">
                            Ask.
                        </button>

                        <img src={DoctorImage} alt="" className="h-40" />
                    </div>
                </div>  
            </div>
        </>
    )
}