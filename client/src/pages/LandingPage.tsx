import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'
import doctorImage from '../assets/doctorImage.png'
import LandingPageNav from '../component/LandingPageNavBar'
import Fotter from '../component/Fotter'

export default function Landing(){

    const DoctorImageRef = useRef(null)

    useGSAP(()=>{
        const Element = DoctorImageRef.current

        gsap.from(Element, {
            y: 100,              
            scale: 0.8,          
            rotation: 25,        
            opacity: 0,          
            duration: 1.5,       
            ease: 'power2.out', 
        })
    })

    return (
        <>
            <div className="h-screen w-screen bg-white">
                <LandingPageNav />
                
                {/* PageOne */}
                <div className='h-screen w-screen flex flex-col lg:flex-row justify-evenly items-center'>
                    <div className='bg-purple-950 h-2/5 w-4/5 rounded-[50%] m-0 lg:h-[69%] lg:w-[38%] flex justify-center items-center overflow-hidden'>
                        <img ref={DoctorImageRef} src={doctorImage} alt="DoctorImage" className='w-full h-full object-cover'/>
                    </div>

                    <div className='h-1/3 w-4/5 lg:w-1/4 lg:h-2/3'>
                        <h1 className='text-5xl font-extrabold text-center lg:text-8xl'>Healix Where Technology Meets Trusted Care With <h1 className='bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text'>AI</h1></h1>
                    </div>
                </div>

                {/* PageTwo */}
                <div className='bg-gradient-to-r from-purple-400 to-blue-500 text-transparent h-screen w-screen lg:px-20 lg:h-fit flex flex-col justify-evenly items-center py-10 px-5'>
                    <h1 className='text-black font-extrabold text-3xl m-2 text-center lg:m-10'>Your Personal Health Companion</h1>

                    <span className='text-black font-bold text-l text-center lg:hidden'>At Healix, we blend the power of advanced AI with trusted healthcare knowledge to provide instant answers to your health questions. Whether you're looking for guidance on symptoms, general wellness advice, or support in understanding medical concerns, Healix is here to assist 24/7—empowering you to take control of your health with confidence.</span>
                    <span className='text-black font-semibold text-sm text-center lg:hidden'>WARING: Please note that the information provided by Healix is for general informational purposes only and should not be considered as medical advice. Always consult a healthcare professional for specific medical concerns or conditions.</span>

                    <span className='hidden lg:text-black lg:font-bold lg:text-xl lg:text-center lg:flex lg:m-10'>At Healix, we revolutionize the way you approach healthcare. Our advanced AI is designed to assist you in understanding your health, providing accurate answers to your medical questions, and guiding you toward informed decisions—all from the comfort of your home.
                        Whether you have concerns about symptoms, need advice on fitness and nutrition, or want to explore preventive care, Healix is your reliable companion. Our AI leverages cutting-edge technology and trusted medical knowledge to offer quick, personalized, and secure responses tailored to your needs.
                        We believe that everyone deserves access to quality health information, and Healix is here to bridge the gap between you and your well-being. No matter the time or place, our platform is ready to empower you to take charge of your health journey with confidence and clarity.
                    </span>
                    <span className='text-black font-semibold text-sm text-center lg:flex hidden'>WARING: Please note that the information provided by Healix is for general informational purposes only and should not be considered as medical advice. Always consult a healthcare professional for specific medical concerns or conditions.</span>

                    <button className='hover:scale-110 transition ease-in-out delay-200 bg-transparent border border-white h-12 w-28 text-white hover:border-black hover:text-black lg:m-10'>Get Started</button>
                </div>

                {/* PageThree */}
                <div className='h-screen w-screen bg-white '>
                        
                </div>

                <Fotter />
            </div>
        </>
    )
}