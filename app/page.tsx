import { EducaTest } from "@/components/educa-test"
import { EducaJourney } from "@/components/educa-journey"
import { EducaBoard } from "@/components/educa-board"
import { EducaRoom } from "@/components/educa-room"
import { EducaHelp } from "@/components/educa-help"
import { Waves, Anchor, Fish, Shell, Compass } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen ocean-bg relative overflow-hidden">
      <div className="floating-element top-10 left-10 animate-float">
        <Fish className="w-8 h-8 text-primary/30" />
      </div>
      <div className="floating-element top-32 right-20 animate-wave delay-300">
        <Shell className="w-6 h-6 text-secondary/40" />
      </div>
      <div className="floating-element bottom-40 left-1/4 animate-bubble delay-700">
        <div className="w-4 h-4 bg-primary/20 rounded-full"></div>
      </div>
      <div className="floating-element bottom-60 right-1/3 animate-float delay-500">
        <Compass className="w-10 h-10 text-accent/30" />
      </div>

      {/* Ocean Header */}
      <header className="relative overflow-hidden bg-primary text-primary-foreground p-8">
        <div className="absolute inset-0 opacity-20">
          <Waves className="absolute top-4 left-4 w-8 h-8 animate-pulse" />
          <Waves className="absolute top-8 right-12 w-6 h-6 animate-pulse delay-300" />
          <Waves className="absolute bottom-6 left-1/3 w-10 h-10 animate-pulse delay-700" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Anchor className="w-10 h-10 animate-wave" />
            <h1 className="text-5xl font-bold">EducaSEA</h1>
          </div>
          <p className="text-2xl opacity-90 font-medium">Dive Deep into Learning - Navigate Your Educational Journey</p>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto p-8 space-y-12">
        {/* Assessment Section */}
        <section className="glass-card rounded-3xl p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
            <span className="text-4xl">🧭</span> Discover Your Learning Current
          </h2>
          <EducaTest />
        </section>

        {/* Journey Section */}
        <section className="glass-card rounded-3xl p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
            <span className="text-4xl">🗺️</span> Chart Your Course
          </h2>
          <EducaJourney />
        </section>

        {/* Leaderboard Section */}
        <section className="glass-card rounded-3xl p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
            <span className="text-4xl">🏆</span> Ocean Champions
          </h2>
          <EducaBoard />
        </section>

        {/* Collectibles Room */}
        <section className="glass-card rounded-3xl p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
            <span className="text-4xl">🐚</span> Treasure Collection
          </h2>
          <EducaRoom />
        </section>

        {/* Help Section */}
        <section className="glass-card rounded-3xl p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
            <span className="text-4xl">🐙</span> Navigator's Aid
          </h2>
          <EducaHelp />
        </section>
      </main>

      <div className="h-20"></div>
    </div>
  )
}
