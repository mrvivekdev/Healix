import { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { LiaFileMedicalAltSolid } from "react-icons/lia";
import { RiFolderHistoryLine } from "react-icons/ri";
import { RiHome3Line } from "react-icons/ri";

export default function HomeNavBar(){

    const [openUser, setOpenUser] = useState<boolean>(false);

    return(
        <>
            <div className="h-16 lg:h-20 border-b border-black w-screen flex justify-between items-center">
                <h1 className="font-extrabold text-2xl lg:text-4xl ml-10 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text cursor-pointer">Healix</h1>

                <div className="flex justify-center items-center">

                    <div className="flex justify-center items-center">
                        <button className="lg:mr-5 lg:ml-2 hidden lg:flex hover:scale-110 transition ease-in-out delay-200">
                            <RiHome3Line style={{ fontSize: '30px' }}/>
                        </button>

                        <button className="lg:mr-5 lg:ml-2 hidden lg:flex hover:scale-110 transition ease-in-out delay-200">
                            <RiFolderHistoryLine style={{ fontSize: '30px' }}/>
                        </button>

                        <button className="lg:mr-2 lg:ml-2 hover:scale-110 transition ease-in-out delay-200">
                            <LiaFileMedicalAltSolid style={{ fontSize: '30px' }}/>
                        </button>
                    </div>


                    {/* USER COMPONENT */}
                    <div className="flex flex-col w-16 mr-2 lg:mr-12 hover:scale-110 transition ease-in-out delay-200">
                        <button
                            onClick={() => setOpenUser(!openUser)}
                            className="h-10 w-16 flex justify-center items-center cursor-pointer"
                        >
                            <FaRegUser style={{ fontSize: '25px' }} />
                        </button>

                        {openUser && (
                            <div className="absolute bg-black rounded w-40 text-white mt-10 lg:mt-10 right-1">
                                <ul className="p-2 text-center">
                                    <li className="p-1 hover:bg-gray-700 cursor-pointer">
                                        <button>Account</button>
                                    </li>
                                    <li className="p-1 hover:bg-gray-700 cursor-pointer">
                                        <button>Setting</button>
                                    </li>
                                    <li className="p-1 hover:bg-gray-700 cursor-pointer text-red-500">
                                        <button>Logout</button>
                                    </li>
                                    <li className="p-1 hover:bg-gray-700 cursor-pointer lg:hidden">
                                        <button>Report</button>
                                    </li>
                                    <li className="p-1 hover:bg-gray-700 cursor-pointer lg:hidden">
                                        <button>History Metrics</button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}