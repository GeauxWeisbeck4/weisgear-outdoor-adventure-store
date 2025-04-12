"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
    {
        id: 1,
        image: "/placeholder.svg?height=600&width=1200",
        title: "Gear Up For Your Next Adventure",
        description: "Quality outdoor equipment for every expedition",
        ctaText: "Show New Arrivals",
        ctaLink: "/new-arrivals",
    },
    {
        id: 2,
        image: "/placeholder.svg?height=600&width=1200",
        title: "Stories From The Trail",
        description: "Discover how our gear performs in the wild",
        ctaText: "Read Stories",
        ctaLink: "/stories",
    },
    {
        id: 3,
        image: "/placeholder.svg?height=600&width=1200",
        title: "Join The WeisGear Community",
        description: "Connect with fellow outdoor enthusiasts",
        ctaText: "Learn More",
        ctaLink: "/community",
    },
]

export function HeroCarousel() {
    const [ currentSlide, setCurrentSlide ] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
            {heroSlides.map((slide, index) => (
                <div className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                    <div className="absolute inset-0 bg-black/30 z-10" />
                        <Image 
                          src={slide.image || "/placeholder.svg"}
                          alt={slide.title}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                    <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <div className="text-center text-white max-w-3xl px-4">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{slide.title}</h1>
                            <p className="text-lg md:text-xl mb-6">{slide.description}</p>
                            <Button className="bg-amber-500 hover:bg-amber-600 text-black font-medium">
                                {slide.ctaText}
                            </Button>
                        </div>
                    </div>
                </div>
            ))}

            <Button variant="ghost" size="icon" className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white hover:bg-black/20 h-10 w-10 rounded-full" onClick={prevSlide}>
                <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button variant="ghost" size="icon" className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white hover:bg-black/20 h-10 w-10 rounded-full" onClick={nextSlide}>
                <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
                {heroSlides.map((_, index) => (
                    <Button
                      key={index}
                      className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"}`}
                      onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    )
}