export function Footer() {
  return (
    <footer className="py-8 px-4 z-10">
      <div className="container mx-auto text-center">
        <p className="text-gray-400 transition-colors duration-300">
          © {new Date().getFullYear()} ijul's game servers - part of
          <a
            className="text-gray-400 hover:text-gray-800 font-semibold transition-colors duration-300"
            href="https://izulhq.me"
            target="_blank"
          >
            {" "}
            ijul's cooking lab
          </a>
        </p>
      </div>
    </footer>
  );
}
