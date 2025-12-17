'use client';

import Image from 'next/image';
import { ReactLenis, useLenis } from 'lenis/react'; // Correct import
import './HealYourself.css';
import { useRef, RefObject, createRef, useEffect, useState } from 'react';
import { playfair, inter } from "@/app/fonts";

const textData = [
  {
    word: "mind",
    description: [
      "Guided meditation & breathwork",
      "Stress detox rituals",
      "Digital-detox environment",
      "Emotional clarity sessions with experts",
      "Silent ocean walks to calm mental noise",
    ],
    image: "/mind.jpeg",
  },
  {
    word: "body",
    description: [
      "Personalized Ayurvedic therapies",
      "Dosha-specific healing plan",
      "Daily yoga for strength & flexibility",
      "Ayurvedic meals, herbal drinks, fruits, coconut",
    ],
    image: "/body.jpeg",
  },
  {
    word: "soul",
    description: [
      "Reconnect. Realign. Awaken.",
      "Mountain-side contemplation",
      "Ocean-energy balancing",
      "Chakra-aligned practices",
      "Traditional rituals for emotional release",
      "Meaningful conversations with healers",
    ],
    image: "/soul.jpeg",
  },
];

const HealYourself = () => {

  const accentColors = {
    mind: "#7FB9B2",   // calm teal (from image)
    body: "#C49A6C",   // warm earthy sand
    soul: "#9B8AD6",   // soft spiritual lavender
  };

  const sectionRefs = useRef<RefObject<HTMLDivElement | null>[]>(textData.map(() => createRef<HTMLDivElement>()));
  const [inViewSections, setInViewSections] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((sectionRef, index) => {
      if (!sectionRef.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const rect = entry.boundingClientRect;
            const midViewportHeight = window.innerHeight / 2;
            
            // Check if element has reached mid-viewport height
            // Element is considered visible when its top reaches or passes mid-viewport
            // and it's still intersecting with the viewport
            const hasReachedMidViewport = rect.top <= midViewportHeight && rect.bottom >= 0;
            
            setInViewSections((prev) => {
              const next = new Set(prev);
              if (hasReachedMidViewport && entry.isIntersecting) {
                next.add(index);
              } else {
                next.delete(index);
              }
              return next;
            });
          });
        },
        {
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
          rootMargin: '0px',
        }
      );

      observer.observe(sectionRef.current);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  useLenis(() => {});

  return (
    <ReactLenis root>
      {textData.map((item, index) => {
        const sectionRef = sectionRefs.current[index];
        const isInView = inViewSections.has(index);
        return (
          <section ref={sectionRef} key={index} className={`relative h-[100vh] flex flex-col mt-10 mb-5 sm:mt-20 sm:mb-10 sm:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 ${isInView ? "section-enter" : "section-exit"}`}>
            <div className={`relative rounded-full w-35 h-35 sm:w-50 sm:h-50 freeze-animate ${isInView ? "image-enter" : "image-exit"}`} >
              <Image src={item.image} alt={item.word} fill className="rounded-full object-cover " />
            </div>
            <div className=' flex flex-col justify-center items-center'>
              <h1 className={`${playfair.className} text-3xl md:text-6xl font-bold mb-6 sm:mb-12 freeze-animate ${isInView ? "heading-enter" : "heading-exit"}`}>
                Heal the <span style={{ color: accentColors[item.word as keyof typeof accentColors] }}
                  className="font-semibold tracking-tight">{item.word}</span>
              </h1>
              <div className={`space-y-4
                  text-md sm:text-lg md:text-xl
                  leading-[1.55]
                  tracking-tight sm:text-lg md:text-xl leading-relaxed freeze-animate ${isInView ? "text-enter" : "text-exit"}`}>
                {item.description.map((line, i) => (
                  <p className={`${inter.className} max-w-xl
                  
                  text-gray-600
                  text-center
                  mx-auto
                `} key={i}>{line}</p>
                ))}
              </div>
            </div>

          </section>
        );
      })}

    </ReactLenis>
  )

};

export default HealYourself;