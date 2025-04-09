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
    name: "minecraft",
    description:
      "Join our community-driven Minecraft server with custom worlds and friendly players.",
    icon: "./minecraft.png",
    serverIp: "mc.izulhq.me",
    bgColor: "from-[#f5f5f5] to-[#2D3635]",
    image: "/mc-bg.jpg",
    version: "Fabric 1.21.3",
    mod: [
      "Direction HUD",
      "Falling Tree",
      "Husk Homes",
      "Infinite Trading",
      "Skin Restorer",
      "Too Expensive Removed",
    ],
  },
  {
    id: "2",
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
    <div className="min-h-screen h-[100vh] flex flex-col relative overflow-hidden">
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
            <ComingSoonCard />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
