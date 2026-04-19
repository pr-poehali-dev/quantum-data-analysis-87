import SplineScene from "@/components/SplineScene"
import Header from "@/components/Header"
import RotatingTextAccent from "@/components/RotatingTextAccent"
import Footer from "@/components/Footer"
import HeroTextOverlay from "@/components/HeroTextOverlay"

const bookmakers = [
  {
    name: "Fonbet",
    bonus: "Фрибет до 15 000 ₽",
    description: "Крупнейший легальный букмекер России. Лучшие коэффициенты на спорт и киберспорт.",
    tag: "Популярный",
    color: "#E31E24",
    href: "#",
  },
  {
    name: "Pari",
    bonus: "Бонус 100% до 10 000 ₽",
    description: "Быстрые выплаты, широкая линия событий, удобное мобильное приложение.",
    tag: "Топ выплат",
    color: "#FF6B00",
    href: "#",
  },
  {
    name: "Winline",
    bonus: "Фрибет 5 000 ₽",
    description: "Официальный партнёр РПЛ. Высокие коэффициенты на российский футбол.",
    tag: "Рекомендуем",
    color: "#00A651",
    href: "#",
  },
  {
    name: "Бетсити",
    bonus: "Бонус до 25 000 ₽",
    description: "Один из старейших букмекеров России. Надёжность и стабильные выплаты.",
    tag: "Надёжный",
    color: "#1A2B8C",
    href: "#",
  },
]

const Index = () => {
  return (
    <div className="w-full min-h-screen py-0 bg-background">
      <div className="max-w-[1200px] mx-auto">
        <main className="w-full relative h-[600px]">
          <Header />
          <SplineScene />
          <HeroTextOverlay />
          {/* <RotatingTextAccent /> */}
        </main>

        <section
          className="relative rounded-4xl py-10 mx-4 md:mx-0 w-[calc(100%-2rem)] md:w-full bg-card border border-solid border-border pb-16"
          style={{
            backgroundImage: `
              linear-gradient(var(--border) 1px, transparent 1px),
              linear-gradient(90deg, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        >
          <div className="absolute top-8 left-8 text-foreground opacity-50 text-5xl font-extralight font-sans leading-[0rem]">+</div>
          <div className="absolute top-8 right-8 text-foreground opacity-50 text-5xl font-sans leading-[0] font-extralight">+</div>
          <div className="absolute bottom-8 left-8 text-foreground opacity-50 text-5xl font-sans font-extralight">+</div>
          <div className="absolute bottom-8 right-8 text-foreground opacity-50 text-5xl font-sans font-extralight">+</div>

          <div className="px-6 md:px-16">
            <div className="text-center mb-10">
              <p className="text-accent font-mono text-sm tracking-widest uppercase mb-2">Витрина букмекеров</p>
              <h2 className="text-foreground text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-montserrat)" }}>
                Выбери своего букмекера
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bookmakers.map((bm) => (
                <a
                  key={bm.name}
                  href={bm.href}
                  className="group relative flex flex-col gap-3 rounded-2xl border border-border bg-background p-6 hover:border-accent transition-all duration-300 hover:shadow-[0_0_24px_hsl(var(--accent)/0.15)]"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-2xl font-bold font-mono"
                      style={{ color: bm.color }}
                    >
                      {bm.name}
                    </span>
                    <span className="text-xs font-mono px-3 py-1 rounded-full border border-border text-muted-foreground">
                      {bm.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-accent text-lg">★</span>
                    <span className="text-foreground font-mono text-sm font-semibold">{bm.bonus}</span>
                  </div>

                  <p className="text-muted-foreground text-sm font-mono leading-relaxed">{bm.description}</p>

                  <div className="flex items-center gap-1 text-accent font-mono text-sm mt-1 group-hover:gap-2 transition-all">
                    Перейти и получить бонус
                    <span>→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Index