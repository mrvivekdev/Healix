import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LandingPageNav from '../component/LandingPageNavBar';
import Fotter from '../component/Fotter';

export default function TermsAndConditions() {
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    document.title = 'Terms and Conditions - Healix';
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(titleRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    });

    gsap.from(contentRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: contentRef.current,
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <LandingPageNav />

      <div className="flex-grow px-8 lg:px-20 py-10">
        <h1
          ref={titleRef}
          className="text-4xl lg:text-6xl font-extrabold text-center text-gradient bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
        >
          Terms and Conditions
        </h1>

        <div ref={contentRef} className="mt-10 text-lg leading-relaxed space-y-6">
          <p>
            Welcome to Healix! By using our website, services, or accessing any content provided by Healix, you agree to comply with and be bound by these Terms and Conditions. Please read them carefully.
          </p>

          <h2 className="text-2xl font-bold mt-8">1. Acceptance of Terms</h2>
          <p>
            By accessing or using Healix, you agree to be legally bound by these Terms and our Privacy Policy. If you do not agree, please do not use our services.
          </p>

          <h2 className="text-2xl font-bold mt-8">2. Use of Services</h2>
          <p>
            Healix provides general health-related information. However, this information is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider for medical concerns.
          </p>

          <h2 className="text-2xl font-bold mt-8">3. User Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials and are solely liable for all activities conducted through your account.
          </p>

          <h2 className="text-2xl font-bold mt-8">4. Intellectual Property</h2>
          <p>
            All content on Healix is the property of Healix or its licensors. Unauthorized reproduction or distribution is prohibited.
          </p>

          <h2 className="text-2xl font-bold mt-8">5. Limitation of Liability</h2>
          <p>
            Healix is provided "as is" and disclaims all warranties. We are not responsible for any damages arising from your use of the platform.
          </p>

          <h2 className="text-2xl font-bold mt-8">6. Contact Us</h2>
          <p>
            If you have questions, please contact us at support@healix.com.
          </p>
        </div>
      </div>

      <Fotter />
    </div>
  );
}
