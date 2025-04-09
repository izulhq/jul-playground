import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Copy, Check, X } from "lucide-react";
import Image from "next/image";
import { Game } from "./Background";

interface GameCardProps {
  game: Game;
  expandedGame: string | null;
  hoveredGame: string | null;
  copiedIp: string | null;
  onHover: (id: string | null) => void;
  onExpand: (e: React.MouseEvent, id: string) => void;
  onCopy: (ip: string) => void;
}

export function GameCard({
  game,
  expandedGame,
  hoveredGame,
  copiedIp,
  onHover,
  onExpand,
  onCopy,
}: GameCardProps) {
  return (
    <div
      key={game.id}
      className={`transition-all duration-500 ease-in-out ${
        expandedGame === game.id ? "w-[640px]" : "w-[320px]"
      }`}
    >
      <Card
        className={`bg-white backdrop-blur-sm shadow-md border border-black/10 hover:border-black/50 hover:shadow-none transition-all overflow-hidden flex flex-col ${
          hoveredGame ? "bg-white/50" : "bg-white"
        } ${expandedGame === game.id ? "h-[320px] flex-row" : "h-[320px]"}`}
        onMouseEnter={() => !expandedGame && onHover(game.id)}
        onMouseLeave={() => !expandedGame && onHover(null)}
      >
        {/* Main card content */}
        <div
          className={`flex flex-col ${
            expandedGame === game.id
              ? "w-[320px] flex-shrink-0"
              : "w-full h-full"
          }`}
        >
          {/* Top 1/3: Game Icon/Image */}
          <div className="p-6 flex items-center justify-center h-1/3">
            <Image
              alt="game icon"
              src={game.icon}
              width={0}
              height={0}
              sizes="150px"
              style={{
                width: "auto",
                height: "100%",
                maxHeight: "80px",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Middle 1/3: Server Name and IP */}
          <div className="flex flex-col items-center justify-center text-center px-6 h-1/3">
            <h2 className="text-2xl font-bold text-black mb-2">
              {game.name} server
            </h2>
            <div className="bg-black/70 rounded px-3 py-1 inline-block">
              <code className="text-md font-mono text-[#9cdcfe]">
                {game.serverIp}
              </code>
            </div>
          </div>

          {/* Bottom 1/3: Copy Button and Arrow Button */}
          <div className="p-6 flex flex-col items-center h-1/3">
            <button
              onClick={(e) => {
                e.preventDefault();
                onCopy(game.serverIp);
              }}
              className="text-sm flex items-center gap-1 text-gray-600 hover:text-black transition-colors mb-4"
            >
              {copiedIp === game.serverIp ? (
                <>
                  <Check className="w-3 h-3" /> copied!
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" /> click to copy
                </>
              )}
            </button>

            <Button
              className={`group bg-white/80 hover:bg-white/20 text-black rounded-full w-12 h-12 p-0 ${
                expandedGame === game.id ? "rotate-180" : ""
              }`}
              onClick={(e) => onExpand(e, game.id)}
            >
              {expandedGame === game.id ? (
                <X className="w-5 h-5" />
              ) : (
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              )}
            </Button>
          </div>
        </div>

        {/* Expanded content */}
        {expandedGame === game.id && (
          <div className="flex-1 p-6 overflow-y-auto w-[320px] justify-center items-center">
            <div className="space-y-4 justify-center items-center">
              <div>
                <h4 className="font-medium text-gray-900">
                  Game Version :<br></br>
                  <strong>{game.version}</strong>
                </h4>
              </div>

              <div>
                <h4 className="font-medium text-gray-900">Mod List :</h4>
                <ul className="list-disc list-inside text-gray-900 ml-2 mt-2 space-y-1">
                  {game.mod.map((modName, index) => (
                    <li key={index} className="text-sm">
                      {modName}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
