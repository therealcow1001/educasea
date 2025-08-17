"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Medal, Award, TrendingUp } from "lucide-react"

const leaderboardData = [
  {
    id: 1,
    name: "Marina Explorer",
    avatar: "/student-avatar.png",
    points: 2450,
    rank: 1,
    streak: 15,
    recentAchievement: "Mastered Calculus Depths",
    level: "Deep Sea Navigator",
  },
  {
    id: 2,
    name: "Ocean Wanderer",
    avatar: "/student-avatar-2.png",
    points: 2380,
    rank: 2,
    streak: 12,
    recentAchievement: "Conquered Physics Currents",
    level: "Reef Explorer",
  },
  {
    id: 3,
    name: "Wave Rider",
    avatar: "/student-avatar-3.png",
    points: 2290,
    rank: 3,
    streak: 8,
    recentAchievement: "Discovered Chemistry Caves",
    level: "Tide Pool Specialist",
  },
  {
    id: 4,
    name: "Current Surfer",
    avatar: "/student-avatar-4.png",
    points: 2150,
    rank: 4,
    streak: 6,
    recentAchievement: "Explored Biology Bays",
    level: "Shallow Water Scout",
  },
]

const recentActivities = [
  "🌊 Marina Explorer has learned something new! She mastered Advanced Algebra",
  "🐠 Ocean Wanderer discovered a rare knowledge pearl in Quantum Physics",
  "⭐ Wave Rider achieved a 10-day learning streak!",
  '🏆 Current Surfer unlocked the "Problem Solver" badge',
]

export function EducaBoard() {
  const [activeTab, setActiveTab] = useState<"leaderboard" | "activities">("leaderboard")

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-[#0571d3] font-bold">{rank}</span>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <Button
          variant={activeTab === "leaderboard" ? "default" : "outline"}
          onClick={() => setActiveTab("leaderboard")}
          className={
            activeTab === "leaderboard" ? "bg-[#23acf6] hover:bg-[#0571d3]" : "border-[#23acf6] text-[#0571d3]"
          }
        >
          Ocean Champions
        </Button>
        <Button
          variant={activeTab === "activities" ? "default" : "outline"}
          onClick={() => setActiveTab("activities")}
          className={activeTab === "activities" ? "bg-[#23acf6] hover:bg-[#0571d3]" : "border-[#23acf6] text-[#0571d3]"}
        >
          Recent Waves
        </Button>
      </div>

      {activeTab === "leaderboard" && (
        <div className="space-y-4">
          {leaderboardData.map((user) => (
            <Card
              key={user.id}
              className={`transition-all duration-300 ${
                user.rank <= 3
                  ? "bg-gradient-to-r from-[#c8ffff] to-white border-[#23acf6] shadow-lg"
                  : "border-[#c8ffff]"
              }`}
            >
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                  {getRankIcon(user.rank)}
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback className="bg-[#c8ffff] text-[#0571d3]">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-[#0571d3]">{user.name}</h4>
                    <p className="text-sm text-gray-600">{user.level}</p>
                    <p className="text-xs text-[#23acf6]">{user.recentAchievement}</p>
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-[#23acf6]">{user.points} pts</Badge>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-[#0571d3]">
                    <TrendingUp className="w-4 h-4" />
                    <span>{user.streak} day streak</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {activeTab === "activities" && (
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <Card key={index} className="border-[#c8ffff]">
              <CardContent className="p-4">
                <p className="text-[#0571d3]">{activity}</p>
                <p className="text-xs text-gray-500 mt-1">{Math.floor(Math.random() * 60)} minutes ago</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
