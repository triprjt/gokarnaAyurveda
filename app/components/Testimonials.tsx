import Image from "next/image";

const testimonials = [
    {
        "name": "Elena",
        "country_code": "RU",
        "country": "Russia",
        "quote": "I booked just one week... and ended up staying for a month. I’ve never felt so peaceful in my entire life. The treatments, the silence, the ocean it was exactly what I didn’t know I needed. I came for one week. I stayed for a month. I never felt this peace in Europe."
    },
    {
        "name": "Martin",
        "country_code": "DE",
        "country": "Germany",
        "quote": "I was skeptical about Ayurveda. But after just 3 days here, I felt lighter, more focused, and deeply rested. The care from Dr. Ratan and the team is something rare — truly from the heart."
    },
    {
        "name": "Julia & Petra",
        "country_code": "AT",
        "country": "Austria",
        "quote": "We came as friends for a girls’ healing trip. It turned into a life-changing experience. The yoga at sunrise, the massages, the food — and most of all, the energy here — unforgettable."
    },
    {
        "name": "Tomas",
        "country_code": "CZ",
        "country": "Czech Republic",
        "quote": "I’ve done wellness retreats in Bali and Portugal. This one in Gokarna felt more real. Less commercial, more healing. And the price is unbeatable for what you get."
    },
    {
        "name": "Anna",
        "country_code": "DE",
        "country": "Germany",
        "quote": "Gokarna felt like coming home to a part of myself I had forgotten."
    },
    {
        "name": "Anna",
        "country_code": "RU",
        "country": "Russia",
        "quote": "From the doctor to the therapists to the kitchen team — everyone here works from the heart."
    },
    {
        "name": "Natalie",
        "country_code": "DE",
        "country": "Germany",
        "quote": "I almost didn’t come. I kept delaying. But something told me to say yes. And now, I feel like I’ve come back to life."
    }
]

// Video IDs
const videoPublicIds = ['gokarna1_gahjso', 'gokarna2_rw7twi']

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-white border-2 border-black-500 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-emerald-900 mb-4">
                        Guest Testimonials
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Hear from our guests about their healing journey at Ayurveda Gokarna
                    </p>
                </div>

                {/* Unified Grid for Text AND Videos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                    {/* 1. Render Text Testimonials */}
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={`${testimonial.name}-${testimonial.country_code}-${index}`}
                            className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center mb-6">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0 bg-emerald-100 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-emerald-700">
                                        {testimonial.name.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-emerald-900">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm">{testimonial.country}</p>
                                </div>
                            </div>
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 leading-relaxed italic">
                                "{testimonial.quote}"
                            </p>
                        </div>
                    ))}

                </div>

                {/* Videos Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-10">
                    {videoPublicIds.map((id, index) => (
                        <div
                            key={`video-${id}-${index}`}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden aspect-video"
                        >
                            <iframe
                                src={`https://player.cloudinary.com/embed/?cloud_name=daydyqxdw&public_id=${id}&profile=cld-default`}
                                className="w-full h-full"
                                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                                allowFullScreen
                                style={{ border: 0 }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}