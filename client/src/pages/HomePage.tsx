import HomeNavBar from '../component/HomePageNavBar'
import Fotter from '../component/Fotter'
import Basic from '../component/BasicAsk'
import { useGSAP } from '@gsap/react'
import { useContext, useRef } from 'react'
import gsap from 'gsap'
import { AppContext } from '../utils/GenrealContext';

export default function Home(){
    const {user} = useContext<any>(AppContext);

    const HealixAni = useRef(null);
    const AiAni = useRef(null);

    useGSAP(()=>{
        const Healix = HealixAni.current;
        const Ai = AiAni.current;

        gsap.from(Ai, {
            x: -100,              
            scale: 0.8,          
            opacity: 0,          
            duration: 1.5,       
            ease: 'power2.out', 
        })

        gsap.from(Healix, {
            x: 100,              
            scale: 0.8,         
            opacity: 0,          
            duration: 1.5,       
            ease: 'power2.out', 
        })
    })

    return(
        <>
            <HomeNavBar />

            <div className="h-screen w-full bg-gray-200 overflow-hidden">
                <div className="h-3/6 lg:h-3/5 w-full flex justify-center items-center p-12">
                    <h1 className='cursor-default text-center text-5xl lg:text-6xl font-extrabold'>Your <h1 ref={AiAni} className='bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text'>AI</h1> Health Assistant <h1 ref={HealixAni} className='bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text'>Healix</h1></h1>
                </div>

                <div className='h-3/6 lg:h-2/5 w-full flex flex-row justify-center items-center p-12 lg:p-10 '>
                    <Basic />
                </div>
            </div>

            <Fotter />
        </>
    )    
}