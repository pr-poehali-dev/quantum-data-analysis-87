import SplineScene from "@/components/SplineScene"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import HeroTextOverlay from "@/components/HeroTextOverlay"
import Icon from "@/components/ui/icon"

const bookmakers = [
  {
    name: "Fonbet",
    bonusType: "Фрибет",
    bonusAmount: "15 000 ₽",
    title: "Fonbet: Фрибет до 15 000 рублей без депозита",
    color: "#E31E24",
    banner: "https://cdn.poehali.dev/files/57b0ba7d-1ca4-43cd-91e6-a103cc27a7d5.png",
    href: "https://r.dalead.pro/ru-fonbet-freebet15000/?flow=11466&src=36",
  },
  {
    name: "Pari",
    bonusType: "Фрибет",
    bonusAmount: "5×1000 ₽",
    title: "Pari: Фрибет 5×1000 рублей новым игрокам",
    color: "#00D4B4",
    banner: "https://cdn.poehali.dev/files/c4f7400e-506a-4982-95c7-239170f39cac.png",
    href: "https://r.dalead.pro/ru-pari-1000_1/?flow=11467&src=10",
  },
  {
    name: "Winline",
    bonusType: "Фрибет",
    bonusAmount: "3 000 ₽",
    title: "Winline: Фрибет 3000 рублей новым игрокам",
    color: "#FF6B00",
    banner: "https://cdn.poehali.dev/files/e3ebebad-6f5d-468b-86ed-8ac8a0a2969c.png",
    href: "https://r.dalead.pro/ru-winline-registration_1/?flow=11468&src=36",
  },
  {
    name: "Бетсити",
    bonusType: "Фрибет",
    bonusAmount: "2 000 ₽",
    title: "Бетсити: Фрибет 2000 рублей за первую ставку",
    color: "#00BFFF",
    banner: "https://cdn.poehali.dev/files/349e2c15-2839-4b92-84f0-d0a39a29f74f.png",
    href: "https://r.dalead.pro/ru-betcity-freebet2000_1/?flow=11482&src=3",
    bannerPosition: "object-left-top",
  },
]

const Index = () => {
  return (
    <div className="w-full min-h-screen py-0 bg-background">
      <div className="max-w-[1200px] mx-auto">
        <main className="w-full relative h-[480px] md:h-[600px]">
          <Header />
          <SplineScene />
          <HeroTextOverlay />
        </main>

        <section
          id="bookmakers"
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {bookmakers.map((bm) => (
                <div
                  key={bm.name}
                  className="group flex flex-col rounded-2xl overflow-hidden bg-background border border-border hover:border-white/30 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                >
                  {/* Banner image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={bm.banner}
                      alt={bm.name}
                      className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${"bannerPosition" in bm ? bm.bannerPosition : "object-center"}`}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-4 gap-3">
                    {/* Bonus row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-sm" style={{ color: bm.color }}>
                          {bm.name[0]}
                        </span>
                        <span className="text-muted-foreground text-xs font-mono">{bm.bonusType}</span>
                      </div>
                      <span className="text-foreground font-bold text-sm font-mono">{bm.bonusAmount}</span>
                    </div>

                    {/* Title */}
                    <p className="text-foreground font-semibold text-sm leading-snug flex-1" style={{ fontFamily: "var(--font-montserrat)" }}>
                      {bm.title}
                    </p>

                    {/* Подробнее */}
                    <a
                      href={bm.href}
                      className="flex items-center justify-between text-muted-foreground hover:text-foreground text-sm font-mono transition-colors border-t border-border pt-3"
                    >
                      <span>Подробнее</span>
                      <Icon name="ChevronRight" size={16} />
                    </a>

                    {/* CTA button */}
                    <a
                      href={bm.href}
                      className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-border text-foreground text-sm font-mono font-semibold hover:bg-white hover:text-black transition-all duration-200"
                    >
                      <Icon name="Gift" size={15} />
                      Получить фрибет
                    </a>
                  </div>
                </div>
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