const PLAYER_IMG = "https://cdn.poehali.dev/projects/4992eb3c-396a-42ca-8289-4bea7d6247f6/files/e14aa2c0-6132-4b73-9f58-9ce6dfa32a15.jpg"

export default function SplineScene() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ background: "#0d1b3e" }}>
      {/* dots pattern top-left */}
      <div className="absolute top-6 left-6 grid grid-cols-5 gap-1.5 opacity-40">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-white" />
        ))}
      </div>

      {/* dots pattern bottom-right */}
      <div className="absolute bottom-16 right-6 grid grid-cols-4 gap-1.5 opacity-30">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-white" />
        ))}
      </div>

      {/* red circle top-right */}
      <div
        className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-90"
        style={{ background: "#e63946" }}
      />

      {/* blue glow behind player */}
      <div
        className="absolute right-0 md:right-16 top-1/2 -translate-y-1/2 w-48 md:w-64 h-48 md:h-64 rounded-full opacity-30 blur-2xl"
        style={{ background: "#1d4ed8" }}
      />

      {/* blue decorative arc left */}
      <div
        className="absolute left-0 bottom-0 w-32 h-32 rounded-full opacity-60"
        style={{ background: "transparent", border: "18px solid #1d4ed8", transform: "translate(-50%, 50%)" }}
      />

      {/* red small circle bottom-left */}
      <div
        className="absolute bottom-12 left-8 w-5 h-5 rounded-full"
        style={{ background: "#e63946" }}
      />

      {/* football player — только на десктопе */}
      <div className="hidden md:flex absolute right-0 bottom-0 h-full items-end justify-end pointer-events-none">
        <img
          src={PLAYER_IMG}
          alt="Футболист"
          className="h-[90%] max-h-[520px] object-contain object-bottom select-none"
          style={{ mixBlendMode: "screen", filter: "drop-shadow(0 0 30px rgba(59,130,246,0.5))" }}
        />
      </div>
    </div>
  )
}