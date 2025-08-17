import { EducaTest } from "@/components/educa-test"
import { EducaJourney } from "@/components/educa-journey"
import { EducaBoard } from "@/components/educa-board"
import { EducaRoom } from "@/components/educa-room"
import { EducaHelp } from "@/components/educa-help"
import { Waves, Anchor } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#c8ffff] via-[#23acf6] to-[#0571d3]">
      {/* Ocean Header */}
      <header className="relative overflow-hidden bg-[#0571d3] text-white p-6">
        <div className="absolute inset-0 opacity-20">
          <Waves className="absolute top-4 left-4 w-8 h-8 animate-pulse" />
          <Waves className="absolute top-8 right-12 w-6 h-6 animate-pulse delay-300" />
          <Waves className="absolute bottom-6 left-1/3 w-10 h-10 animate-pulse delay-700" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Anchor className="w-8 h-8" />
            <h1 className="text-4xl font-bold">EducaSEA</h1>
          </div>
          <p className="text-xl opacity-90">Dive Deep into Learning - Navigate Your Educational Journey</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Assessment Section */}
        <section className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
          <h2 className="text-2xl font-bold text-[#0571d3] mb-4 flex items-center gap-2">
            <span>🧭</span> Discover Your Learning Current
          </h2>
          <EducaTest />
        </section>

        {/* Journey Section */}
        <section className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
          <h2 className="text-2xl font-bold text-[#0571d3] mb-4 flex items-center gap-2">
            <span>🗺️</span> Chart Your Course
          </h2>
          <EducaJourney />
        </section>

        {/* Leaderboard Section */}
        <section className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
          <h2 className="text-2xl font-bold text-[#0571d3] mb-4 flex items-center gap-2">
            <span>🏆</span> Ocean Champions
          </h2>
          <EducaBoard />
        </section>

        {/* Collectibles Room */}
        <section className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
          <h2 className="text-2xl font-bold text-[#0571d3] mb-4 flex items-center gap-2">
            <span>🐚</span> Treasure Collection
          </h2>
          <EducaRoom />
        </section>

        {/* Help Section */}
        <section className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
          <h2 className="text-2xl font-bold text-[#0571d3] mb-4 flex items-center gap-2">
            <span>🐙</span> Navigator's Aid
          </h2>
          <EducaHelp />
        </section>
      </main>
    </div>
  )
}
