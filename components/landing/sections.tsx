import { GlassButton, Logo, Nav } from './primitives'

const OFFERS = [
  {
    id: 'investors',
    title: 'для инвесторов',
    text: 'инвестиции и займы для бизнеса под залог имущества',
    cta: 'начать инвестировать',
  },
  {
    id: 'business',
    title: 'для бизнеса',
    text: 'инвестиции и займы для бизнеса под залог имущества',
    cta: 'Получить заём',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Оставьте заявку',
    text: 'Расскажите о ваших целях — инвестировать или получить финансирование.',
  },
  {
    num: '02',
    title: 'Обсудите условия',
    text: 'Мы свяжемся с вами, чтобы уточнить детали и предложить оптимальное решение.',
  },
  {
    num: '03',
    title: 'Оформите документы',
    text: 'Подготовим необходимые документы и сопроводим сделку на всех этапах.',
  },
]

export function Offers() {
  return (
    <section className="section--offer" aria-labelledby="offer-title">
      <h2 id="offer-title" className="section-title">
        Инвестиции и финансирование
      </h2>
      <div className="cards">
        {OFFERS.map((offer) => (
          <article key={offer.id} id={offer.id} className="card" style={{ scrollMarginTop: 40 }}>
            <div className="card__face">
              <h3 className="card__title">{offer.title}</h3>
              <p className="card__text">{offer.text}</p>
              <GlassButton href="#contacts" size="sm">
                {offer.cta}
              </GlassButton>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function Steps() {
  return (
    <section id="how" className="section--steps" aria-labelledby="steps-title">
      <h2 id="steps-title" className="section-title">
        Как это работает
      </h2>
      <ol className="steps">
        {STEPS.map((step) => (
          <li key={step.num} className="step">
            <span className="step__num">{step.num}</span>
            <h3 className="step__title">{step.title}</h3>
            <p className="step__text">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export function Cta() {
  return (
    <section id="contacts" className="section--cta cta" aria-labelledby="cta-title">
      <h2 id="cta-title" className="section-title">
        Обсудим ваши задачи
      </h2>
      <p className="cta__text">Подберем решение для инвестиций или финансирования вашего бизнеса.</p>
      <GlassButton href="mailto:info@eiva-platinum.ru" size="lg" withArrow={false}>
        Связаться с нами
      </GlassButton>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <Logo small />
        <Nav label="Навигация в подвале" capitalize />
      </div>
    </footer>
  )
}
