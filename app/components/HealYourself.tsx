"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

interface SectionData {
  heading: string;
  description: string[];
  image: string;
}

interface HealSectionProps {
  item: SectionData;
  index: number;
  onInView: (index: number) => void;
  isActive: boolean;
}

const HealSection = ({ item, index, onInView, isActive }: HealSectionProps) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    rootMargin: "-20% 0px -20% 0px"
  });

  useEffect(() => {
    if (inView) {
      onInView(index);
    }
  }, [inView, index, onInView]);

  return (
    <motion.div
      ref={ref}
      className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden border-t border-emerald-100/50 shadow-sm first:border-t-0"
      style={{
        backgroundColor: "#f0fdf4",
        zIndex: index + 1,              
      }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-16">
          
          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isActive ? 1 : 0.5,
                y: isActive ? 0 : 20
              }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-3xl font-bold text-emerald-900 sm:text-4xl md:text-5xl"
            >
              {item.heading}
            </motion.h3>
            <ul className="space-y-4">
              {item.description.map((desc, descIndex) => (
                <li
                  key={descIndex}
                  className="flex items-start text-lg text-gray-700 md:text-xl"
                >
                  {desc}
                </li>
              ))}
            </ul>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center">
            <div className="relative h-48 w-48 overflow-hidden rounded-full border-8 border-emerald-100/50 shadow-2xl sm:h-48 sm:w-48 ">
              <Image
                src={item.image}
                alt={item.heading}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

const HealYourself = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const textData: SectionData[] = [
    {
      heading: "Heal the mind",
      description: [
        `Guided meditation & breathwork`,
        `Stress detox rituals`,
        `Digital-detox environment`,
        `Emotional clarity sessions with experts`,
        `Silent ocean walks to calm mental noise`,
      ],
      image: "/mind.jpeg",
    },
    {
      heading: "Heal the body",
      description: [
        `Personalized Ayurvedic therapies`,
        `Dosha-specific healing plan`,
        `Daily yoga for strength & flexibility`,
        `Ayurvedic meals, herbal drinks, fruits, coconut`,
      ],
      image: "/body.jpeg",
    },
    {
      heading: "Heal the soul",
      description: [
        `Reconnect. Realign. Awaken.`,
        `Mountain-side contemplation`,
        `Ocean-energy balancing`,
        `Chakra-aligned practices`,
        `Traditional rituals for emotional release`,
        `Meaningful conversations with healers`,
      ],
      image: "/soul.jpeg",
    },
  ];

  return (
    <section className="relative w-full bg-emerald-50" style={{ height: `${textData.length * 100}vh` }}>
      {textData.map((item, index) => (
        <HealSection
          key={index}
          item={item}
          index={index}
          onInView={setActiveIndex}
          isActive={activeIndex === index}
        />
      ))}
    </section>
  );
};

export default HealYourself;