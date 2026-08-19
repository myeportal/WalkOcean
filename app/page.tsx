const heroChips = ['Founder-led launch', 'Local routes in Whatcom County', 'Companionship-first, non-medical support']

const stats = [
  { value: 'Phase 1', label: 'Founder-led delivery' },
  { value: 'Bellingham', label: 'Initial launch city' },
  { value: '30–60 min', label: 'Planned walk options' },
  { value: 'Family-ready', label: 'Intake + emergency contact flow' },
]

const journeyCards = [
  {
    eyebrow: 'For older adults',
    title: 'Enjoy calm local walks with one trusted companion.',
    points: [
      'Choose preferred pace, route comfort, and ideal walk times.',
      'Start with a simple intake so the first walk feels familiar.',
      'Build a steady outdoor rhythm without pressure or confusion.',
    ],
    cta: 'Join the interest list',
    href: '#interest',
  },
  {
    eyebrow: 'For families',
    title: 'Book with more clarity than a generic marketplace.',
    points: [
      'Review the founder-led model before wider network expansion.',
      'Share mobility notes, routines, and emergency contact details upfront.',
      'Get a polished early experience built around consistency and trust.',
    ],
    cta: 'See how launch works',
    href: '#how',
  },
]

const benefitBullets = [
  {
    title: 'Gentle movement',
    text: 'Regular walks can support routine, fresh air, and confidence without overclaiming health outcomes.',
  },
  {
    title: 'Better consistency',
    text: 'A recurring companion makes it easier to keep outdoor plans from slipping week to week.',
  },
  {
    title: 'Lower family friction',
    text: 'Intake, planning, and clear boundaries reduce the back-and-forth families often carry alone.',
  },
]

const howItWorks = [
  {
    step: '01',
    title: 'Share the basics',
    text: 'Tell Walkocean about location, schedule, mobility considerations, and the kind of walk that feels comfortable.',
  },
  {
    step: '02',
    title: 'Confirm fit carefully',
    text: 'Phase 1 focuses on a founder-led match, route planning, and clear expectations before the first outing.',
  },
  {
    step: '03',
    title: 'Start with one walk',
    text: 'Begin with a single private walk, then grow into a weekly rhythm if it feels like the right fit.',
  },
]

const featuredOptions = [
  {
    name: 'Founder-led private walk',
    badge: 'Phase 1',
    rate: 'Pricing soon',
    detail: 'Best for families who want the most direct, high-trust launch experience.',
    tags: ['Founder delivery', 'Local route planning', 'Simple follow-through'],
  },
  {
    name: 'Recurring rhythm setup',
    badge: 'Early access',
    rate: 'Weekly options',
    detail: 'Designed for older adults who benefit from a dependable cadence instead of one-off scheduling.',
    tags: ['Weekly cadence', 'Family visibility', 'Comfort-first pacing'],
  },
  {
    name: 'Referral-friendly intake',
    badge: 'For professionals',
    rate: 'Launch waitlist',
    detail: 'A cleaner local option for thoughtful referrals that need clear non-medical positioning.',
    tags: ['Companionship only', 'Clear boundaries', 'Polished handoff'],
  },
]

const faqItems = [
  {
    q: 'Is Walkocean medical care or therapy?',
    a: 'No. Walkocean is a companionship-centered walking service. It does not provide medical treatment, therapy, or home health care.',
  },
  {
    q: 'Who delivers the first walks?',
    a: 'Phase 1 is intentionally founder-led so the experience, communication, and safety model can be refined before broader expansion.',
  },
  {
    q: 'Where is the initial launch?',
    a: 'The first launch area is Bellingham and nearby parts of Whatcom County, Washington.',
  },
  {
    q: 'What happens after I join the interest list?',
    a: 'You will hear first about pricing, intake availability, and when founder-led booking windows open.',
  },
]

