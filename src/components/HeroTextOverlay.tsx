export default function HeroTextOverlay() {
  return (
    <div className="absolute bottom-16 left-8 z-10 md:bottom-20 md:left-12">
      <p
        className="text-white font-mono text-xs md:text-sm tracking-[0.2em] uppercase mb-3 opacity-80"
      >
        Выбирайте лучших
        <br />
        Получайте бонусы
      </p>

      <h1
        className="font-black uppercase leading-none mb-1"
        style={{
          fontFamily: "var(--font-montserrat)",
          fontSize: "clamp(2.8rem, 8vw, 5rem)",
          color: "#f5c800",
          textShadow: "0 0 40px rgba(245,200,0,0.4)",
          letterSpacing: "0.04em",
        }}
      >
        РЕЙТИНГ
      </h1>

      <h2
        className="font-bold uppercase tracking-[0.35em] text-white mb-6"
        style={{
          fontFamily: "var(--font-montserrat)",
          fontSize: "clamp(1rem, 3vw, 1.6rem)",
          letterSpacing: "0.3em",
        }}
      >
        БУКМЕКЕРОВ
      </h2>

      <a href="#bookmakers">
        <button
          className="font-mono font-bold text-white text-sm tracking-widest uppercase px-8 py-3 transition-all duration-300 hover:bg-white hover:text-[#0d1b3e]"
          style={{
            border: "2px solid white",
            background: "transparent",
          }}
        >
          ПОДРОБНЕЕ
        </button>
      </a>
    </div>
  )
}
