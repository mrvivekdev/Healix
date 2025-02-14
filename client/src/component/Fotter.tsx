import {Link} from "react-router-dom";

export default function Footer(): JSX.Element {
    return (
        <footer className="bg-purple-950 text-white py-8">
            <div className="container mx-auto px-4">
                {/* <!-- Top Section --> */}
                <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6">
                    {/* <!-- About Section --> */}
                    <div className="mb-6 md:mb-0 md:w-1/3">
                        <h2 className="text-2xl font-bold mb-2">About Healix</h2>
                        <p className="text-sm text-gray-300">
                            Healix is your trusted AI-powered health assistant, providing instant, reliable answers to your medical and wellness questions. Empowering you with knowledge and clarity, 24/7.
                        </p>
                    </div>

                    {/* <!-- Quick Links --> */}
                    <div className="mb-6 md:mb-0 md:w-1/3 flex justify-center items-center flex-col">
                        <h2 className="text-2xl font-bold mb-2">Quick Links</h2>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link to="/" className="hover:text-white">Home</Link></li>
                            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-white">Services</Link></li>
                            <li><Link to="/Terms" className="hover:text-white">Terms And Condicon</Link></li>
                        </ul>
                    </div>

                    {/* <!-- Contact Section --> */}
                    <div className="md:w-1/3  flex justify-center items-center flex-col">
                        <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
                        <p className="text-sm text-gray-300">
                            Email: <Link to="mailto:support@healix.com" className="hover:text-white">vivekkathrotiya911@gmail.com</Link><br />
                            Phone: <Link to="tel:+1234567890" className="hover:text-white">+91 99131 42703</Link>
                        </p>
                    </div>
                </div>

                {/* <!-- Bottom Section --> */}
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                    <p>&copy; 2025 Healix. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
