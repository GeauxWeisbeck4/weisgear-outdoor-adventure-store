import Link from "next/link";
import Image from "next/image";

const categories = [
    {
        id: 1,
        name: "Camp & Hike",
        image: "/placeholder.svg?height=200&width=200",
        link: "/category/camp-hike",
    },
    {
        id: 2,
        name: "Climb",
        image: "/placeholder.svg?height=200&width=200",
        link: "/category/climb",
    },
    {
        id: 3,
        name: "Cycle",
        image: "/placeholder.svg?height=200&width=200",
        link: "/category/cycle",
    },
    {
        id: 4,
        name: "Water",
        image: "/placeholder.svg?height=200&width=200",
        link: "/category/water",
    },
    {
        id: 5,
        name: "Run",
        image: "/placeholder.svg?height=200&width=200",
        link: "/category/run",
    },
    {
        id: 6,
        name: "Fitness",
        image: "/placeholder.svg?height=200&width=200",
        link: "/category/fitness",
    },
    {
        id: 7,
        name: "Snow",
        image: "/placeholder.svg?height=200&width=200",
        link: "/category/snow",
    },
    {
        id: 8,
        name: "Travel",
        image: "/placeholder.svg?height=200&width=200",
    },
    {
        id: 9,
        name: "Men's Clothing",
        image: "/placeholder.svg?height=200&width=200",
        link: "/category/mens-clothing",
    },
    {
        id: 10,
        name: "Women's Clothing",
        image: "/placeholder.svg?height=200&width=200",
        link: "/category/womens-clothing",
    },
];

export function CategoryGrid() {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-8">Shop Top Categories</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {categories.map((category) => (
                        <Link key={category.id} href={`${category.link}`} className="group">
                            <div className="flex flex-col items-center text-center">
                                <div className="relative w-full aspect-square mb-3 overflow-hidden rounded-lg bg-stone-100">
                                    <Image
                                        src={category.image || "/placeholder.svg"}
                                        alt={category.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <span className="text-sm font-medium">{category.name}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>        
        </section>
    );
}