"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHeroVisible, setIsHeroVisible] = useState(true);
    const [isHostsVisible, setIsHostsVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const heroElement = document.getElementById('home');
        const hostsElement = document.getElementById('hosts');
        
        const observers: IntersectionObserver[] = [];

        if (heroElement) {
            const heroObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        setIsHeroVisible(entry.isIntersecting);
                    });
                },
                {
                    threshold: 0.1,
                    rootMargin: '-20% 0px -20% 0px',
                }
            );
            heroObserver.observe(heroElement);
            observers.push(heroObserver);
        }

        if (hostsElement) {
            const hostsObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        setIsHostsVisible(entry.isIntersecting);
                    });
                },
                {
                    threshold: 0.1,
                    rootMargin: '-20% 0px -20% 0px',
                }
            );
            hostsObserver.observe(hostsElement);
            observers.push(hostsObserver);
        }

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, []);

    const shouldUseWhite = isHeroVisible || isHostsVisible;

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] w-full bg-transparent backdrop-blur-sm shadow-sm">
            <nav className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 w-fit h-fit rounded-full overflow-hidden">
                        <Image src="/ayurvedaLogo.jpeg" alt="Ayurveda Logo" width={64} height={64} />
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#home" className={`${shouldUseWhite ? 'text-white' : 'text-gray-700'} hover:text-emerald-700 transition-colors`}>
                            Home
                        </Link>
                        <Link href="#services" className={`${shouldUseWhite ? 'text-white' : 'text-gray-700'} hover:text-emerald-700 transition-colors`}>
                            Services
                        </Link>
                        <Link href="#testimonials" className={`${shouldUseWhite ? 'text-white' : 'text-gray-700'} hover:text-emerald-700 transition-colors`}>
                            Testimonials
                        </Link>
                        <Link href="#contact" className={`${shouldUseWhite ? 'text-white' : 'text-gray-700'} hover:text-emerald-700 transition-colors`}>
                            Contact
                        </Link>
                        <Link href="https://wa.me/919741202401?text=Hello%20please%20book%20my%20stay!" target="_blank" className="bg-emerald-700 text-white px-6 py-2 rounded-full hover:bg-emerald-800 transition-colors">
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
                                    <Link href="https://wa.me/919741202401?text=Hello%20please%20book%20my%20stay!" target="_blank" className="bg-emerald-700 text-white px-6 py-2 rounded-full hover:bg-emerald-800 transition-colors">
                                        Book Now
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                    <button className={`md:hidden ${shouldUseWhite ? 'text-white' : 'text-gray-700'} hover:text-emerald-700 transition-colors`} onClick={() => toggleMenu()}>
                        {!isMenuOpen ? <svg className="w-6 h-6" fill="none" stroke={shouldUseWhite ? 'white' : 'black'} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg> : <svg className="w-6 h-6" fill="none" stroke={shouldUseWhite ? 'white' : 'black'} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>}
                    </button>
                </div>
            </nav>
        </header>
    );
}

