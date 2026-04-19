export default function HeroTextOverlay() {
  return (
    <div className="absolute inset-0 z-10 flex flex-col justify-end md:justify-end pb-12 md:pb-20 pl-8 md:pl-12 pr-[45%] md:pr-[45%]">
      <p className="text-white font-mono text-xs md:text-sm tracking-[0.2em] uppercase mb-3 opacity-80">
        Выбирайте лучших
        <br />
        Получайте бонусы
      </p>

      <h1
        className="font-black uppercase leading-none mb-1"
        style={{
          fontFamily: "var(--font-montserrat)",
          fontSize: "clamp(2.2rem, 7vw, 5rem)",
          color: "#f5c800",
          textShadow: "0 0 40px rgba(245,200,0,0.4)",
          letterSpacing: "0.04em",
        }}
      >
        РЕЙТИНГ
      </h1>

      <h2
        className="font-bold uppercase text-white mb-6"
        style={{
          fontFamily: "var(--font-montserrat)",
          fontSize: "clamp(0.85rem, 2.5vw, 1.6rem)",
          letterSpacing: "0.25em",
        }}
      >
        БУКМЕКЕРОВ
      </h2>

      <a href="#bookmakers">
        <button
          className="font-mono font-bold text-white text-xs md:text-sm tracking-widest uppercase px-6 py-2.5 md:px-8 md:py-3 transition-all duration-300 hover:bg-white hover:text-[#0d1b3e] w-fit"
          style={{ border: "2px solid white", background: "transparent" }}
        >
          ПОДРОБНЕЕ
        </button>
      </a>
    </div>
  )
}
