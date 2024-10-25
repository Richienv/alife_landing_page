"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { GradientSeparator } from "@/components/gradient-separator";
import { BlueGradientSeparator } from "@/components/blue-gradient-separator";
const alifeBenefits = [
  {
    image: "/dashboard.png",
    title: "Change Your Life",
    description: "Tired of the 9-5 grind? Stressed and busy all the time? It's time for a change. Join us and take control of your future!",
  },
  {
    title: "Unlock Your Potential",
    description: "We'll take you by the hand and show you the ropes. Our goal is to help you become the leader you're meant to be!",
    image: "/dashboard.png",
  },
  {
    title: "Financial Freedom",
    description: "Make this business your own. If you're willing to put in the work, you will achieve your goals and your dreams.",
    image: "/dashboard.png",
  },
];

export default function WhatIsAlifeSection() {
  return (
    <div className="relative overflow-hidden w-full">
      {/* Enhanced radial gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-600/30 via-purple-600/20 to-red-600/30" />
      
      {/* Additional circular gradients for more pop */}
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-radial from-blue-500/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-gradient-radial from-red-500/40 to-transparent rounded-full blur-3xl" />
      
      {/* Softer side gradients with masking and subtle trimming at top/bottom */}
      <div className="absolute left-0 top-0 bottom-0 w-64 bg-gradient-to-r from-blue-500/50 to-transparent [mask-image:linear-gradient(to_right,black,transparent)] [mask-image:radial-gradient(ellipse_at_left,black_10%,transparent_70%)]" />
      <div className="absolute right-0 top-0 bottom-0 w-64 bg-gradient-to-l from-red-500/50 to-transparent [mask-image:linear-gradient(to_left,black,transparent)] [mask-image:radial-gradient(ellipse_at_right,black_10%,transparent_70%)]" />
      
      
      
      <div className="relative z-10 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Terima Perubahan dan Kita Sukses Bareng!</h2>
          <div className="w-40 h-1 mx-auto bg-gradient-to-r from-blue-400 to-blue-600 mb-6"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <BentoGrid className="grid-cols-1 md:grid-cols-2 gap-6">
            <BentoGridItem
              title={alifeBenefits[0].title}
              description={alifeBenefits[0].description}
              header={
                <div className="relative w-full h-full aspect-[2/1]">
                  <Image
                    src={alifeBenefits[0].image}
                    alt="Alife Overview"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                </div>
              }
              className="md:col-span-2 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-xl overflow-hidden"
            />
            {alifeBenefits.slice(1, 3).map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={
                  <div className="relative w-full h-full aspect-square">
                    <Image
                      src={item.image}
                      alt={item.title || ''}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xl"
                    />
                  </div>
                }
                className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-xl overflow-hidden"
              />
            ))}
          </BentoGrid>
          
          <motion.p 
            className="text-xl lg:text-2xl max-w-3xl mx-auto mt-12 lg:mt-20 text-center font-sans leading-relaxed"
            style={{
              background: "linear-gradient(to right, #ffffff, #e0e0e0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Kami membuka kesempatan untuk pria dan wanita yang ingin meraih kebebasan dan pertumbuhan finansial Kalau kamu ambisius tapi masih ragu untuk memulai, this is your moment! Kamu tahu kamu bisa lebih, tapi kurang pengalaman? Jangan khawatir, I got you!
          </motion.p>
            <BlueGradientSeparator />
          {/* <GradientSeparator className="mt-16" /> */}

        </div>
      </div>
    </div>
  );
}