export default function HomePage() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a href="#top" className="brand-mark" aria-label="Walkocean home">
          <span className="brand-dot" />
          <span>Walkocean</span>
        </a>

        <nav className="topnav" aria-label="Primary">
          <a href="#how">How it works</a>
          <a href="#families">For families</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a href="#interest" className="nav-cta">Book interest</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-overlay" />
        <div className="hero-copy">
          <div className="pill-label">walkocean.com</div>
          <h1>Coastal companionship walks for older adults who deserve a steadier routine outdoors.</h1>
          <p className="hero-text">
            Founder-led Walkocean is launching in Whatcom County with calm, private walks built for trust, consistency, and family confidence — without pretending to be clinical care.
          </p>

          <div className="hero-actions">
            <a href="#interest" className="btn btn-primary">Find a companion</a>
            <a href="#how" className="btn btn-secondary">Become an early family</a>
          </div>

          <div className="hero-chips" aria-label="Highlights">
            {heroChips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-bar" aria-label="Walkocean launch highlights">
        {stats.map((item) => (
          <article key={item.label} className="stat-item">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section className="section-block" id="families">
        <div className="section-intro center">
          <span className="section-kicker">How it works</span>
          <h2>Two paths, one calmer launch experience.</h2>
        </div>

        <div className="journey-grid">
          {journeyCards.map((card) => (
            <article className="journey-card" key={card.title}>
              <span className="card-kicker">{card.eyebrow}</span>
              <h3>{card.title}</h3>
              <ul>
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <a href={card.href} className="btn btn-card">{card.cta}</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-split muted-block">
        <div className="section-copy">
          <span className="section-kicker">Why families lean in</span>
          <h2>A breath of the coast, every other day — framed more carefully.</h2>
          <p>
            Walkocean is built around the believable benefits families already value: gentle movement, time outdoors, companionship, and a routine that is easier to keep. The promise is not miracle health claims. It is a more encouraging, more dependable way to get outside.
          </p>
        </div>

        <div className="benefit-stack">
          {benefitBullets.map((item) => (
            <article key={item.title} className="benefit-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" id="how">
        <div className="section-head-row">
          <div>
            <span className="section-kicker">The launch flow</span>
            <h2>Simple steps, higher-trust execution.</h2>
          </div>
          <a href="#interest" className="inline-link">Join waitlist →</a>
        </div>

        <div className="steps-grid">
          {howItWorks.map((item) => (
            <article className="step-card" key={item.step}>
              <span className="step-badge">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block soft-panel">
        <div className="section-head-row">
          <div>
            <span className="section-kicker">Featured launch options</span>
            <h2>Structured more like a polished marketplace, delivered more carefully than one.</h2>
          </div>
          <span className="inline-note">Safer claims. Stronger framing.</span>
        </div>

        <div className="profile-grid">
          {featuredOptions.map((item) => (
            <article key={item.name} className="profile-card">
              <div className="profile-visual">
                <span>{item.badge}</span>
              </div>
              <div className="profile-body">
                <div className="profile-row">
                  <h3>{item.name}</h3>
                  <strong>{item.rate}</strong>
                </div>
                <p>{item.detail}</p>
                <div className="tag-row">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a href="#interest" className="btn btn-card">Book interest</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block faq-block" id="faq">
        <div className="section-intro left">
          <span className="section-kicker">FAQ</span>
          <h2>Answers for families evaluating a new service.</h2>
        </div>

        <div className="faq-grid">
          {faqItems.map((item) => (
            <article key={item.q} className="faq-card">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-panel" id="interest">
        <h2>Ready for a more thoughtful first walk?</h2>
        <p>
          Join the early interest list for launch pricing, founder-led availability, and the first intake openings in Whatcom County.
        </p>
        <div className="hero-actions centered">
          <a href="mailto:hello@walkocean.com?subject=Walkocean%20Interest" className="btn btn-primary">Book a walk</a>
          <a href="mailto:hello@walkocean.com?subject=Walkocean%20Caregiver%20Interest" className="btn btn-secondary">Become a companion</a>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <a href="#top" className="brand-mark footer-brand">
            <span className="brand-dot" />
            <span>Walkocean</span>
          </a>
          <p>
            Connecting older adults and families with a founder-led coastal walking companionship service built around steadier routines, clearer boundaries, and a more personal launch model.
          </p>
        </div>

        <div className="footer-links">
          <a href="#how">For seniors</a>
          <a href="#families">For caregivers</a>
          <a href="#interest">Apply to book</a>
          <a href="#faq">FAQ & safety</a>
        </div>
      </footer>
    </main>
  )
}
