import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

const products = [
    {
      id: 1,
      name: "TrailMaster 65L Backpack",
      price: 249.99,
      rating: 4.8,
      reviewCount: 124,
      image: "/placeholder.svg?height=300&width=300",
      link: "/products/trailmaster-backpack",
    },
    {
      id: 2,
      name: "Alpine Pro 2-Person Tent",
      price: 349.99,
      rating: 4.7,
      reviewCount: 86,
      image: "/placeholder.svg?height=300&width=300",
      link: "/products/alpine-pro-tent",
    },
    {
      id: 3,
      name: "EverWarm Down Sleeping Bag",
      price: 199.99,
      rating: 4.9,
      reviewCount: 203,
      image: "/placeholder.svg?height=300&width=300",
      link: "/products/everwarm-sleeping-bag",
    },
    {
      id: 4,
      name: "TrekLite Hiking Poles (Pair)",
      price: 89.99,
      rating: 4.6,
      reviewCount: 157,
      image: "/placeholder.svg?height=300&width=300",
      link: "/products/treklite-hiking-poles",
    },
  ]

  export function ProductGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
                <div key={product.id} className="group">
                    <Link href={product.link} className="block">
                        <div className="bg-white rounded-lg overflow-hidden border border-stone-200 h-full flex flex-col">
                            <div className="relative h-64 b">
                                <Image
                                  src={product.image || "/placeholder.svg"}
                                  alt={product.name}
                                  fill 
                                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300" 
                                />
                            </div>
                            <div className="p-4 flex flex-col flex-1">
                                <h3 className="font-medium mb-1 group-hover:text-[#2E4333] transition-colors">{product.name}</h3>
                                <div className="flex items-center mb-2">
                                    <div className="flex text-amber-500">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                              key={i}
                                              className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-current" : "fill-stone-200 text-stone-200"}`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-xs text-muted-foreground ml-1">({product.reviewCount})</span>
                                </div>
                                <div className="text-lg font-bold mt-auto">${product.price.toFixed(2)}</div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
  }