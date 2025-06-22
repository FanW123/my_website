const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block ml-2"
  >
    <path
      d="M8.66669 3.33331L14 7.99998L8.66669 12.6666"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 8H13.3333"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Home() {
  return (
    <div className="bg-[#0D1117] text-white min-h-screen font-sans">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold">FW</div>
        <nav className="space-x-8">
          <a href="#works" className="hover:text-gray-300">
            Works
          </a>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </nav>
      </header>

      <main
        className="container mx-auto px-4 py-32 flex flex-col items-start"
        style={{
          backgroundImage: `url(https://media.istockphoto.com/id/144348744/photo/blue-abstract-xvi-wave.jpg?s=2048x2048&w=is&k=20&c=aYy253_CT9p333a2Va5Uj1G5Unr5p-p7YpWJ-PaBCus=)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-7xl font-bold">Fan Wang</h1>
        <p className="mt-6 text-xl max-w-2xl text-gray-300">
          Hi, I'm Fan — a curious builder and creative thinker. I love turning
          ideas into thoughtful digital experiences. With a passion for{' '}
          <span className="text-cyan-400">design</span>,{' '}
          <span className="text-cyan-400">AI</span>, and{' '}
          <span className="text-cyan-400">storytelling</span>, I'm always
          exploring how technology can enhance everyday life. Whether I'm
          building apps, reflecting on the day's thoughts, or diving into a new
          concept, I'm driven by purpose, simplicity, and a bit of play.
        </p>
        <a href="#about" className="mt-8 text-lg hover:text-gray-300">
          About Me <ArrowIcon />
        </a>
      </main>
    </div>
  );
}
