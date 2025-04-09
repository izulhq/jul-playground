import Image from "next/image";

export interface Game {
  id: string;
  name: string;
  description: string;
  icon: string;
  serverIp: string;
  bgColor: string;
  image: string;
  version: string;
  mod: string[];
}

interface BackgroundProps {
  games: Game[];
  hoveredGame: string | null;
  expandedGame: string | null;
}

export function Background({
  games,
  hoveredGame,
  expandedGame,
}: BackgroundProps) {
  return (
    <div className="fixed inset-0 w-full h-full transition-all duration-500 ease-in-out z-0">
      <div
        className={`absolute inset-0 bg-gradient-to-b ${
          hoveredGame || expandedGame
            ? games.find((g) => g.id === (expandedGame || hoveredGame))
                ?.bgColor || "from-[#f5f5f5] to-[#f5f5f5]"
            : "from-[#f5f5f5] to-[#f5f5f5]"
        } transition-all duration-500`}
      ></div>

      {(hoveredGame || expandedGame) && (
        <div className="absolute inset-0 opacity-20">
          <Image
            src={
              games.find((g) => g.id === (expandedGame || hoveredGame))
                ?.image || "/placeholder.svg?height=500&width=800"
            }
            alt={expandedGame || hoveredGame || ""}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
    </div>
  );
}
