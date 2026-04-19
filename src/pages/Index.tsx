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
    title: "Fonbet: Фрибет до 15 000 рублей новым игрокам",
    color: "#E31E24",
    banner: "https://cdn.poehali.dev/projects/4992eb3c-396a-42ca-8289-4bea7d6247f6/files/225dc5e6-7899-4508-b357-6595ebb7b51c.jpg",
    href: "#",
  },
  {
    name: "Pari",
    bonusType: "Фрибет",
    bonusAmount: "10 000 ₽",
    title: "Pari: Приветственный фрибет 10 000 рублей",
    color: "#00B2A9",
    banner: "https://cdn.poehali.dev/projects/4992eb3c-396a-42ca-8289-4bea7d6247f6/files/1f089208-945d-4ec2-8ef2-73f9a5554087.jpg",
    href: "#",
  },
  {
    name: "Winline",
    bonusType: "Фрибет",
    bonusAmount: "5 000 ₽",
    title: "Winline: Фрибет 5x1000 рублей новым пользователям",
    color: "#00A651",
    banner: "https://cdn.poehali.dev/projects/4992eb3c-396a-42ca-8289-4bea7d6247f6/files/05a9f916-453a-482e-adad-f046fd0ad92d.jpg",
    href: "#",
  },
  {
    name: "Бетсити",
    bonusType: "Фрибет",
    bonusAmount: "25 000 ₽",
    title: "Бетсити: Фрибет до 25 000 рублей при регистрации",
    color: "#1A2B8C",
    banner: "https://cdn.poehali.dev/projects/4992eb3c-396a-42ca-8289-4bea7d6247f6/files/5fa60c07-aa3d-426d-8ecc-10d06a9ae0f4.jpg",
    href: "#",
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
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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