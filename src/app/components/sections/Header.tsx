export const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-terminal-yellow/50 bg-black-bg/90 px-6 py-4 backdrop-blur-sm sm:px-12">
      <nav className="flex items-center justify-between">
        <a
          href="/"
          className="text-xl font-bold text-terminal-yellow transition-opacity hover:opacity-80"
        >
          JSLee0920.portfolio
        </a>
        <div className="flex items-center gap-6 text-sm text-zinc-300">
          {["About", "Education", "Experience", "Projects", "Skills"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition-colors hover:text-terminal-yellow"
              >
                {item}
              </a>
            ),
          )}
          <a
            href="#contact"
            className="border border-terminal-yellow bg-terminal-yellow px-5 py-2.5 font-bold text-black-bg transition-colors hover:bg-black-bg hover:text-terminal-yellow"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};
