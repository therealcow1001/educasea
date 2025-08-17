"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, MessageCircle, Users, BookOpen } from "lucide-react"

const helpCategories = [
  {
    id: "chatbot",
    name: "AI Navigator",
    icon: "🤖",
    description: "Get instant help from our AI assistant",
    available: true,
  },
  {
    id: "mentors",
    name: "Human Mentors",
    icon: "👨‍🏫",
    description: "Connect with experienced educators",
    available: true,
  },
  {
    id: "community",
    name: "Study Groups",
    icon: "👥",
    description: "Join peer learning communities",
    available: true,
  },
  {
    id: "resources",
    name: "Learning Resources",
    icon: "📚",
    description: "Access guides and tutorials",
    available: true,
  },
]

const mentors = [
  {
    id: 1,
    name: "Dr. Marina Depths",
    specialty: "Mathematics & Engineering",
    avatar: "/mentor-avatar.png",
    rating: 4.9,
    status: "online",
    experience: "10+ years",
  },
  {
    id: 2,
    name: "Prof. Ocean Wise",
    specialty: "Sciences & Research",
    avatar: "/mentor-avatar-2.png",
    rating: 4.8,
    status: "online",
    experience: "8+ years",
  },
  {
    id: 3,
    name: "Captain Knowledge",
    specialty: "Study Skills & Strategy",
    avatar: "/mentor-avatar-3.png",
    rating: 4.7,
    status: "busy",
    experience: "5+ years",
  },
]

const chatMessages = [
  {
    id: 1,
    sender: "AI Navigator",
    message: "Hello! I'm your AI learning assistant. How can I help you navigate your studies today?",
    timestamp: "2 min ago",
    isBot: true,
  },
  { id: 2, sender: "You", message: "I'm struggling with calculus derivatives", timestamp: "1 min ago", isBot: false },
  {
    id: 3,
    sender: "AI Navigator",
    message:
      "I can help with that! Derivatives measure the rate of change. Would you like me to explain the basic rules or help with a specific problem?",
    timestamp: "Just now",
    isBot: true,
  },
]

export function EducaHelp() {
  const [activeCategory, setActiveCategory] = useState("chatbot")
  const [message, setMessage] = useState("")

  const renderChatbot = () => (
    <div className="space-y-4">
      <Card className="border-[#23acf6] bg-gradient-to-r from-[#c8ffff] to-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-[#0571d3]">
            <MessageCircle className="w-5 h-5" />
            AI Navigator Chat
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 max-h-64 overflow-y-auto">
            {chatMessages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    msg.isBot ? "bg-[#c8ffff] text-[#0571d3]" : "bg-[#23acf6] text-white"
                  }`}
                >
                  <p className="text-sm">{msg.message}</p>
                  <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-4">
            <Input
              placeholder="Ask me anything about your studies..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border-[#c8ffff] focus:border-[#23acf6]"
            />
            <Button className="bg-[#23acf6] hover:bg-[#0571d3]">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderMentors = () => (
    <div className="space-y-4">
      {mentors.map((mentor) => (
        <Card key={mentor.id} className="border-[#c8ffff] hover:border-[#23acf6] transition-all duration-300">
          <CardContent className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src={mentor.avatar || "/placeholder.svg"} alt={mentor.name} />
                <AvatarFallback className="bg-[#c8ffff] text-[#0571d3]">
                  {mentor.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold text-[#0571d3]">{mentor.name}</h4>
                <p className="text-sm text-gray-600">{mentor.specialty}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge
                    className={`text-xs ${
                      mentor.status === "online" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {mentor.status}
                  </Badge>
                  <span className="text-xs text-gray-500">⭐ {mentor.rating}</span>
                  <span className="text-xs text-gray-500">{mentor.experience}</span>
                </div>
              </div>
            </div>
            <Button className="bg-[#23acf6] hover:bg-[#0571d3]" disabled={mentor.status === "busy"}>
              {mentor.status === "online" ? "Connect" : "Busy"}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  const renderContent = () => {
    switch (activeCategory) {
      case "chatbot":
        return renderChatbot()
      case "mentors":
        return renderMentors()
      case "community":
        return (
          <Card className="border-[#c8ffff]">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 text-[#23acf6] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#0571d3] mb-2">Study Groups</h3>
              <p className="text-gray-600 mb-4">Join collaborative learning sessions with peers</p>
              <Button className="bg-[#23acf6] hover:bg-[#0571d3]">Find Study Groups</Button>
            </CardContent>
          </Card>
        )
      case "resources":
        return (
          <Card className="border-[#c8ffff]">
            <CardContent className="p-6 text-center">
              <BookOpen className="w-12 h-12 text-[#23acf6] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#0571d3] mb-2">Learning Resources</h3>
              <p className="text-gray-600 mb-4">Access comprehensive guides and tutorials</p>
              <Button className="bg-[#23acf6] hover:bg-[#0571d3]">Browse Resources</Button>
            </CardContent>
          </Card>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {helpCategories.map((category) => (
          <Card
            key={category.id}
            className={`cursor-pointer transition-all duration-300 ${
              activeCategory === category.id
                ? "border-[#23acf6] bg-gradient-to-r from-[#c8ffff] to-white shadow-lg"
                : "border-[#c8ffff] hover:border-[#23acf6]"
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            <CardContent className="p-4 text-center">
              <div className="text-2xl mb-2">{category.icon}</div>
              <h4 className="font-semibold text-[#0571d3] text-sm">{category.name}</h4>
              <p className="text-xs text-gray-600 mt-1">{category.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {renderContent()}
    </div>
  )
}
