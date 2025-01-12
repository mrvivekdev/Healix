import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import doctorImage from '../assets/doctorImage.png'
import LandingPageNav from '../component/LandingPageNavBar'
import Fotter from '../component/Fotter'
import googleImage from '../assets/search.png'
import geminiImage from '../assets/google-gemini-icon.png'

export default function Landing(){

    const DoctorImageRef = useRef(null)
    const SolutionRef = useRef(null)
    const GoogleRef = useRef(null)
    const GeminiRef = useRef(null)

    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger);

        const Element = DoctorImageRef.current
        const Solution = SolutionRef.current
        const Google = GoogleRef.current
        const Gemini = GeminiRef.current

        gsap.from(Element, {
            y: 100,              
            scale: 0.8,          
            rotation: 25,        
            opacity: 0,          
            duration: 1.5,       
            ease: 'power2.out', 
        })

        gsap.from(Solution, {              
            scale: 0.8,     
            opacity: 0,          
            duration: 1,    
            ease: 'power2.out', 
            scrollTrigger: {
                trigger: Solution,
                start: 'top 95%',
            }
        })

        gsap.from(Google, {  
            x: -100,            
            scale: 0,     
            opacity: 0,          
            duration: 1,
            delay: 0.5,   
            ease: 'power2.out', 
            scrollTrigger: {
                trigger: Solution,
                start: 'top 40%',
            }
        })

        gsap.from(Gemini, {  
            x: 100,            
            scale: 0,     
            opacity: 0,          
            duration: 1,
            delay: 0.5,    
            ease: 'power2.out', 
            scrollTrigger: {
                trigger: Solution,
                start: 'top 40%',
            }
        })
    })

    return (
        <>
            <div className="h-screen w-screen bg-white">
                <LandingPageNav />
                
                {/* PageOne */}
                <div className='h-screen w-screen flex flex-col lg:flex-row justify-evenly items-center'>
                    <div className='bg-purple-950 h-2/5 w-4/5 rounded-[50%] m-0 lg:h-[69%] lg:w-[38%] flex justify-center items-center overflow-hidden'>
                        <img ref={DoctorImageRef} src={doctorImage} alt="DoctorImage" className='w-4/5 object-cover'/>
                    </div>

                    <div className='h-1/3 w-4/5 lg:w-1/4 lg:h-2/3'>
                        <h1 className='text-5xl font-extrabold text-center lg:text-8xl'>Healix Where Technology Meets Trusted Care With <h1 className='bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text'>AI</h1></h1>
                    </div>
                </div>

                {/* PageTwo */}
                <div className='bg-gradient-to-r from-purple-400 to-blue-500 text-transparent h-screen w-screen lg:px-20 lg:h-fit flex flex-col justify-evenly items-center py-10 px-5'>
                    <h1 className='text-white font-extrabold text-3xl m-2 text-center lg:m-10'>Your Personal Health Companion</h1>

                    <span className='text-white font-bold text-l text-center lg:hidden'>At Healix, we blend the power of advanced AI with trusted healthcare knowledge to provide instant answers to your health questions. Whether you're looking for guidance on symptoms, general wellness advice, or support in understanding medical concerns, Healix is here to assist 24/7—empowering you to take control of your health with confidence.</span>
                    <span className='text-white font-semibold text-sm text-center lg:hidden'>WARING: Please note that the information provided by Healix is for general informational purposes only and should not be considered as medical advice. Always consult a healthcare professional for specific medical concerns or conditions.</span>

                    <span className='hidden lg:text-white lg:font-bold lg:text-xl lg:text-center lg:flex lg:m-10'>At Healix, we revolutionize the way you approach healthcare. Our advanced AI is designed to assist you in understanding your health, providing accurate answers to your medical questions, and guiding you toward informed decisions—all from the comfort of your home.
                        Whether you have concerns about symptoms, need advice on fitness and nutrition, or want to explore preventive care, Healix is your reliable companion. Our AI leverages cutting-edge technology and trusted medical knowledge to offer quick, personalized, and secure responses tailored to your needs.
                        We believe that everyone deserves access to quality health information, and Healix is here to bridge the gap between you and your well-being. No matter the time or place, our platform is ready to empower you to take charge of your health journey with confidence and clarity.
                    </span>
                    <span className='text-white font-semibold text-sm text-center lg:flex hidden'>WARING: Please note that the information provided by Healix is for general informational purposes only and should not be considered as medical advice. Always consult a healthcare professional for specific medical concerns or conditions.</span>

                    <button className='hover:scale-110 transition ease-in-out delay-200 bg-transparent border border-black h-12 w-28 text-black hover:border-white hover:text-white lg:m-10'>Get Started</button>
                </div>

                {/* PageThree */}
                <div className='h-screen w-screen bg-white flex flex-col justify-center items-center'>
                    <div className='p-6 h-3/4 w-3/3 lg:w-3/4 flex flex-col justify-center tiems-center'>
                        <h1 className='text-5xl font-extrabold text-center lg:text-8xl font-sans'>Health Solution For <h1 className='bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text' ref={SolutionRef} >1.4 Billion</h1> Pepole In The Wold</h1>

                        <span className='mt-16 w-full text-center font-semibold' ><h1 className='font-extrabold text-xl' >AI by Google Gemini</h1> Powered by the advanced Google Gemini Flash-2.5 model, Healix delivers intelligent, AI-driven health solutions. With its cutting-edge natural language understanding and precision, Gemini enables real-time, accurate, and personalized health insights, making Healix your trusted companion for smarter healthcare decisions.</span>
                        <div className='flex flex-row justify-center items-center m-10 lg:mt-16 lg:mb-0'>
                            <img src={googleImage} alt="" className='h-16 mr-2' ref={GoogleRef}/>
                            <img src={geminiImage} alt="" className='h-16 ml-2' ref={GeminiRef}/>
                        </div>
                    </div>
                </div>

                <Fotter />
            </div>
        </>
    )
}