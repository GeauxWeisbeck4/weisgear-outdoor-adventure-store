import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SeasonalPromotion() {
    return (
        <section className="py-12 bg-[#F5F1EB]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-2">Camping Season Is Here</h2>
                    <p className="text-muted-foreground">Gear up for your next outdoor adventure</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="relative rounded-lg overflow-hidden group h-64">
                        <Image 
                          src="/placeholder.svg?height=400&width=600"
                          alt="Tents & Shelters"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                            <h3 className="text-white text-xl font-bold mb-2">Tents & Shelters</h3>
                            <Button 
                              asChild
                                variant="outline"
                              className="bg-white/20 backdrop-blur-sm text-white border-white hover:bg-white hover:text-black w-full"
                            >
                                <Link href="/category/tents">Shop Now</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="relative rounded-lg overflow-hidden group h-64">
                        <Image 
                          src="/placeholder.svg?height=400&width=600"
                          alt="Sleeping Bags"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                            <h3 className="text-white text-xl font-bold mb-2">Sleeping Bags</h3>
                            <Button
                              asChild
                              variant="outline"
                              className="bg-white/20 backdrop-blur-sm text-white border-white hover:bg-white hover:text-black w-full"
                            >
                                <Link href="/category/sleeping-bags">Ship Now</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="relative rounded-lg overflow-hidden group h-64">
                        <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Camp Kitchen"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                        <h3 className="text-white text-xl font-bold mb-2">Camp Kitchen</h3>
                        <Button
                            asChild
                            variant="outline"
                            className="bg-white/20 backdrop-blur-sm text-white border-white hover:bg-white hover:text-black w-full"
                        >
                            <Link href="/category/camp-kitchen">Shop Now</Link>
                        </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}