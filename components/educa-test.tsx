"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

const assessmentTypes = [
  {
    id: "gardner",
    name: "Multiple Intelligence Compass",
    description: "Discover your unique learning currents using Gardner's theory",
    icon: "🧠",
    duration: "15 min",
    questions: 40,
  },
  {
    id: "learning-style",
    name: "Navigation Style Assessment",
    description: "Find your preferred way to sail through knowledge",
    icon: "⛵",
    duration: "10 min",
    questions: 25,
  },
  {
    id: "subject-affinity",
    name: "Subject Current Detector",
    description: "Identify which academic waters you naturally flow in",
    icon: "🌊",
    duration: "12 min",
    questions: 30,
  },
]

export function EducaTest() {
  const [selectedTest, setSelectedTest] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)

  const startAssessment = (testId: string) => {
    setSelectedTest(testId)
    setProgress(0)
    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 500)
  }

  if (selectedTest) {
    const test = assessmentTypes.find((t) => t.id === selectedTest)
    return (
      <div className="space-y-6">
        <Card className="border-[#23acf6] bg-gradient-to-r from-[#c8ffff] to-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#0571d3]">
              {test?.icon} {test?.name}
            </CardTitle>
            <CardDescription>Navigate through the assessment waters...</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Progress value={progress} className="h-3" />
              <p className="text-sm text-[#0571d3]">
                Question {Math.floor(progress / (100 / (test?.questions || 1)) + 1)} of {test?.questions}
              </p>
              {progress === 100 && (
                <div className="text-center space-y-4">
                  <div className="text-2xl">🎉</div>
                  <p className="text-[#0571d3] font-semibold">Assessment Complete!</p>
                  <Button onClick={() => setSelectedTest(null)} className="bg-[#23acf6] hover:bg-[#0571d3]">
                    View Results & Start Journey
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {assessmentTypes.map((test) => (
        <Card
          key={test.id}
          className="hover:shadow-lg transition-all duration-300 border-[#c8ffff] hover:border-[#23acf6]"
        >
          <CardHeader>
            <div className="text-4xl mb-2">{test.icon}</div>
            <CardTitle className="text-[#0571d3]">{test.name}</CardTitle>
            <CardDescription>{test.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Badge variant="secondary" className="bg-[#c8ffff] text-[#0571d3]">
                  {test.duration}
                </Badge>
                <Badge variant="secondary" className="bg-[#c8ffff] text-[#0571d3]">
                  {test.questions} questions
                </Badge>
              </div>
              <Button onClick={() => startAssessment(test.id)} className="w-full bg-[#23acf6] hover:bg-[#0571d3]">
                Set Sail
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
