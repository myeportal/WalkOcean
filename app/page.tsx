const heroHighlights = [
  'Founder-led launch with Kelly Kenney as your first Walkocean companion',
  'Designed for older adults who want steady, encouraging outdoor time',
  'Built for families who value visibility, consistency, and care in the details',
]

const proofPoints = [
  { label: 'Launch region', value: 'Bellingham + Whatcom County' },
  { label: 'Phase 1 model', value: 'Private founder-led companionship walks' },
  { label: 'Booking focus', value: 'Simple intake, thoughtful matching, dependable follow-through' },
]

const audiences = [
  {
    title: 'For older adults',
    text: 'Enjoy calm, local walks with a trusted companion who respects pace, preferences, and comfort from the very first outing.',
  },
  {
    title: 'For adult children and families',
    text: 'Give a loved one a premium-feeling routine that supports time outdoors and companionship without adding complexity to your week.',
  },
  {
    title: 'For thoughtful referrals',
    text: 'Offer a polished local option for people seeking companionship-centered walking support that is clearly separate from medical care.',
  },
]

const howItWorks = [
  {
    step: '01',
    title: 'Start with a short intake',
    text: 'Share location, preferred walking pace, mobility considerations, and the details that help a first walk feel comfortable.',
  },
  {
    step: '02',
    title: 'Confirm the right fit',
    text: 'Walkocean reviews timing, route comfort, and family context before confirming a founder-led walk in the local launch area.',
  },
  {
    step: '03',
    title: 'Build a dependable rhythm',
    text: 'Begin with one walk, then grow into a weekly or twice-weekly routine if it feels like a strong fit for everyone involved.',
  },
]

const pricingTeasers = [
  {
    title: 'Introductory private walks',
    text: 'Phase 1 pricing is being finalized now, with premium local positioning for 30- and 60-minute founder-led walks.',
  },
  {
    title: 'Simple launch packages',
    text: 'Expect straightforward single-walk and recurring options so families can test the experience before committing to a rhythm.',
  },
  {
    title: 'Early access priority',
    text: 'Interest list members will hear first when launch pricing, intake availability, and first-route windows open.',
  },
]

const trustDetails = [
  'Clear positioning: Walkocean is companionship and walking support, not medical treatment, therapy, or home health care.',
  'Founder-led delivery creates a high-trust Phase 1 experience before expanding into a broader companion network.',
  'Intake includes mobility notes, route preferences, and an emergency contact to support better planning.',
  'Careful launch footprint keeps service quality local, personal, and easier to refine before scale.',
]

const faqs = [
  {
    q: 'What exactly is Walkocean?',
    a: 'Walkocean is a premium companionship walking service designed for older adults and the families helping them stay connected to outdoor routines.',
  },
  {
    q: 'Is Walkocean medical or clinical care?',
    a: 'No. Walkocean is not medical care, physical therapy, or home health. It is a companionship-centered walking service with thoughtful safety planning.',
  },
  {
    q: 'Where is Walkocean launching first?',
    a: 'Phase 1 is focused on Bellingham and the wider Whatcom County area in Washington.',
  },
  {
    q: 'When will pricing be available?',
    a: 'Launch pricing will be announced with the first booking release. The current site is designed to build interest, trust, and early demand ahead of that opening.',
  },
]

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Walkocean · Phase 1 coastal launch</span>
          <h1>Premium walking companionship for older adults who deserve a trusted routine outdoors.</h1>
          <p className="lead">
            Walkocean begins in Whatcom County with founder-led walks designed to feel calm, personal, and dependable — giving older adults encouraging outdoor time and families more confidence in the plan.
          </p>
          <div className="cta-row">
            <a href="#interest" className="btn btn-primary">Join the interest list</a>
            <a href="#pricing" className="btn btn-secondary">Preview Phase 1 pricing</a>
          </div>
          <ul className="benefit-list">
            {heroHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="hero-panel">
          <div className="panel-badge">Founder-led launch</div>
          <h2>Designed to earn trust before it tries to scale.</h2>
          <p>
            Walkocean starts intentionally: one founder, one local region, one premium standard for how companionship walks should feel.
          </p>
          <div className="proof-grid">
            {proofPoints.map((item) => (
              <article className="stat-card" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-grid strip-section">
        <div className="trust-strip">
          <div>
            <span className="eyebrow">Why this feels different</span>
            <h2>A stronger local alternative to generic companion care marketplaces.</h2>
          </div>
          <p>
            The first version of Walkocean is deliberately narrow: premium founder involvement, a clear safety frame, and a service experience built for trust, not volume.
          </p>
        </div>
      </section>

      <section className="section-grid" id="who">
        <div className="section-heading">
          <span className="eyebrow">Who it serves</span>
          <h2>Built for the people making thoughtful care decisions.</h2>
        </div>
        <div className="cards three-up">
          {audiences.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid alt" id="how">
        <div className="section-heading narrow">
          <span className="eyebrow">How Phase 1 works</span>
          <h2>Simple structure. Premium tone. Less friction for families.</h2>
          <p>
            Every step is designed to reduce uncertainty: gather the right context, confirm fit carefully, and make the first walk feel considered instead of transactional.
          </p>
        </div>
        <div className="cards three-up">
          {howItWorks.map((item) => (
            <article className="card step-card" key={item.step}>
              <span className="step-label">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid founder-section">
        <div className="section-heading narrow">
          <span className="eyebrow">Founder framing</span>
          <h2>Kelly Kenney is the first face of the service — and that is a feature, not a placeholder.</h2>
          <p>
            Walkocean is launching with direct founder involvement so the brand, experience, and safety model can be shaped in the real world before broader expansion. That creates a more premium and more accountable Phase 1 for early families.
          </p>
        </div>
        <article className="profile-card founder-card">
          <div className="founder-kicker">Phase 1 promise</div>
          <p>
            Instead of acting like a marketplace on day one, Walkocean is earning the right to become one. Founder-led delivery helps refine route planning, communication standards, and the overall family experience with much tighter quality control.
          </p>
        </article>
      </section>

      <section className="section-grid alt" id="pricing">
        <div className="section-heading narrow">
          <span className="eyebrow">Pricing teaser</span>
          <h2>Premium, but still approachable enough to try.</h2>
          <p>
            Walkocean will launch with clear private-walk pricing and early recurring options. The goal is to signal quality without making the first step feel heavy.
          </p>
        </div>
        <div className="cards three-up">
          {pricingTeasers.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid" id="trust">
        <div className="section-heading">
          <span className="eyebrow">Trust & safety</span>
          <h2>Grounded claims, clear boundaries, and a more careful launch model.</h2>
        </div>
        <div className="cards two-up">
          {trustDetails.map((item) => (
            <article className="card" key={item}>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid alt">
        <div className="section-heading">
          <span className="eyebrow">FAQ</span>
          <h2>Answers for families evaluating an early-stage premium service.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <article className="faq-item" key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="closing-cta" id="interest">
        <span className="eyebrow">Walkocean Phase 1</span>
        <h2>Be first to hear when founder-led bookings open.</h2>
        <p>
          Join the early interest list for launch pricing, first-availability updates, and a clearer look at how Walkocean will roll out across Whatcom County.
        </p>
        <div className="cta-row cta-row-centered">
          <a href="mailto:hello@walkocean.com?subject=Walkocean%20Interest%20List" className="btn btn-primary">Email Walkocean</a>
          <a href="#how" className="btn btn-secondary">Review the launch model</a>
        </div>
      </section>
    </main>
  )
}
