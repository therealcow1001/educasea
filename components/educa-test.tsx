"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

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

const quizData = {
  gardner: {
    questions: [
      {
        id: 1,
        question: "When learning something new, you prefer to:",
        options: [
          { id: "a", text: "Read about it in detail", intelligence: "linguistic" },
          { id: "b", text: "See charts and diagrams", intelligence: "spatial" },
          { id: "c", text: "Try it hands-on immediately", intelligence: "kinesthetic" },
          { id: "d", text: "Discuss it with others", intelligence: "interpersonal" },
        ],
      },
      {
        id: 2,
        question: "Your ideal study environment includes:",
        options: [
          { id: "a", text: "Complete silence with books", intelligence: "linguistic" },
          { id: "b", text: "Background music", intelligence: "musical" },
          { id: "c", text: "Open space to move around", intelligence: "kinesthetic" },
          { id: "d", text: "Study groups", intelligence: "interpersonal" },
        ],
      },
      {
        id: 3,
        question: "You're best at remembering:",
        options: [
          { id: "a", text: "Names and stories", intelligence: "linguistic" },
          { id: "b", text: "Faces and places", intelligence: "spatial" },
          { id: "c", text: "Songs and melodies", intelligence: "musical" },
          { id: "d", text: "Numbers and patterns", intelligence: "logical" },
        ],
      },
      {
        id: 4,
        question: "In your free time, you enjoy:",
        options: [
          { id: "a", text: "Reading or writing", intelligence: "linguistic" },
          { id: "b", text: "Drawing or designing", intelligence: "spatial" },
          { id: "c", text: "Playing sports", intelligence: "kinesthetic" },
          { id: "d", text: "Solving puzzles", intelligence: "logical" },
        ],
      },
      {
        id: 5,
        question: "When giving directions, you:",
        options: [
          { id: "a", text: "Use detailed verbal instructions", intelligence: "linguistic" },
          { id: "b", text: "Draw a map", intelligence: "spatial" },
          { id: "c", text: "Use gestures and body language", intelligence: "kinesthetic" },
          { id: "d", text: "Give landmarks and distances", intelligence: "logical" },
        ],
      },
    ],
  },
  "learning-style": {
    questions: [
      {
        id: 1,
        question: "You learn best when:",
        options: [
          { id: "a", text: "You can see information", style: "visual" },
          { id: "b", text: "You can hear explanations", style: "auditory" },
          { id: "c", text: "You can practice doing it", style: "kinesthetic" },
          { id: "d", text: "You can read about it", style: "reading" },
        ],
      },
      {
        id: 2,
        question: "During a lecture, you:",
        options: [
          { id: "a", text: "Take detailed notes", style: "reading" },
          { id: "b", text: "Listen carefully", style: "auditory" },
          { id: "c", text: "Doodle or fidget", style: "kinesthetic" },
          { id: "d", text: "Watch the speaker's gestures", style: "visual" },
        ],
      },
      {
        id: 3,
        question: "To remember a phone number, you:",
        options: [
          { id: "a", text: "Write it down", style: "reading" },
          { id: "b", text: "Say it out loud", style: "auditory" },
          { id: "c", text: "Dial it immediately", style: "kinesthetic" },
          { id: "d", text: "Picture it in your mind", style: "visual" },
        ],
      },
    ],
  },
  "subject-affinity": {
    questions: [
      {
        id: 1,
        question: "Which subject excites you most?",
        options: [
          { id: "a", text: "Mathematics and Logic", subject: "stem" },
          { id: "b", text: "Literature and Writing", subject: "humanities" },
          { id: "c", text: "Art and Design", subject: "creative" },
          { id: "d", text: "History and Social Studies", subject: "social" },
        ],
      },
      {
        id: 2,
        question: "Your dream career involves:",
        options: [
          { id: "a", text: "Scientific research", subject: "stem" },
          { id: "b", text: "Creative expression", subject: "creative" },
          { id: "c", text: "Helping people", subject: "social" },
          { id: "d", text: "Analyzing information", subject: "humanities" },
        ],
      },
      {
        id: 3,
        question: "In group projects, you prefer to:",
        options: [
          { id: "a", text: "Handle data and calculations", subject: "stem" },
          { id: "b", text: "Write and present", subject: "humanities" },
          { id: "c", text: "Design and create visuals", subject: "creative" },
          { id: "d", text: "Coordinate and organize", subject: "social" },
        ],
      },
    ],
  },
}

