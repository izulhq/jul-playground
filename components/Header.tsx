import Image from "next/image";

interface HeaderProps {
  hoveredGame: string | null;
  expandedGame: string | null;
}

export function Header({ hoveredGame, expandedGame }: HeaderProps) {
  return (
    <>
      <div className="flex items-center gap-2 justify-center mb-4 md:mb-8">
        <Image
          alt="logo"
          src="./playijul.svg"
          width={120}
          height={120}
          className="w-20 h-20 md:w-[120px] md:h-[120px] drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
        />
      </div>

      <div className="text-center mb-6 md:mb-10 px-4 md:px-0">
        <h1
          className={`text-3xl md:text-6xl font-bold mb-4 md:mb-6 transition-colors duration-300 ${
            hoveredGame || expandedGame ? "text-white" : "text-black"
          }`}
        >
          my game servers
        </h1>
        <p
          className={`text-base md:text-xl max-w-2xl mx-auto transition-colors duration-300 ${
            hoveredGame || expandedGame ? "text-white/90" : "text-gray-600"
          }`}
        >
          join me and my friends to play your favorite games on my dedicated
          servers. choose a game below to get started!
        </p>
      </div>
    </>
  );
}
