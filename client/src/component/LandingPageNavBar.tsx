export default function LandingPageNav(){
    return (
        <>
            <div className="h-16 lg:h-20 border-b border-black w-screen flex justify-between items-center">
                <h1 className="font-extrabold text-2xl lg:text-4xl ml-10 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text cursor-pointer">Healix</h1>

                <div className="flex items-center mr-10">
                    <button className="border border-black rounded-lg text-l px-3 py-2 lg:px-5 lg:py-2 mr-2 lg:mr-4 font-bold hover:bg-black hover:text-white hover:scale-110 transition ease-in-out delay-200">Login</button>
                    <button className="border border-black rounded-lg text-l px-2 py-2 lg:px-5 lg:py-2 font-bold hover:bg-black hover:text-white hover:scale-110 transition ease-in-out delay-200">Register</button>
                </div>
            </div>
        </>
    )
}