export function EducaTest() {
  const [selectedTest, setSelectedTest] = useState<string | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState<Record<string, number>>({})

  const startAssessment = (testId: string) => {
    setSelectedTest(testId)
    setCurrentQuestion(0)
    setAnswers({})
    setSelectedAnswer("")
    setShowResults(false)
    setResults({})
  }

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value)
  }

  const handleNextQuestion = () => {
    if (!selectedAnswer) return

    const newAnswers = { ...answers, [currentQuestion]: selectedAnswer }
    setAnswers(newAnswers)
    setSelectedAnswer("")

    const currentQuiz = quizData[selectedTest as keyof typeof quizData]
    if (currentQuestion < currentQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateResults(newAnswers, currentQuiz)
    }
  }

  const calculateResults = (finalAnswers: Record<number, string>, quiz: any) => {
    const scores: Record<string, number> = {}

    Object.entries(finalAnswers).forEach(([questionIndex, answerId]) => {
      const question = quiz.questions[Number.parseInt(questionIndex)]
      const selectedOption = question.options.find((opt: any) => opt.id === answerId)

      if (selectedOption) {
        const category = selectedOption.intelligence || selectedOption.style || selectedOption.subject
        scores[category] = (scores[category] || 0) + 1
      }
    })

    setResults(scores)
    setShowResults(true)
  }

  const getResultDescription = (topCategory: string, testType: string) => {
    const descriptions: Record<string, Record<string, string>> = {
      gardner: {
        linguistic: "You're a Word Navigator! You excel with language, reading, and writing.",
        spatial: "You're a Visual Explorer! You think in images and spatial relationships.",
        musical: "You're a Rhythm Rider! You have strong musical and auditory abilities.",
        logical: "You're a Logic Captain! You excel with numbers, patterns, and reasoning.",
        kinesthetic: "You're a Motion Master! You learn best through physical activity.",
        interpersonal: "You're a Social Sailor! You understand and work well with others.",
      },
      "learning-style": {
        visual: "You're a Visual Learner! Charts, diagrams, and images help you understand best.",
        auditory: "You're an Auditory Learner! You learn best through listening and discussion.",
        kinesthetic: "You're a Hands-on Learner! You need to practice and experience to learn.",
        reading: "You're a Reading Learner! Text and written information work best for you.",
      },
      "subject-affinity": {
        stem: "You're drawn to STEM waters! Science, technology, and mathematics call to you.",
        humanities: "You navigate Humanities seas! Literature, philosophy, and analysis are your strengths.",
        creative: "You sail Creative currents! Art, design, and creative expression energize you.",
        social: "You explore Social depths! Understanding people and society fascinates you.",
      },
    }

    return descriptions[testType]?.[topCategory] || "You have a unique learning profile!"
  }

  if (selectedTest && !showResults) {
    const test = assessmentTypes.find((t) => t.id === selectedTest)
    const currentQuiz = quizData[selectedTest as keyof typeof quizData]
    const question = currentQuiz.questions[currentQuestion]
    const progress = ((currentQuestion + 1) / currentQuiz.questions.length) * 100

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
            <div className="space-y-6">
              <Progress value={progress} className="h-3" />
              <p className="text-sm text-[#0571d3]">
                Question {currentQuestion + 1} of {currentQuiz.questions.length}
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#0571d3]">{question.question}</h3>

                <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
                  {question.options.map((option: any) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.id} id={option.id} />
                      <Label htmlFor={option.id} className="cursor-pointer">
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                <div className="flex gap-2">
                  {currentQuestion > 0 && (
                    <Button
                      variant="outline"
                      onClick={() => setCurrentQuestion(currentQuestion - 1)}
                      className="border-[#23acf6] text-[#0571d3]"
                    >
                      Previous
                    </Button>
                  )}
                  <Button
                    onClick={handleNextQuestion}
                    disabled={!selectedAnswer}
                    className="bg-[#23acf6] hover:bg-[#0571d3]"
                  >
                    {currentQuestion === currentQuiz.questions.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (showResults) {
    const test = assessmentTypes.find((t) => t.id === selectedTest)
    const topCategory = Object.entries(results).reduce((a, b) => (results[a[0]] > results[b[0]] ? a : b))[0]
    const description = getResultDescription(topCategory, selectedTest!)

    return (
      <div className="space-y-6">
        <Card className="border-[#23acf6] bg-gradient-to-r from-[#c8ffff] to-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#0571d3]">🎉 Assessment Complete!</CardTitle>
            <CardDescription>Your learning voyage results are ready!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-[#0571d3] mb-2">{description}</h3>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-[#0571d3]">Your Score Breakdown:</h4>
                {Object.entries(results).map(([category, score]) => (
                  <div key={category} className="flex justify-between items-center">
                    <span className="capitalize">{category.replace(/([A-Z])/g, " $1")}</span>
                    <Badge variant="secondary" className="bg-[#c8ffff] text-[#0571d3]">
                      {score} points
                    </Badge>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <Button onClick={() => setSelectedTest(null)} className="bg-[#23acf6] hover:bg-[#0571d3]">
                  Take Another Assessment
                </Button>
                <Button variant="outline" className="border-[#23acf6] text-[#0571d3] bg-transparent">
                  Start Learning Journey
                </Button>
              </div>
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
