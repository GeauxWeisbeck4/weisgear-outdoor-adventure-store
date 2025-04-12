import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
    return (
        <section className="py-16 bg-[#2E4333] text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold mb-2">Join The WeisGear Community</h2>
                <p className="text-stone-200 mb-6 max-w-xl mx-auto">Sign up for our newsletter to receive product updates, adventure stories, and exclusive offers.</p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <Input 
                      type="email"
                      placeholder="Your email address"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                    <Button className="bg-amber-500 hover:bg-amber-600 text-black font-medium">Subscribe</Button>
                </div>
            </div>
        </section>
    );
}