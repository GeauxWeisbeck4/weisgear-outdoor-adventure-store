import { Truck, RotateCcw, ShieldCheck, Clock } from "lucide-react"

export function ValueProps() {
  return (
    <section className="py-12 border-t border-b">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center gap-4">
            <div className="bg-[#2E4333] text-white p-3 rounded-full">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">On orders over $49</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-[#2E4333] text-white p-3 rounded-full">
              <RotateCcw className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold">Easy Returns</h3>
              <p className="text-sm text-muted-foreground">365-day return policy</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-[#2E4333] text-white p-3 rounded-full">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold">Lifetime Warranty</h3>
              <p className="text-sm text-muted-foreground">On WeisGear products</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-[#2E4333] text-white p-3 rounded-full">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold">Expert Support</h3>
              <p className="text-sm text-muted-foreground">7 days a week</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
