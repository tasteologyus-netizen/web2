import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollFilm from './ScrollFilm'
import {
  mission,
  vision,
  stats,
  services,
  products,
  reviews,
  team,
  milestones,
  operations,
  faqs,
  contact,
  hearAboutOptions,
  asSeen,
  pressLogos,
  partners,
  clientLogos,
} from './data'
import { countryCodes } from './countryCodes'
import SeoJsonLd from './SeoJsonLd'
import { verifyEmail, executeRecaptcha } from './lib/verifyEmail'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#lab', label: 'Creation Lab' },
  { href: '#team', label: 'Team' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
]

function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)

  useGSAP(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, { scope: navRef })

  return (
    <header ref={navRef} className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container nav__inner">
        <a className="nav__logo" href="#top" aria-label="Tasteology home">
          <img src="/logo/updated-logo10.png" alt="Tasteology & Co logo" width="40" height="40" />
          <span className="nav__brand">Tasteology</span>
        </a>
        <nav className="nav__links" aria-label="Primary">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="btn btn--primary nav__cta" href="#contact">
          Free consultation
        </a>
        <button
          className="nav__toggle"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
      <div className={`nav__mobile${open ? ' is-open' : ''}`}>
        {NAV.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)}>
          Free consultation
        </a>
      </div>
    </header>
  )
}

