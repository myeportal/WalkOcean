const benefits = [
  'Gentle outdoor movement with a trusted companion',
  'Clear communication for families and loved ones',
  'A local, human-first experience rooted in Whatcom County',
]

const howItWorks = [
  {
    title: 'Choose a walk',
    text: 'Start with a 30- or 60-minute coastal companionship walk designed around pace, comfort, and confidence.',
  },
  {
    title: 'Share preferences',
    text: 'Add mobility notes, route comfort, and an emergency contact so every walk starts with the right context.',
  },
  {
    title: 'Walk with confidence',
    text: 'Meet your trusted walker, get simple confirmations, and build a routine that supports movement and wellbeing.',
  },
]

const trustPoints = [
  'Founder-led launch with Kelly Kenney as the first walker',
  'Safety-first positioning for older adults and families',
  'Wellness and companionship messaging grounded in defensible claims',
  'Built to expand from a local service into a trusted marketplace',
]

const faqs = [
  {
    q: 'Who is Walkocean for?',
    a: 'Walkocean is for older adults who want support, companionship, and a reason to get outside — and for families who want a trusted local option for gentle activity.',
  },
  {
    q: 'Where does Walkocean launch first?',
    a: 'Phase 1 is focused on Bellingham and Whatcom County, Washington.',
  },
  {
    q: 'Is this medical care?',
    a: 'No. Walkocean is a companionship and wellness service, not medical treatment or home health care.',
  },
  {
    q: 'How will payments work?',
    a: 'Phase 1 is planned for USD checkout through PayPal, with a crypto payment option added in the product roadmap.',
  },
]

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Walkocean · Whatcom County launch</span>
          <h1>Trusted coastal walking companionship for older adults.</h1>
          <p className="lead">
            Walkocean helps older adults and families book safe, supportive companionship walks near the water —
            starting with Kelly Kenney in Bellingham and Whatcom County.
          </p>
          <div className="cta-row">
            <a href="#book" className="btn btn-primary">Book interest</a>
            <a href="#how" className="btn btn-secondary">See how it works</a>
          </div>
          <ul className="benefit-list">
            {benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="hero-card">
          <div className="stat-card">
            <span>Launch model</span>
            <strong>Founder-led</strong>
          </div>
          <div className="stat-card">
            <span>Initial region</span>
            <strong>Bellingham / Whatcom County</strong>
          </div>
          <div className="stat-card">
            <span>Phase 1 focus</span>
            <strong>Trust-first booking + wellness support</strong>
          </div>
        </div>
      </section>

      <section className="section-grid" id="how">
        <div className="section-heading">
          <span className="eyebrow">How it works</span>
          <h2>A calmer, safer way to make outdoor walking part of the week.</h2>
        </div>
        <div className="cards three-up">
          {howItWorks.map((step) => (
            <article className="card" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid alt">
        <div className="section-heading narrow">
          <span className="eyebrow">Why families care</span>
          <h2>Movement, companionship, routine, and more confidence.</h2>
          <p>
            Walkocean is designed around gentle activity, time outdoors, and trusted companionship. The goal is not
            hype or hard-to-defend health claims — it is a real local service families can feel good about using.
          </p>
        </div>
        <div className="cards two-up">
          <article className="card feature-card">
            <h3>For older adults</h3>
            <p>Supportive walks that feel local, personal, and approachable.</p>
          </article>
          <article className="card feature-card">
            <h3>For families</h3>
            <p>More reassurance that a loved one has safe companionship and consistent outdoor movement.</p>
          </article>
        </div>
      </section>

      <section className="section-grid">
        <div className="section-heading">
          <span className="eyebrow">Meet the founder</span>
          <h2>Kelly Kenney is the first walker and the trust anchor for launch.</h2>
        </div>
        <article className="profile-card">
          <p>
            Walkocean starts with one trusted local operator, not a faceless marketplace. That tighter launch model
            gives the brand room to refine safety, routing, preferences, and the family experience before expanding.
          </p>
        </article>
      </section>

      <section className="section-grid alt">
        <div className="section-heading">
          <span className="eyebrow">Safety & trust</span>
          <h2>Built to feel dependable from the first booking.</h2>
        </div>
        <div className="cards two-up">
          {trustPoints.map((item) => (
            <article className="card" key={item}>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid" id="book">
        <div className="section-heading narrow">
          <span className="eyebrow">Phase 1 roadmap</span>
          <h2>Website first. Booking flow next. App experience right after.</h2>
          <p>
            The first release is a focused trust-first website with a clean booking funnel. From there, Walkocean can
            expand into a customer app, family notifications, and a broader companion marketplace.
          </p>
        </div>
        <div className="cards two-up">
          <article className="card">
            <h3>Payments</h3>
            <p>PayPal for USD at launch, with crypto support planned for the payment roadmap.</p>
          </article>
          <article className="card">
            <h3>Marketplace model</h3>
            <p>Start with Kelly. Expand carefully into a local vetted network once the service model is proven.</p>
          </article>
        </div>
      </section>

      <section className="section-grid alt">
        <div className="section-heading">
          <span className="eyebrow">FAQ</span>
          <h2>Clear answers for an early-stage launch.</h2>
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

      <section className="closing-cta">
        <span className="eyebrow">Walkocean Phase 1</span>
        <h2>Ready to turn the repo into a real launch?</h2>
        <p>Next up: live booking flow, pricing, founder profile media, and Vercel-connected production deployment.</p>
        <a href="mailto:hello@walkocean.com" className="btn btn-primary">Contact Walkocean</a>
      </section>
    </main>
  )
}
