import HeroSection from "@/components/HeroSection"
import FeaturedSection from "@/components/FeaturedSection"
import LiveSection from "@/components/LiveSection"
// import Footer from "@/components/Footer" // <-- REMOVIDO
import FloatingChat from "@/components/FloatingChat"
import NavigationArrows from "@/components/NavigationArrows"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-600">
      <main className="pt-16">
        <HeroSection />
        <LiveSection />
        <FeaturedSection />
      </main>
      {/* <Footer /> */} {/* <-- REMOVIDO */}
      <FloatingChat />
      <NavigationArrows />
    </div>
  )
}