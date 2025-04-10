import Image from "next/image";
import Link from "next/link";

const brands = [
    { id: 1, name: "Patagonia", image: "/placeholder.svg?height=100&width=100", link: "/brands/patagonia" },
    { id: 2, name: "The North Face", image: "/placeholder.svg?height=100&width=100", link: "/brands/the-north-face" },
    { id: 3, name: "Columbia", image: "/placeholder.svg?height=100&width=100", link: "/brands/columbia" },
    { id: 4, name: "Arc'teryx", image: "/placeholder.svg?height=100&width=100", link: "/brands/arcteryx" },
    { id: 5, name: "Marmot", image: "/placeholder.svg?height=100&width=100", link: "/brands/marmot" },
    { id: 6, name: "Mountain Hardwear", image: "/placeholder.svg?height=100&width=100", link: "/brands/mountain-hardwear" },
]

export function FeaturedBrands() {
    return (
        <section className="py-12 bg-stone-50">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-8">Get Outside With Great Brands</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                    {brands.map((brand) => (
                        <Link key={brand.id} href={brand.link} className="group">
                            <div className="relative w-full aspect-square mb-3 overflow-hidden rounded-lg bg-white p-4 border border-stone-200">
                                <Image
                                  src={brand.image || "/placeholder.svg"}
                                  alt={brand.name}
                                  fill 
                                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300" 
                                />
                            </div>
                            <span className="text-sm font-medium">{brand.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}