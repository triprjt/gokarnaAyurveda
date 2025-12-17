"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useEffect, useRef } from "react";


const FAQ = () => {
    const videoUrl = "https://player.cloudinary.com/embed/?cloud_name=daydyqxdw&public_id=buddha1_pen7nl&profile=buddha1"
    const videoRef = useRef<HTMLVideoElement>(null);


    useEffect(() => {
        const video = videoRef.current;
        if (video) {
          // Ensure video autoplays
          video.muted = true;
          video.autoplay = true;
          video.loop = true;
          video.playsInline = true;
          video.controls = false;
          
          // Play the video
          video.play().catch(err => {
            console.log('Autoplay prevented:', err);
          });
        }
      }, []);
    const fawContent = [
        { question: "What is included in the daily rate?", answer: "All-inclusive: Accommodation in ocean-side lush garden, 3 Ayurvedic meals + fresh fruits & coconut water, daily Ayurvedic treatments, morning yoga & breathwork, doctor consultation, herbal teas, and personal care. Price: $120/day (seasonal rate Dec–April)." },
        {
            question: "What does a typical day look like?", answer: `Morning: Yoga & breathwork (pranayama)
Consultation with Ayurvedic doctor
Personalized daily treatments (e.g., Abhyanga, Shirodhara)
Nourishing meals, rest, nature time
Evening: Free time for silence, walks, or sunset viewing
Emphasis on slow living with no rigid schedule.` },
        { question: "How do I get to the retreat?", answer: `Fly into Goa (GOI) or Bangalore (BLR) airports. The team can arrange trusted taxi pickup. Gokarna is a scenic few-hour drive from Goa.` },
        { question: "Is Gokarna safe and suitable for first-time visitors to India, especially solo female travelers?", answer: `Yes. Gokarna is peaceful, clean, safe, spiritually rich, and far from tourist crowds. Many solo female travelers visit comfortably.` },
        { question: "What languages are spoken at the retreat?", answer: `English, Russian, German, Hindi, Kannada. Key team members: Dr. Ratan (English, Hindi, Kannada), Lilia (Russian & English).` },
        {
            question: "Who will take care of me?", answer: `Dr. Ratan: Main Ayurvedic doctor (20+ years experience)
Lilia: Russian-speaking guest coordinator
Experienced North & South Indian therapy team
Personal, family-like care is emphasized.` },
        { question: "Why choose this retreat over others (e.g., in Europe, Bali)?", answer: `Authentic generational Ayurveda, personal heart-centered care, untouched nature, significantly lower cost, less commercial, more genuine healing experience.` },
        { question: "What should I pack?", answer: `Light cotton clothes, sandals, yoga wear, sunscreen, swimwear, hat, reusable water bottle. No need for towels, yoga mats, or Ayurvedic products — provided.` },
        { question: "When is the best time to visit?", answer: "December to April — dry, sunny, ideal weather; most popular and beautiful season." },
    ]
    return (
        <div className="w-full h-100vh bg-white py-6 sm:py-8 lg:py-10 sm:px-6 lg:px-8 ">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center sm:mb-4 lg:mb-8">Frequently Asked Questions</h2>
            <div className="w-full sm:w-4/5 h-auto sm:h-[600px] lg:h-[700px] flex flex-col sm:flex-row items-center justify-center mx-auto gap-4 sm:gap-10 py-6 sm:py-10 lg:py-20 px-4 sm:px-0">
                {/* <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="max-w-xs lg:max-w-2xl h-fit sm:h-auto object-cover z-[1] rounded-lg"
                >
                    <source src="/buddha1.mp4" type="video/mp4" />
                </video>
                 */}
                <video
                    ref={videoRef}
                    id="background-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="max-w-xs lg:max-w-2xl h-fit sm:h-auto object-cover z-[1] rounded-lg"
                >
                    <source src="https://res.cloudinary.com/daydyqxdw/video/upload/v1765954766/buddha1_pen7nl.mp4" type="video/webm" />
                    {/* <source src="https://res.cloudinary.com/daydyqxdw/video/upload/sunset_mqfjnr.mp4" type="video/mp4" /> */}
                </video>
                <Accordion className="order-2 sm:order-1 max-w-md sm:max-w-md rounded-lg h-full" type="single" collapsible>
                    {fawContent.map((item) => (
                        <AccordionItem key={item.question} value={item.question}>
                            <AccordionTrigger>{item.question}</AccordionTrigger>
                            <AccordionContent>{item.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>

    )
}

export default FAQ;