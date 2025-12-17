import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-white py-12 px-2 sm:px-6 lg:px-8">
            <div className=" mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo Section */}
                    <div className="relative w-32 h-auto my-auto mx-auto lg:col-span-1">
                        <Image src="/ayurvedaLogo.jpeg" alt="Ayurveda Logo" width={128} height={128} className="object-contain" />
                    </div>

                    <div id='central block' className="flex flex-col sm:flex-row gap-4 lg:col-span-2">
                        <div>
                            <h3 className="text-gray-800 font-bold text-center lg:text-left mb-4 w-full">Address</h3>
                            <div className="text-gray-700 space-y-1 w-full text-center lg:text-left">
                                <p>Ayurveda Gokarna</p>
                                <p>Holistic Healing & Cultural Centre</p>
                                <p>Gogarbha ground, Kudle beach road,</p>
                                <p>Gokarna, Karnataka, India-581326</p>
                            </div>
                        </div>

                        <div className="mt-6 sm:mt-0">
                            <h3 className="text-gray-800 font-bold text-center lg:text-left mb-4">Contacts</h3>
                            <div className="text-gray-700 space-y-1 text-center lg:text-left">
                                <p>ayurvedagokarna@gmail.com</p>
                                <p>Phone: +919741202401</p>
                            </div>
                        </div>
                    </div>

                    <div className=" lg:flex lg:items-start lg:col-span-1">
                        <div>
                            <h3 className="text-gray-800 font-bold text-center lg:text-left mb-4">Links</h3>
                            <ul className="grid grid-cols-2 lg:grid-cols-1 w-full text-center lg:text-left">
                                <li>
                                    <a href="#home" className="text-emerald-600 hover:text-emerald-700">Home</a>
                                </li>
                                <li>
                                    <a href="#services" className="text-emerald-600 hover:text-emerald-700">Services</a>
                                </li>
                                <li>
                                    <a href="#courses" className="text-emerald-600 hover:text-emerald-700">Courses</a>
                                </li>
                                <li className="w-full">
                                    <a href="https://wa.me/919741202401?text=Hello%20please%20book%20my%20stay!" target="_blank" className="text-emerald-600 hover:text-emerald-700">Online Reservation</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;