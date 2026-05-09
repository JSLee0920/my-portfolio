export const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-terminal-yellow/50 bg-black-bg/90 px-4 py-3 backdrop-blur-sm sm:px-8 sm:py-4 md:px-12">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a
          href="/"
          className="min-w-0 truncate text-base font-bold text-terminal-yellow transition-opacity hover:opacity-80 sm:text-xl"
        >
          JSLee0920.portfolio
        </a>
        <div className="flex shrink-0 items-center gap-3 text-sm text-zinc-300 sm:gap-5 lg:gap-6">
          {["About", "Education", "Experience", "Projects", "Skills"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hidden transition-colors hover:text-terminal-yellow md:inline"
              >
                {item}
              </a>
            ),
          )}
          <a
            href="#contact"
            className="border border-terminal-yellow bg-terminal-yellow px-3 py-2 text-xs font-bold text-black-bg transition-colors hover:bg-black-bg hover:text-terminal-yellow sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};
