"use client"
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";

const Retreat = () => {
    const listOfImagePath = [
        "/retreat/retreat1.jpg",
        "/retreat/retreat2.jpg",
        "/retreat/retreat3.jpg",
        "/retreat/retreat4.jpg",
        "/retreat/retreat5.jpg",
        "/retreat/retreat6.jpg",
        "/retreat/retreat7.jpg",
    ]

    const swiperRef = useRef<SwiperType | null>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSlideChange = (swiper: SwiperType) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <div className="w-full h-full bg-white py-6 sm:py-8 lg:py-10 mx-auto px-10 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 lg:mb-10">Retreats</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Have a look at the past retreats at Ayurveda Gokarna
                </p>
            </div>
            <div className="flex items-center justify-center w-full max-w-7xl mx-auto gap-2 sm:gap-4 lg:gap-10">
                <Button
                    className="flex my-auto ml-4 bg-black/30 opacity-100 backdrop-blur-sm hover:bg-black/60 disabled:opacity-50 disabled:cursor-not-allowed transition-all z-20 shrink-0 p-2 sm:p-3"
                    onClick={() => swiperRef.current?.slidePrev()}
                    disabled={isBeginning}
                >
                    <ArrowLeft color="white" className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>

                <div className="w-full max-w-4xl">
                    <Swiper
                        modules={[Navigation, EffectCoverflow]}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView="auto"
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                            setIsBeginning(swiper.isBeginning);
                            setIsEnd(swiper.isEnd);
                        }}
                        onSlideChange={handleSlideChange}
                        className="w-full"
                    >
                        {listOfImagePath.map((imagePath, index) => (
                            <SwiperSlide key={index} className="!w-auto">
                                <div className="relative h-64 sm:h-96 lg:h-[500px] w-64 sm:w-96 lg:w-[500px]">
                                    <Image
                                        src={imagePath}
                                        alt={`Retreat ${index + 1}`}
                                        fill
                                        sizes="(max-width: 640px) 256px, (max-width: 1024px) 384px, 500px"
                                        className="object-cover rounded-lg shadow-lg"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <Button
                    className="flex my-auto mr-4 bg-black/30 opacity-100 backdrop-blur-sm hover:bg-black/60 disabled:opacity-50 disabled:cursor-not-allowed transition-all z-20 shrink-0 p-2 sm:p-3"
                    onClick={() => swiperRef.current?.slideNext()}
                    disabled={isEnd}
                >
                    <ArrowRight color="white" className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
            </div>
        </div>
    )
}

export default Retreat;