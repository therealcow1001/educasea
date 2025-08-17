"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Lock, Star } from "lucide-react"

const collections = [
  {
    id: "sea-creatures",
    name: "Sea Creatures",
    description: "Collect marine life as you learn",
    items: [
      {
        id: 1,
        name: "Wise Octopus",
        emoji: "🐙",
        rarity: "common",
        unlocked: true,
        description: "Earned by solving 10 logic problems",
      },
      {
        id: 2,
        name: "Clever Dolphin",
        emoji: "🐬",
        rarity: "rare",
        unlocked: true,
        description: "Mastered communication skills",
      },
      {
        id: 3,
        name: "Majestic Whale",
        emoji: "🐋",
        rarity: "epic",
        unlocked: false,
        description: "Complete an entire learning path",
      },
      {
        id: 4,
        name: "Colorful Fish",
        emoji: "🐠",
        rarity: "common",
        unlocked: true,
        description: "First lesson completed",
      },
      {
        id: 5,
        name: "Mysterious Jellyfish",
        emoji: "🪼",
        rarity: "rare",
        unlocked: false,
        description: "Discover 5 hidden knowledge pearls",
      },
      {
        id: 6,
        name: "Ancient Turtle",
        emoji: "🐢",
        rarity: "legendary",
        unlocked: false,
        description: "Maintain 30-day learning streak",
      },
    ],
  },
  {
    id: "treasures",
    name: "Ocean Treasures",
    description: "Rare artifacts from the depths of knowledge",
    items: [
      {
        id: 1,
        name: "Knowledge Pearl",
        emoji: "🦪",
        rarity: "rare",
        unlocked: true,
        description: "Found a unique insight",
      },
      {
        id: 2,
        name: "Wisdom Conch",
        emoji: "🐚",
        rarity: "epic",
        unlocked: false,
        description: "Share knowledge with 10 friends",
      },
      {
        id: 3,
        name: "Golden Compass",
        emoji: "🧭",
        rarity: "legendary",
        unlocked: false,
        description: "Guide others on their learning journey",
      },
    ],
  },
]

const rarityColors = {
  common: "bg-gray-100 text-gray-700",
  rare: "bg-blue-100 text-blue-700",
  epic: "bg-purple-100 text-purple-700",
  legendary: "bg-yellow-100 text-yellow-700",
}

export function EducaRoom() {
  const [selectedCollection, setSelectedCollection] = useState(collections[0].id)

  const activeCollection = collections.find((c) => c.id === selectedCollection)

  return (
    <div className="space-y-6">
      <div className="flex gap-2 flex-wrap">
        {collections.map((collection) => (
          <Button
            key={collection.id}
            variant={selectedCollection === collection.id ? "default" : "outline"}
            onClick={() => setSelectedCollection(collection.id)}
            className={
              selectedCollection === collection.id
                ? "bg-[#23acf6] hover:bg-[#0571d3]"
                : "border-[#23acf6] text-[#0571d3]"
            }
          >
            {collection.name}
          </Button>
        ))}
      </div>

      <Card className="border-[#23acf6] bg-gradient-to-r from-[#c8ffff] to-white">
        <CardHeader>
          <CardTitle className="text-[#0571d3]">{activeCollection?.name}</CardTitle>
          <p className="text-gray-600">{activeCollection?.description}</p>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {activeCollection?.items.map((item) => (
          <Card
            key={item.id}
            className={`transition-all duration-300 ${
              item.unlocked ? "hover:shadow-lg border-[#c8ffff] hover:border-[#23acf6]" : "opacity-60 border-gray-200"
            }`}
          >
            <CardContent className="p-4 text-center space-y-3">
              <div className="relative">
                <div className="text-4xl mb-2">{item.unlocked ? item.emoji : "❓"}</div>
                {!item.unlocked && <Lock className="absolute top-0 right-0 w-4 h-4 text-gray-400" />}
              </div>

              <div>
                <h4 className={`font-semibold ${item.unlocked ? "text-[#0571d3]" : "text-gray-500"}`}>
                  {item.unlocked ? item.name : "Locked"}
                </h4>
                <Badge className={`text-xs mt-1 ${rarityColors[item.rarity as keyof typeof rarityColors]}`}>
                  {item.rarity}
                </Badge>
              </div>

              <p className="text-xs text-gray-600 min-h-[2.5rem]">{item.description}</p>

              {item.unlocked && (
                <div className="flex justify-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-[#c8ffff] bg-gradient-to-r from-white to-[#c8ffff]">
        <CardContent className="p-4 text-center">
          <p className="text-[#0571d3] font-semibold">
            Collection Progress: {activeCollection?.items.filter((i) => i.unlocked).length} /{" "}
            {activeCollection?.items.length}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              className="bg-[#23acf6] h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((activeCollection?.items.filter((i) => i.unlocked).length || 0) / (activeCollection?.items.length || 1)) * 100}%`,
              }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
