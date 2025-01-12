

export default function Register(){
    return(
        <>
            <div className="h-screen w-screen bg-purple-950 p-6 lg:p-10 flex flex-row">
                <div className="h-full w-full p-5 bg-white rounded-xl shadow-lg lg:w-2/3">
                
                    <form className="h-full w-full flex flex-col justify-center items-center pt-6 lg:pt-12">
                        <h1 className="text-4xl font-extrabold text-center text-black mb-10">Register</h1>

                        <input 
                            placeholder="First Name" 
                            type="text" 
                            className="border border-black rounded-lg p-3 w-full mt-2 mb-4 lg:w-1/2 lg:mx-auto lg:block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <input 
                            placeholder="Last Name" 
                            type="text" 
                            className="border border-black rounded-lg p-3 w-full mt-2 mb-4 lg:w-1/2 lg:mx-auto lg:block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <input 
                            placeholder="Email" 
                            type="email" 
                            className="border border-black rounded-lg p-3 w-full mt-2 mb-4 lg:w-1/2 lg:mx-auto lg:block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <input 
                            placeholder="Phone Number" 
                            type="tel" 
                            className="border border-black rounded-lg p-3 w-full mt-2 mb-4 lg:w-1/2 lg:mx-auto lg:block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <input 
                            placeholder="Date of Birth" 
                            type="date"
                            className="border border-black rounded-lg p-3 w-full mt-2 mb-4 lg:w-1/2 lg:mx-auto lg:block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <input 
                            placeholder="Password" 
                            type="password" 
                            className="border border-black rounded-lg p-3 w-full mt-2 mb-4 lg:w-1/2 lg:mx-auto lg:block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <input 
                            placeholder="Confirm Password" 
                            type="password" 
                            className="border border-black rounded-lg p-3 w-full mt-2 mb-4 lg:w-1/2 lg:mx-auto lg:block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />

                        <button className="border border-black rounded-lg text-l px-2 py-2 w-2/5 lg:w-1/6 lg:px-5 lg:py-2 font-bold hover:bg-black hover:text-white hover:scale-110 transition ease-in-out delay-200">Sing up</button>
                    </form>
                </div>

                <div className="flex flex-col items-center">
                    <h1 className="m-0 hidden lg:flex bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text text-[300px] font-extrabold" >Hello</h1>
                    <h1 className="m-0 hidden lg:flex bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text text-[300px] font-extrabold" >Healix</h1>
                </div>
            </div>
        </>
    )
}