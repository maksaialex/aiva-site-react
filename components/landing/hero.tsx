import { GlassButton, Logo, Nav } from './primitives'

export function Header() {
  return (
    <header className="site-header">
      <Logo />
      <Nav label="Основная навигация" />
    </header>
  )
}

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <h1 id="hero-title" className="hero__title">
        <span>Инвестиции</span>
        <span>для бизнеса</span>
        <span className="text-gradient">Займы под</span>
        <span className="text-gradient">залог</span>
      </h1>
      <p className="hero__lead">финансирование бизнеса под залог имущества</p>
      <div className="btn-row">
        <GlassButton href="#investors" variant="primary">
          начать инвестировать
        </GlassButton>
        <GlassButton href="#business" variant="secondary">
          Получить заём
        </GlassButton>
      </div>
    </section>
  )
}
