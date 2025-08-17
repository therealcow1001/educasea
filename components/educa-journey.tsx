"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle, Lock, Star } from "lucide-react"

const journeyPaths = [
  {
    id: "engineering",
    name: "Engineering Depths",
    description: "Dive into technical problem-solving",
    color: "#0571d3",
    progress: 65,
    islands: [
      { id: 1, name: "Mathematics Reef", completed: true, current: false },
      { id: 2, name: "Physics Currents", completed: true, current: false },
      { id: 3, name: "Programming Lagoon", completed: false, current: true },
      { id: 4, name: "Design Archipelago", completed: false, current: false },
      { id: 5, name: "Innovation Ocean", completed: false, current: false },
    ],
  },
  {
    id: "creative",
    name: "Creative Tides",
    description: "Explore artistic and design currents",
    color: "#23acf6",
    progress: 40,
    islands: [
      { id: 1, name: "Art Atoll", completed: true, current: false },
      { id: 2, name: "Design Bay", completed: false, current: true },
      { id: 3, name: "Music Marina", completed: false, current: false },
      { id: 4, name: "Writing Waters", completed: false, current: false },
    ],
  },
]

export function EducaJourney() {
  const [selectedPath, setSelectedPath] = useState<string | null>(null)

  if (selectedPath) {
    const path = journeyPaths.find((p) => p.id === selectedPath)
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-[#0571d3]">{path?.name}</h3>
          <Button variant="outline" onClick={() => setSelectedPath(null)} className="border-[#23acf6] text-[#0571d3]">
            View All Paths
          </Button>
        </div>

        <Card className="bg-gradient-to-r from-[#c8ffff] to-white border-[#23acf6]">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-[#0571d3]">Journey Progress</CardTitle>
              <Badge className="bg-[#23acf6]">{path?.progress}% Complete</Badge>
            </div>
            <Progress value={path?.progress} className="h-3" />
          </CardHeader>
        </Card>

        <div className="grid gap-4">
          {path?.islands.map((island, index) => (
            <Card
              key={island.id}
              className={`transition-all duration-300 ${
                island.completed
                  ? "bg-gradient-to-r from-green-50 to-[#c8ffff] border-green-300"
                  : island.current
                    ? "bg-gradient-to-r from-[#c8ffff] to-white border-[#23acf6] shadow-lg"
                    : "bg-gray-50 border-gray-200"
              }`}
            >
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  {island.completed ? (
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  ) : island.current ? (
                    <Circle className="w-6 h-6 text-[#23acf6]" />
                  ) : (
                    <Lock className="w-6 h-6 text-gray-400" />
                  )}
                  <div>
                    <h4
                      className={`font-semibold ${
                        island.completed ? "text-green-700" : island.current ? "text-[#0571d3]" : "text-gray-500"
                      }`}
                    >
                      {island.name}
                    </h4>
                    {island.current && <p className="text-sm text-[#0571d3]">Currently exploring...</p>}
                  </div>
                </div>
                {island.current && <Button className="bg-[#23acf6] hover:bg-[#0571d3]">Continue Journey</Button>}
                {island.completed && <Star className="w-5 h-5 text-yellow-500 fill-current" />}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {journeyPaths.map((path) => (
        <Card
          key={path.id}
          className="hover:shadow-lg transition-all duration-300 cursor-pointer border-[#c8ffff] hover:border-[#23acf6]"
          onClick={() => setSelectedPath(path.id)}
        >
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-[#0571d3]">{path.name}</CardTitle>
              <Badge className="bg-[#c8ffff] text-[#0571d3]">{path.progress}%</Badge>
            </div>
            <CardDescription>{path.description}</CardDescription>
            <Progress value={path.progress} className="h-2" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-[#0571d3]">
              <span>{path.islands.length} Islands to Explore</span>
              <span>•</span>
              <span>{path.islands.filter((i) => i.completed).length} Completed</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
