"use client"
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";

const Retreat = () => {
    const listOfImagePath = [
        "https://res.cloudinary.com/daydyqxdw/image/upload/v1765955627/retreat1_jiumus.jpg",
        "https://res.cloudinary.com/daydyqxdw/image/upload/v1765955628/retreat2_uxxdsx.jpg",
        "https://res.cloudinary.com/daydyqxdw/image/upload/v1765955627/retreat3_yemimg.jpg",
        "https://res.cloudinary.com/daydyqxdw/image/upload/v1765955627/retreat4_toziki.jpg",
        "https://res.cloudinary.com/daydyqxdw/image/upload/v1765955626/retreat5_clmqjx.jpg",
        "https://res.cloudinary.com/daydyqxdw/image/upload/v1765955627/retreat6_ja2r4r.jpg",
        "https://res.cloudinary.com/daydyqxdw/image/upload/v1765955626/retreat7_soijvm.jpg",
    ]

    const swiperRef = useRef<SwiperType | null>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleSlideChange = (swiper: SwiperType) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    const handleImageClick = (imagePath: string) => {
        setSelectedImage(imagePath);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && selectedImage) {
                closeModal();
            }
        };

        if (selectedImage) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);

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
                                <div 
                                    className="relative h-64 sm:h-96 lg:h-[500px] w-64 sm:w-96 lg:w-[500px] cursor-pointer hover:opacity-90 transition-opacity"
                                    onClick={() => handleImageClick(imagePath)}
                                >
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

            {/* Modal/Lightbox */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                    onClick={closeModal}
                >
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
                        aria-label="Close modal"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div 
                        className="relative max-w-5xl max-h-[85vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-full" style={{ aspectRatio: 'auto' }}>
                            <img
                                src={selectedImage}
                                alt="Retreat image"
                                className="object-contain rounded-lg max-w-full max-h-[85vh] w-auto h-auto"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Retreat;