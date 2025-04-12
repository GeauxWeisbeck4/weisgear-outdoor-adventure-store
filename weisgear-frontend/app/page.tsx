import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingCart, User, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { HeroCarousel } from "@/components/hero-carousel";
import { CategoryGrid } from "@/components/category-grid";
import { FeaturedBrands } from "@/components/featured-brands";
import { StoryCards } from "@/components/story-cards";
import { ProductGrid } from "@/components/product-grid";
import { SeasonalPromotion } from "@/components/seasonal-promotion";
import { ValueProps } from "@/components/value-props";
import { Newsletter } from "@/components/newsletter";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Navigation */}
      <header className="border-b">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2 md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </Button>
          </div>

          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="WeisGear" width={120} height={40} className="h-10 w-auto" />
          </Link>

          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search for gear & adventures..." className="pl-10 w-full bg-muted/40" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Search" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Account">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Cart" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">3</Badge>
            </Button>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="hidden md:block bg-[#2E4333] text-white">
          <div className="container mx-auto px-4">
            <ul className="flex space-x-8">
              <li className="py-3 hover:text-amber-300 transition-colors">
                <Link href="/category/camp-hike">Camp & Hike</Link>
              </li>
              <li className="py-3 hover:text-amber-300 transition-colors">
                <Link href="/category/climb">Climb</Link>
              </li>
              <li className="py-3 hover:text-amber-300 transition-colors">
                <Link href="/category/cycle">Cycle</Link>
              </li>
              <li className="py-3 hover:text-amber-300 transition-colors">
                <Link href="/category/water">Water</Link>
              </li>
              <li className="py-3 hover:text-amber-300 transition-colors">
                <Link href="/category/run">Run</Link>
              </li>
              <li className="py-3 hover:text-amber-300 transition-colors">
                <Link href="/category/fitness">Fitness</Link>
              </li>
              <li className="py-3 hover:text-amber-300 transition-colors">
                <Link href="/category/snow">Snow</Link>
              </li>
              <li className="py-3 hover:text-amber-300 transition-colors">
                <Link href="/category/travel">Travel</Link>
              </li>
              <li className="py-3 hover:text-amber-300 transition-colors">
                <Link href="/deals">Deals</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Carousel */}
        <HeroCarousel />

        {/* Sale Promotion */}
        <section className="py-8 bg-amber-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Spring Adventure Sale!</h2>
            <p className="text-xl mb-6">Up to 50% off select outdoor gear</p>
            <Button className="bg-[#2E4333] hover:bg-[#1A2A1E] text-white">Shop Now</Button>
          </div>
        </section>

        {/* Featured Brands */}
        <FeaturedBrands />

        {/* Category Grid */}
        <CategoryGrid />

        {/* Seasonal Promotions */}
        <SeasonalPromotion />

        {/* Story Cards */}
        <StoryCards />

        {/* Featured Products */}
        <section className="py-12 bg-stone-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Popular Right Now</h2>
            <ProductGrid />
          </div>
        </section>

        {/* Value Props */}
        <ValueProps />

        {/* Newsletter */}
        <Newsletter />
      </main>

      <footer className="bg-[#2E4333] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Shop</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-amber-300 transition-colors">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-300 transition-colors">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-300 transition-colors">
                    Best Sellers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-300 transition-colors">
                    Deals & Outlet
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-300 transition-colors">
                    Gift Cards
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Adventures</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-amber-300 transition-colors">
                    Guided Trips
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-300 transition-colors">
                    Classes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-300 transition-colors">
                    Local Events
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-300 transition-colors">
                    Expert Advice
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-300 transition-colors">
                    Trail Guides
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Membership</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-amber-300 transition-colors">
                    Join WeisGear
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-300 transition-colors">
                    Member Benefits
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-300 transition-colors">
                    Lifetime Warranty
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-300 transition-colors">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-300 transition-colors">
                    Our Story
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Help</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-amber-300 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-300 transition-colors">
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-300 transition-colors">
                    Order Status
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-300 transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-300 transition-colors">
                    Size Charts
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm">
            <p>© {new Date().getFullYear()} WeisGear Outdoor Adventure Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
