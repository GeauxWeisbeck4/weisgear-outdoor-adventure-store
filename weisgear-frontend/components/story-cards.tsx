import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const stories = [
  {
    id: 1,
    title: "The Trail Less Traveled",
    description: "Discover hidden gems in the Pacific Northwest with our expert guide",
    image: "/placeholder.svg?height=400&width=600",
    link: "/stories/trail-less-traveled",
  },
  {
    id: 2,
    title: "Gear That Lasts Generations",
    description: "How WeisGear's commitment to quality creates heirlooms, not just products",
    image: "/placeholder.svg?height=400&width=600",
    link: "/stories/gear-that-lasts",
  },
  {
    id: 3,
    title: "From Summit to Sea",
    description: "One adventurer's journey across diverse landscapes with versatile gear",
    image: "/placeholder.svg?height=400&width=600",
    link: "/stories/summit-to-sea",
  },
]

export function StoryCards() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2">Stories From The Wild</h2>
        <p className="text-muted-foreground mb-8">Expert advice & inspiration for your next adventure</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <div key={story.id} className="group">
              <div className="bg-[#2E4333] text-white rounded-lg overflow-hidden flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                  <p className="text-stone-200 mb-4 flex-1">{story.description}</p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-[#2E4333] transition-colors mt-auto"
                  >
                    <Link href={story.link}>Read More</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

