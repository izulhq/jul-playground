"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Background } from "@/components/Background";
import { GameCard } from "@/components/GameCard";
import { Footer } from "@/components/MyFooter";
import { ComingSoonCard } from "@/components/ComingSoonCard";

// Game data
const games = [
  {
    id: "1",
    name: "minecraft java",
    description:
      "Join our community-driven Minecraft server with custom worlds and friendly players.",
    icon: "./minecraft.png",
    serverIp: "mc.izulhq.me",
    bgColor: "from-[#f5f5f5] to-[#2D3635]",
    image: "/mc-bg.jpg",
    version: "fabric 1.21.3",
    mod: [
      "armored elytra",
      "direction HUD",
      "falling tree",
      "geyser",
      "husk homes",
      "infinite trading",
      "skin restorer",
      "too expensive removed",
      "via version",
    ],
  },
  {
    id: "2",
    name: "minecraft bedrock",
    description:
      "Explore, build and fight in our Terraria server with custom mods and events.",
    icon: "./minecraft-bedrock.png",
    serverIp: "mc.izulhq.me:19132",
    bgColor: "from-[#f5f5f5] to-[#2D2635]",
    image: "/mc-bedrock-bg.jpg",
    version: "latest",
    mod: [
      "armored elytra",
      "direction HUD",
      "falling tree",
      "geyser",
      "husk homes",
      "infinite trading",
      "skin restorer",
      "too expensive removed",
      "via version",
    ],
  },
  {
    id: "3",
    name: "terraria",
    description:
      "Explore, build and fight in our Terraria server with custom mods and events.",
    icon: "./terraria.png",
    serverIp: "inactive",
    bgColor: "from-[#f5f5f5] to-[#2D2635]",
    image: "/terraria-bg.png",
    version: "coming soon",
    mod: ["coming soon"],
  },
];

export default function Home() {
  const [hoveredGame, setHoveredGame] = useState<string | null>(null);
  const [copiedIp, setCopiedIp] = useState<string | null>(null);
  const [expandedGame, setExpandedGame] = useState<string | null>(null);

  const copyToClipboard = (ip: string) => {
    navigator.clipboard.writeText(ip);
    setCopiedIp(ip);
    setTimeout(() => setCopiedIp(null), 2000);
  };

  const toggleExpand = (e: React.MouseEvent, gameId: string) => {
    e.preventDefault();
    if (expandedGame === gameId) {
      setExpandedGame(null);
    } else {
      setExpandedGame(gameId);
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-y-auto">
      <Background
        games={games}
        hoveredGame={hoveredGame}
        expandedGame={expandedGame}
      />

      <main className="flex-1 container mx-auto px-4 py-8 z-10">
        <div className="max-w-full mx-auto">
          <Header hoveredGame={hoveredGame} expandedGame={expandedGame} />

          {/* Game cards container */}
          <div className="flex flex-wrap gap-8 items-start justify-center relative">
            {games.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                expandedGame={expandedGame}
                hoveredGame={hoveredGame}
                copiedIp={copiedIp}
                onHover={setHoveredGame}
                onExpand={toggleExpand}
                onCopy={copyToClipboard}
              />
            ))}
          </div>

          {/* Coming soon section */}
          <div className="mt-8 mb-8 text-center">
            <div className="flex justify-center space-x-2 mb-3">
              <div
                className={`w-3 h-3 rounded-full animate-pulse transition-colors duration-300 ${
                  hoveredGame || expandedGame ? "bg-white/90" : "bg-gray-600"
                }`}
                style={{ animationDuration: "1.5s" }}
              ></div>
              <div
                className={`w-3 h-3 rounded-full animate-pulse transition-colors duration-300 ${
                  hoveredGame || expandedGame ? "bg-white/90" : "bg-gray-600"
                }`}
                style={{ animationDuration: "1.5s", animationDelay: "0.5s" }}
              ></div>
              <div
                className={`w-3 h-3 rounded-full animate-pulse transition-colors duration-300 ${
                  hoveredGame || expandedGame ? "bg-white/90" : "bg-gray-600"
                }`}
                style={{ animationDuration: "1.5s", animationDelay: "1s" }}
              ></div>
            </div>
            <p
              className={`text-lg transition-colors duration-300 ${
                hoveredGame || expandedGame ? "text-white/90" : "text-gray-600"
              }`}
            >
              more game servers coming soon
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
