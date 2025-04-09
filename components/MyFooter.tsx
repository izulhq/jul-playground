import Image from "next/image";

export function Footer() {
  return (
    <footer className="py-8 px-4 z-10">
      <div className="flex flex-wrap gap-3 items-center justify-center mx-auto text-center">
        <p className="text-gray-400 transition-colors duration-300">
          part of {""}
          <a
            className="text-gray-400 hover:text-black hover:opacity-100 font-semibold transition-colors duration-300"
            href="https://izulhq.me"
            target="_blank"
          >
            ijul's cooking lab
          </a>
        </p>
        <div className="h-4 w-[2px] bg-gray-400 opacity-40"></div>
        <span className="text-gray-400">built with</span>
        <a
          className="flex items-center gap-2 text-gray-400 font-semibold hover:text-black hover:opacity-100"
          href="https://vercel.com/frameworks/nextjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          next.js + vercel
        </a>
        <p className="text-gray-400">-</p>
        <a
          className="flex items-center gap-2 text-gray-400 font-semibold hover:text-black hover:opacity-100"
          href="https://vercel.com/frameworks/nextjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          digital ocean droplets
        </a>
      </div>
    </footer>
  );
}
