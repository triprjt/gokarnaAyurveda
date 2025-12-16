'use client'
import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

const Hosts = () => {
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const hosts = [
        {
            name: "Ratan",
            image: "/ratan1.jpeg",
            description: `With over 20 years of clinical experience in both South and North India, Dr. Ratan is known not just
for his Ayurvedic expertise — but for his calm presence and deep care.
He personally meets every guest, studies your constitution (dosha), and designs a treatment plan to
support your unique healing journey.
Guests often describe his approach as “clear, intuitive, and deeply reassuring`,
            skills: ["Speaks: German, Russian, English, Kannada, Hindi", "Specialties: Panchakarma, mind-body detox, chronic imbalance correction"]
        },
        {
            name: "Lily",
            image: "/lily.jpg",
            description: `Lily is your bridge to everything — from the first WhatsApp message to your last day at the retreat.
She speaks Russian and English fluently, and has helped hundreds of guests from Europe feel safe,
informed, and relaxed before they even arrive.
Think of her as your personal host, friend, and translator if needed.`,
            skills: ["Speaks: Russian, English", "Specialties: Guest coordination, communication, cultural understanding"]
        },
        {
            name: "Robin",
            image: "/robin.jpg",
            description: `Robin is a MBBS and MD with over 3 years of experience.`,
            skills: ["Speaks: English", "Specialties: MBBS and MD"]
        },
    ]

    return (
        <div className="flex relative h-screen">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/gokarnaTrees1.jpg"
                    alt="Gokarna Trees Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="relative z-10 h-auto flex flex-col mx-auto items-center justify-center w-full px-4 sm:px-6 lg:px-8">        
                <div className="flex items-center justify-center w-full max-w-fit sm:max-w-7xl mx-auto gap-4 sm:gap-8">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        disabled={activeIndex === 0}
                        className="flex items-center justify-center shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all z-20"
                        aria-label="Previous host"
                    >
                        <ArrowLeft color="white" className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    <div className="w-full max-w-2xl relative cursor-grab">
                        <Swiper
                            modules={[FreeMode, Navigation]}
                            freeMode={true}
                            spaceBetween={50}
                            slidesPerView={1}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                                setActiveIndex(swiper.activeIndex);
                            }}
                            onSlideChange={(swiper) => {
                                setActiveIndex(swiper.activeIndex);
                            }}
                            className="w-full"
                        >
                            {hosts.map((host, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex flex-col sm:flex-row items-center justify-between rounded-xl gap-4 sm:gap-6 lg:gap-8 w-full mx-auto backdrop-blur-[1px] p-4 sm:p-6 lg:p-8">
                                        <div className="flex-shrink-0 py-4 sm:py-6 lg:py-10 flex flex-col gap-4 sm:gap-6 items-center">
                                            <div className="relative w-48 h-48 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg">
                                                <Image
                                                    src={host.image}
                                                    alt={host.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center">{host.name}</h3>
                                        </div>
                                        <div className="flex flex-col gap-2 flex-1">
                                            <p className="text-white text-sm sm:text-base lg:text-lg font-bold max-w-2xl">{host.description}</p>
                                            <ul className="text-white text-sm sm:text-base lg:text-lg max-w-md list-disc list-inside">
                                                {host.skills.map(skill => <li key={skill}>{skill}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        disabled={activeIndex === hosts.length - 1}
                        className="flex items-center justify-center shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all z-20"
                        aria-label="Next host"
                    >
                        <ArrowRight color="white" className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                </div>

                <div className="flex items-center justify-center gap-2 mt-6">
                    {hosts.map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${index === activeIndex ? "bg-yellow-100" : "bg-gray-500"
                                }`}
                            onClick={() => swiperRef.current?.slideTo(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Hosts;