function Mission() {
  return (
    <section className="section mission" id="mission" aria-labelledby="mission-heading">
      <div className="container mission__split">
        <article className="statement reveal">
          <p className="section__eyebrow">Our Mission</p>
          <h2 className="statement__title" id="mission-heading">
            Unforgettable flavor, market-ready
          </h2>
          <p className="statement__body seo-speakable">{mission}</p>
        </article>
        <article className="statement reveal">
          <p className="section__eyebrow">The Vision</p>
          <h2 className="statement__title">Concept to scale</h2>
          <p className="statement__body seo-speakable">{vision}</p>
        </article>
      </div>
      <div className="container">
        <div className="stats reveal" aria-label="Tasteology by the numbers">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="stat__value">{s.value}</div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="section services" id="services" aria-labelledby="services-heading">
      <div className="container">
        <p className="section__eyebrow reveal">Core Capabilities</p>
        <h2 className="section__title reveal" id="services-heading">
          Services built for market-ready flavor
        </h2>
        <p className="section__lede reveal seo-speakable">
          Expert food CPG formulation, flavor optimization, and recipe development from
          concept to commercial scale.
        </p>
        <div className="services__list">
          {services.map((s) => (
            <article className="service reveal" key={s.title}>
              <div className="service__img">
                <img src={s.image} alt="" loading="lazy" />
              </div>
              <div>
                <h3 className="service__title">{s.title}</h3>
                <p className="service__summary">{s.summary}</p>
                <p className="service__detail">{s.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CreationLab() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const indexRef = useRef(0)
  const slideRef = useRef(() => {})

  useGSAP(
    (_ctx, contextSafe) => {
      slideRef.current = contextSafe((dir) => {
        const track = trackRef.current
        if (!track) return
        const card = track.querySelector('.product')
        if (!card) return
        const step = card.offsetWidth + 20
        const max = Math.max(0, products.length - 1)
        indexRef.current = Math.min(max, Math.max(0, indexRef.current + dir))
        gsap.to(track, {
          x: -indexRef.current * step,
          duration: 0.7,
          ease: 'power3.out',
        })
      })
    },
    { scope: sectionRef },
  )

  return (
    <section className="section lab" id="lab" ref={sectionRef}>
      <div className="container">
        <div className="lab__head">
          <div>
            <p className="section__eyebrow reveal">Creation Lab</p>
            <h2 className="section__title reveal">From idea to shelf</h2>
            <p className="section__lede reveal">
              We&apos;ve developed over 2500 products for leading brands worldwide. Because
              we honor every NDA, we showcase only a curated selection of our work here.
            </p>
          </div>
          <div className="lab__nav reveal">
            <button type="button" aria-label="Previous" onClick={() => slideRef.current(-1)}>
              ←
            </button>
            <button type="button" aria-label="Next" onClick={() => slideRef.current(1)}>
              →
            </button>
          </div>
        </div>
      </div>
      <div className="lab__track-wrap">
        <div className="lab__track" ref={trackRef}>
          {products.map((p) => (
            <article className="product" key={`${p.title}-${p.client}`}>
              <div className="product__media">
                <img src={p.image} alt={p.title} loading="lazy" />
              </div>
              <p className="product__client">{p.client}</p>
              <h3 className="product__title">{p.title}</h3>
              <p className="product__blurb">{p.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function LogoMarquee({ label, logos, className = '' }) {
  const wrapRef = useRef(null)
  const doubled = [...logos, ...logos]

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const track = wrapRef.current?.querySelector('.marquee__track')
        if (!track) return
        const tween = gsap.to(track, {
          xPercent: -50,
          duration: 40,
          ease: 'none',
          repeat: -1,
        })
        return () => tween.kill()
      })
      return () => mm.revert()
    },
    { scope: wrapRef },
  )

  return (
    <div className={`marquee ${className}`} ref={wrapRef}>
      <p className="marquee__label">{label}</p>
      <div className="marquee__track">
        {doubled.map((src, i) => (
          <img key={`${src}-${i}`} src={src} alt="" loading="lazy" />
        ))}
      </div>
    </div>
  )
}

const REVIEW_PREVIEW = 120

function ReviewCard({ review }) {
  const [open, setOpen] = useState(false)
  const needsToggle = review.quote.length > REVIEW_PREVIEW
  const text =
    open || !needsToggle
      ? review.quote
      : `${review.quote.slice(0, REVIEW_PREVIEW).trimEnd()}…`

  return (
    <article className={`review-card${open ? ' is-open' : ''}`}>
      <h3 className="review-card__title">{review.author}</h3>
      {review.place ? <p className="review-card__place">{review.place}</p> : null}

      <div className="review-card__bar" aria-hidden="true">
        <div className="review-card__emptybar" />
        <div className="review-card__filledbar" />
      </div>

      <p className="review-card__quote">&ldquo;{text}&rdquo;</p>
      {needsToggle ? (
        <button
          type="button"
          className="review-card__toggle"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Show less' : 'Show more'}
        </button>
      ) : null}

      <div className="review-card__circle" aria-label="5 stars">
        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle className="review-card__stroke" cx="60" cy="60" r="50" />
        </svg>
        <span className="review-card__stars">★★★★★</span>
      </div>
    </article>
  )
}

function Reviews() {
  const mid = Math.ceil(reviews.length / 2)
  const rowOne = reviews.slice(0, mid)
  const rowTwo = reviews.slice(mid)

  return (
    <section className="section reviews" id="reviews">
      <div className="container">
        <p className="section__eyebrow reveal">Client Reviews</p>
        <h2 className="section__title reveal">Success stories</h2>
        <p className="section__lede reveal">
          Hover a card to fan the stack. Real client feedback from brands we&apos;ve built
          with.
        </p>
      </div>
      <div className="reviews-carousel-wrap">
        <div className="reviews-carousel reviews-carousel--row">
          {rowOne.map((r) => (
            <ReviewCard key={`r1-${r.author}-${r.place}`} review={r} />
          ))}
        </div>
        <div className="reviews-carousel reviews-carousel--row">
          {rowTwo.map((r) => (
            <ReviewCard key={`r2-${r.author}-${r.place}`} review={r} />
          ))}
        </div>
      </div>
      <div className="container">
        <div className="trustpilot reveal">
          <a
            href="https://www.trustpilot.com/review/tasteology.us"
            target="_blank"
            rel="noreferrer"
          >
            <span className="trustpilot__mark">★</span>
            Leave a Trustpilot review
          </a>
        </div>
      </div>
    </section>
  )
}

function TeamCard({ member }) {
  const [state, setState] = useState('#about')
  const collapsed = state !== '#about'

  return (
    <article
      className={`team-card${collapsed ? ' is-active' : ''}`}
      data-state={state}
    >
      <div className="team-card__header">
        <div
          className="team-card__cover"
          style={{ backgroundImage: `url(${member.image})` }}
        />
        <img
          className="team-card__avatar"
          src={member.image}
          alt={member.name}
          loading="lazy"
        />
        <div className="team-card__identity">
          <h3 className="team-card__fullname">{member.name}</h3>
          <p className="team-card__jobtitle">{member.role}</p>
        </div>
      </div>

      <div className="team-card__main">
        <div
          className={`team-card__section${state === '#about' ? ' is-active' : ''}`}
        >
          <div className="team-card__content">
            <div className="team-card__subtitle">ABOUT</div>
            <p className="team-card__desc">
              {member.role} at Tasteology &amp; Co, contributing food science and
              culinary expertise to market-ready product development.
            </p>
            {member.university ? (
              <p className="team-card__university">{member.university}</p>
            ) : null}
          </div>
        </div>

        <div
          className={`team-card__section${state === '#experience' ? ' is-active' : ''}`}
        >
          <div className="team-card__content">
            <div className="team-card__subtitle">FOCUS</div>
            <div className="team-card__timeline">
              {member.focus.map((item) => (
                <div className="team-card__item" data-year={item.year} key={item.year}>
                  <div className="team-card__item-title">
                    {item.title} <span>{item.highlight}</span>
                  </div>
                  <div className="team-card__item-desc">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="team-card__buttons">
          <button
            type="button"
            className={state === '#about' ? 'is-active' : undefined}
            onClick={() => setState('#about')}
          >
            ABOUT
          </button>
          <button
            type="button"
            className={state === '#experience' ? 'is-active' : undefined}
            onClick={() => setState('#experience')}
          >
            FOCUS
          </button>
        </div>
      </div>
    </article>
  )
}

function byTeamPosition(a, b) {
  const rank = {
    'CEO / Managing Director': 1,
    'Ops Manager': 2,
    'Support Manager': 3,
    'Head of Food Scientists': 4,
    'PhD Research Scientist': 5,
    'PhD Food Scientist': 6,
    'MS Food Scientist': 7,
    'Food Chemist': 8,
    'Food Scientist': 9,
  }
  const diff = (rank[a.role] ?? 99) - (rank[b.role] ?? 99)
  if (diff !== 0) return diff
  return a.name.localeCompare(b.name)
}

function Team() {
  const leadership = team
    .filter((m) => !m.role.toLowerCase().includes('food scientist'))
    .sort(byTeamPosition)
  const foodScientists = team
    .filter((m) => m.role.toLowerCase().includes('food scientist'))
    .sort(byTeamPosition)

  return (
    <section className="section team" id="team">
      <div className="container">
        <p className="section__eyebrow reveal">The Lab</p>
        <h2 className="section__title reveal">Team members</h2>
        <p className="section__lede reveal">
          Hover a card to fan the stack. Food scientists, chemists, and culinary minds
          shaping products for brands worldwide.
        </p>
      </div>
      <div className="team-carousel-wrap">
        <div className="team-carousel team-carousel--row">
          {leadership.map((m) => (
            <TeamCard key={`t1-${m.slug}`} member={m} />
          ))}
        </div>
        <div className="team-carousel team-carousel--row">
          {foodScientists.map((m) => (
            <TeamCard key={`t2-${m.slug}`} member={m} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <div className="pricing__intro">
          <div>
            <p className="section__eyebrow reveal">Pricing &amp; Project Milestones</p>
            <h2 className="section__title reveal">Transparency from concept to scale-up</h2>
            <p className="section__lede reveal">
              At Tasteology, we believe in clarity and mutual success. Every quote is
              custom tailored to your product goals, timelines, and technical requirements.
            </p>
          </div>
          <div className="reveal">
            <div className="price-tag">
              <small>Projects begin</small>
              $5,000
            </div>
            <p className="pricing__note">
              Covers the initial concept formulation phase. Pricing may vary with
              complexity, category needs, or add-ons like regulatory reviews.
            </p>
          </div>
        </div>
        <div className="milestones">
          {milestones.map((m) => (
            <article className="milestone reveal" key={m.step}>
              <div className="milestone__step">{m.step}</div>
              <div>
                <h3 className="milestone__title">{m.title}</h3>
                <p className="milestone__text">{m.text}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="pricing__note reveal">
          Each stage is quoted transparently, with no hidden fees beyond the agreed-upon
          scope.
        </p>
      </div>
    </section>
  )
}

function Partners() {
  return (
    <section className="section partners" id="partners">
      <div className="container">
        <p className="section__eyebrow reveal">The source of our quality</p>
        <h2 className="section__title reveal">Trusted ingredient partners</h2>
        <div className="partners__grid reveal">
          {partners.map((src) => (
            <img key={src} src={src} alt="" loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  )
}

function Global() {
  return (
    <section className="section global" id="global">
      <div className="container">
        <p className="section__eyebrow reveal">International Reach</p>
        <h2 className="section__title reveal">Global innovation hub</h2>
        <p className="section__lede reveal">
          Beyond our US headquarters, Tasteology operates a network of 27 virtual offices
          and partners worldwide. We specialize in cross-border product adaptation helping
          US brands enter the Middle East &amp; GCC markets, and vice-versa.
        </p>
        <div className="global__grid">
          <div className="reveal">
            <h3 style={{ marginBottom: '1rem', fontSize: '1.35rem' }}>Our Operations</h3>
            <ul className="ops">
              {operations.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
          <div className="consulting reveal">
            <h3 style={{ color: 'var(--foam)', fontSize: '1.35rem' }}>
              Expert Food Scientist Consulting &amp; CPG Formulation
            </h3>
            <p>
              In the competitive CPG landscape, success is built on scientific precision
              and culinary excellence. Our lab-tested approach specializes in clean-label
              conversions, functional food development, and scaling recipes for
              co-manufacturing environments.
            </p>
            <p>
              Whether you are a startup seeking market-ready development or an established
              brand needing flavor optimization, every ingredient serves a purpose 
              optimizing for flavor, shelf-life, and cost-efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section
      className="section faq"
      id="faq"
      aria-labelledby="faq-heading"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="container">
        <p className="section__eyebrow reveal">FAQ</p>
        <h2 className="section__title reveal" id="faq-heading">
          Frequently asked questions
        </h2>
        <div className="faq__list">
          {faqs.map((item, i) => (
            <div
              className={`faq__item${open === i ? ' is-open' : ''} reveal`}
              key={item.q}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                type="button"
                className="faq__q"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span itemProp="name">{item.q}</span>
                <span className="faq__icon" aria-hidden="true">
                  +
                </span>
              </button>
              <div
                className="faq__a seo-speakable"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <span itemProp="text">{item.a}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [hearAbout, setHearAbout] = useState('')
  const [emailStatus, setEmailStatus] = useState({ text: '', tone: '' })
  const [emailVerified, setEmailVerified] = useState(false)
  const [lastVerifiedEmail, setLastVerifiedEmail] = useState('')
  const [verifying, setVerifying] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const defaultCountry = '+1|United States'
  const hearAboutEmail = hearAbout === 'LinkedIn' ? 'Google' : hearAbout

  const runEmailVerification = async (rawEmail) => {
    const emailValue = (rawEmail || '').trim()

    if (!emailValue) {
      setEmailStatus({ text: '', tone: '' })
      setLastVerifiedEmail('')
      setEmailVerified(false)
      return false
    }

    if (emailValue === lastVerifiedEmail && emailVerified) {
      return true
    }

    setVerifying(true)
    setEmailStatus({ text: 'Verifying email...', tone: 'pending' })
    setEmailVerified(false)

    try {
      const result = await verifyEmail(emailValue)
      if (result.isValid) {
        setLastVerifiedEmail(emailValue)
        setEmailVerified(true)
        setEmailStatus({
          text: 'Email is verified and available.',
          tone: 'ok',
        })
        return true
      }

      setLastVerifiedEmail('')
      setEmailVerified(false)
      setEmailStatus({
        text: result.message || 'Please enter a verified email.',
        tone: 'error',
      })
      return false
    } catch {
      // Outage safety: do not lock legitimate users out
      setLastVerifiedEmail(emailValue)
      setEmailVerified(true)
      setEmailStatus({ text: '', tone: '' })
      return true
    } finally {
      setVerifying(false)
    }
  }

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-heading">
      <div className="container contact__grid">
        <div>
          <p className="section__eyebrow">Free Consultation</p>
          <h2 className="section__title" id="contact-heading">
            Free 30-Minute Consultation
          </h2>
          <p className="section__lede seo-speakable">
            Book a complimentary consultation with our food science experts. Discuss
            flavor innovation, food formulation needs, and discover how Tasteology can
            accelerate your product development.
          </p>
          <div
            className="contact__details info-block"
            itemScope
            itemType="https://schema.org/LocalBusiness"
          >
            <meta itemProp="name" content="Tasteology & Co LLC" />
            <div
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <div itemProp="streetAddress">28 W Flagler St, Ste 300B #7342</div>
              <div>
                <span itemProp="addressLocality">Miami</span>,{' '}
                <span itemProp="addressRegion">FL</span>{' '}
                <span itemProp="postalCode">33130</span>
              </div>
              <div itemProp="addressCountry">United States</div>
              <div className="contact__offices">27 virtual offices worldwide</div>
            </div>
            <div className="contact__channels">
              <div>
                Phone:{' '}
                <a
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  itemProp="telephone"
                >
                  {contact.phone}
                </a>
              </div>
              <div>
                Email:{' '}
                <a href={`mailto:${contact.email}`} itemProp="email">
                  {contact.email}
                </a>
              </div>
            </div>
            <p className="contact__note">{contact.note}</p>
          </div>
        </div>

        <form
          id="consultationForm"
          className="consult-form"
          data-recaptcha-sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || ''}
          data-recaptcha-action="consultation_form"
          onSubmit={async (e) => {
            e.preventDefault()
            const form = e.currentTarget
            const data = new FormData(form)

            if (data.get('website')) {
              return
            }

            const emailValue = String(data.get('email') || '').trim()
            const ok =
              emailVerified && emailValue === lastVerifiedEmail
                ? true
                : await runEmailVerification(emailValue)
            if (!ok) {
              setEmailStatus({
                text: 'Please enter a verified email.',
                tone: 'error',
              })
              return
            }

            setSubmitting(true)
            try {
              let recaptchaToken = ''
              try {
                recaptchaToken = await executeRecaptcha('consultation_form')
              } catch {
                recaptchaToken = ''
              }
              if (form.elements.recaptcha_token) {
                form.elements.recaptcha_token.value = recaptchaToken
              }

              const hear =
                data.get('hear_about') === 'Other'
                  ? `Other${data.get('other_source') ? ` (${data.get('other_source')})` : ''}`
                  : data.get('hear_about')
              const hearEmail =
                data.get('hear_about') === 'LinkedIn' ? 'Google' : data.get('hear_about')
              const [dialCode, countryName] = String(data.get('country_code') || '').split(
                '|',
              )

              const payload = {
                name: data.get('name'),
                email: emailValue,
                phone: `${dialCode} ${data.get('phone')}`.trim(),
                country_code: dialCode,
                country: countryName || '',
                purpose: data.get('purpose'),
                hear_about: hear,
                hear_about_email: hearEmail,
                lead_source: data.get('lead_source') || 'Organic/Direct',
                other_source: data.get('other_source') || '',
                recaptcha_token: recaptchaToken,
              }

              const crmEndpoint = import.meta.env.VITE_CRM_ENDPOINT
              const crmToken = import.meta.env.VITE_CRM_BEARER_TOKEN
              if (crmEndpoint && crmToken) {
                try {
                  await fetch(crmEndpoint, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      Authorization: `Bearer ${crmToken}`,
                    },
                    body: JSON.stringify(payload),
                  })
                } catch {
                  // Fall through to mailto if CRM is unavailable
                }
              }

              const subject = encodeURIComponent(`Free Consultation ${payload.name}`)
              const body = encodeURIComponent(
                [
                  'Free 30-Minute Consultation Request',
                  '',
                  `Name: ${payload.name}`,
                  `Email: ${payload.email}`,
                  `Phone: ${payload.phone}${payload.country ? ` (${payload.country})` : ''}`,
                  `How did you hear about us: ${payload.hear_about || ' '}`,
                  `Lead source: ${payload.lead_source}`,
                  '',
                  'Meeting purpose:',
                  payload.purpose,
                ].join('\n'),
              )
              window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
            } finally {
              setSubmitting(false)
            }
          }}
        >
          <div className="consult-form__head">
            <span className="consult-form__badge">Free</span>
            <div>
              <h3 className="consult-form__title">Consultation form</h3>
              <p className="consult-form__sub">
                Book a complimentary 30-minute session with our food science experts.
              </p>
            </div>
          </div>

          <div className="consult-form__honeypot" aria-hidden="true">
            <label htmlFor="consult-website">Website</label>
            <input
              type="text"
              id="consult-website"
              name="website"
              autoComplete="off"
              tabIndex={-1}
            />
          </div>
          <input type="hidden" name="lead_source" value="Organic/Direct" />
          <input type="hidden" name="hear_about_email" value={hearAboutEmail} />
          <input type="hidden" name="recaptcha_token" defaultValue="" />

          <label>
            Full name *
            <input name="name" required autoComplete="name" placeholder="Full Name" />
          </label>

          <label>
            Email *
            <input
              id="consult-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Email Address"
              onBlur={(e) => runEmailVerification(e.target.value)}
              onChange={(e) => {
                const current = e.target.value.trim()
                if (current !== lastVerifiedEmail) {
                  setEmailVerified(false)
                  setLastVerifiedEmail('')
                  if (emailStatus.text) {
                    setEmailStatus({ text: '', tone: '' })
                  }
                }
              }}
            />
            <span
              id="emailStatus"
              className={`consult-form__email-status${emailStatus.tone ? ` is-${emailStatus.tone}` : ''}`}
              role="status"
              aria-live="polite"
            >
              {emailStatus.text}
            </span>
          </label>

          <div className="consult-form__phone">
            <label>
              Country code *
              <select name="country_code" required defaultValue={defaultCountry}>
                {countryCodes.map((c) => (
                  <option
                    key={`${c.code}-${c.country}`}
                    value={`${c.code}|${c.country}`}
                  >
                    {c.code} ({c.country})
                  </option>
                ))}
              </select>
            </label>
            <label>
              Phone *
              <input
                id="consult-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel-national"
                placeholder="Phone Number"
              />
            </label>
          </div>

          <label>
            Meeting purpose *
            <textarea
              name="purpose"
              required
              rows={4}
              placeholder="Meeting purpose"
            />
          </label>

          <label>
            How did you hear about us? *
            <select
              id="consult-hear-about"
              name="hear_about"
              required
              value={hearAbout}
              onChange={(e) => setHearAbout(e.target.value)}
            >
              <option value="" disabled>
                How did you hear about us?
              </option>
              {hearAboutOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </label>

          {hearAbout === 'Other' ? (
            <label>
              Please specify *
              <input
                id="consult-other-source"
                name="other_source"
                required
                placeholder="Please specify"
              />
            </label>
          ) : null}

          <button
            id="submitBtn"
            className="btn btn--primary consult-form__submit"
            type="submit"
            disabled={!emailVerified || verifying || submitting}
          >
            {submitting
              ? 'Submitting…'
              : verifying
                ? 'Verifying…'
                : 'Book free consultation'}
          </button>
        </form>
      </div>
      <div className="container">
        <footer className="footer">
          <div>© {new Date().getFullYear()} Tasteology &amp; Co</div>
          <div>Miami · 27 locations worldwide</div>
        </footer>
      </div>
    </section>
  )
}

export default function App() {
  const rootRef = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const reveals = gsap.utils.toArray('.reveal')

        reveals.forEach((el) => {
          gsap.from(el, {
            y: 28,
            opacity: 0,
            duration: 0.85,
            ease: 'power3.out',
            immediateRender: false,
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none none',
              once: true,
            },
          })
        })

        const refresh = () => ScrollTrigger.refresh()
        requestAnimationFrame(refresh)
        window.addEventListener('load', refresh, { once: true })
        // Re-measure after pinned ScrollFilm layout settles
        const t = window.setTimeout(refresh, 600)

        return () => {
          window.clearTimeout(t)
        }
      })

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set('.reveal', {
          clearProps: 'all',
          opacity: 1,
          y: 0,
        })
      })

      return () => mm.revert()
    },
    { scope: rootRef },
  )

  return (
    <div className="site" ref={rootRef} id="top">
      <SeoJsonLd />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <ScrollFilm />
        <Mission />
        <Services />
        <CreationLab />
        <LogoMarquee label="As seen in" logos={asSeen} />
        <LogoMarquee label="Trusted by" logos={clientLogos} />
        <Reviews />
        <Team />
        <Pricing />
        <Partners />
        <LogoMarquee label="Press & coverage" logos={pressLogos} className="marquee--press" />
        <Global />
        <FAQ />
        <Contact />
      </main>
    </div>
  )
}
