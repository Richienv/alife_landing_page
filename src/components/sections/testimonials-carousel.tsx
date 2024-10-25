"use client";

import Section from "@/components/section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ShineBorder from "@/components/ui/shine-border";
import Image from "next/image";
import { BlueGradientSeparator } from "@/components/blue-gradient-separator";
import { GradientBlur } from "@/components/ui/gradient-blur";

const bonuses = [
  {
    title: "Exclusive Podcast",
    description: "Dengerin cerita dari entrepreneurs sukses langsung dari mereka!",
    image: "/dashboard.png",
  },
  {
    title: "Free Exclusive Trip",
    description: "Enjoy perjalanan gratis bersama komunitas asik.",
    image: "/dashboard.png",
  },
  {
    title: "Personal Development Classes",
    description: "Upgrade skill bisnismu dengan mentorship terbaik.",
    image: "/dashboard.png",
  },
  {
    title: "Broad Network",
    description: "Bertemu dengan para pebisnis muda di seluruh Indonesia.",
    image: "/dashboard.png",
  },
  {
    title: "Private Events",
    description: "Nikmati event-event seru yang eksklusif hanya untuk members.",
    image: "/dashboard.png",
  },
];

export default function BonusCarousel() {
  return (
    <>
      <BlueGradientSeparator />
      <Section className="py-12 relative overflow-hidden">
        <GradientBlur 
          className="top-[10%] left-[10%]" 
          size="medium" 
          position="left" 
          intensity="high" 
        />
        <GradientBlur 
          className="bottom-[10%] right-[10%]" 
          size="large" 
          position="right" 
          intensity="high" 
        />
        
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">Kerja Keras Kamu Akan Sangat di Apresiasi.</h2>
            <hr className="w-24 mx-auto border-t-2 border-primary mb-4" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your effort, your reward. Semakin giat kamu bekerja, semakin besar penghasilan yang bisa kamu capai.
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {bonuses.map((bonus, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <div className="p-1"> {/* Added padding to prevent cropping */}
                    <ShineBorder 
                      borderRadius={16} 
                      borderWidth={1} 
                      color={["#f0f0f0", "#e0e0e0"]} 
                      className="h-full w-full"
                    >
                      <div className="h-[400px] flex flex-col">
                        <div className="relative w-full h-2/3">
                          <Image
                            src={bonus.image}
                            alt={bonus.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-t-lg"
                          />
                        </div>
                        <div className="p-4 flex flex-col justify-end flex-grow">
                          <h4 className="text-lg font-semibold mb-2">{bonus.title}</h4>
                          <p className="text-sm text-muted-foreground">{bonus.description}</p>
                        </div>
                      </div>
                    </ShineBorder>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 space-x-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </Section>
    </>
  );
}
