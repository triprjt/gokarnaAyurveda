"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className="absolute top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold text-emerald-800">
                            Ayurveda Gokarna
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#home" className="text-gray-700 hover:text-emerald-700 transition-colors">
                            Home
                        </Link>
                        <Link href="#services" className="text-gray-700 hover:text-emerald-700 transition-colors">
                            Services
                        </Link>
                        <Link href="#testimonials" className="text-gray-700 hover:text-emerald-700 transition-colors">
                            Testimonials
                        </Link>
                        <Link href="#contact" className="text-gray-700 hover:text-emerald-700 transition-colors">
                            Contact
                        </Link>
                        <Link
                            href="#book"
                            className="bg-emerald-700 text-white px-6 py-2 rounded-full hover:bg-emerald-800 transition-colors"
                        >
                            Book Now
                        </Link>
                    </div>
                    {isMenuOpen && (
                        <div className="md:hidden absolute top-20 right-0 w-full bg-white/95 backdrop-blur-sm shadow-sm">
                            <ul className="flex flex-col gap-4 p-4">
                                <li>
                                    <Link href="#home" className="text-gray-700 hover:text-emerald-700 transition-colors">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#services" className="text-gray-700 hover:text-emerald-700 transition-colors">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#testimonials" className="text-gray-700 hover:text-emerald-700 transition-colors">
                                        Testimonials
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#contact" className="text-gray-700 hover:text-emerald-700 transition-colors">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#book" className="bg-emerald-700 text-white px-6 py-2 rounded-full hover:bg-emerald-800 transition-colors">
                                        Book Now
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                    <button className="md:hidden text-gray-700 hover:text-emerald-700" onClick={() => toggleMenu()}>
                        {!isMenuOpen ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg> : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>}
                    </button>
                </div>
            </nav>
        </header>
    );
}

