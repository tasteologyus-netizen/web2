import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { mission, vision, stats } from './data'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const CHAPTERS = [
  {
    id: 'arrive',
    from: 0,
    to: 0.18,
    eyebrow: 'Tasteology & Co',
    title: 'Tasteology',
    body: mission,
  },
  {
    id: 'enter',
    from: 0.18,
    to: 0.36,
    eyebrow: 'Headquarters',
    title: 'Step inside the lab',
    body: 'From the waterfront to the cleanroom scroll to open the doors.',
  },
  {
    id: 'threshold',
    from: 0.36,
    to: 0.48,
    eyebrow: 'Threshold',
    title: 'Create. Innovate. Inspire.',
    body: 'Where culinary concepts meet mass-production reality.',
  },
  {
    id: 'vision',
    from: 0.48,
    to: 0.78,
    eyebrow: 'The Vision',
    title: 'Concept to scale',
    body: vision,
  },
  {
    id: 'impact',
    from: 0.78,
    to: 1.01,
    eyebrow: 'Impact',
    title: 'Built for brands that ship',
    body: null,
    stats: true,
  },
]

function waitForMeta(video, fallbackMs = 5000) {
  if (video.readyState >= 1 && video.duration && !Number.isNaN(video.duration)) {
    return Promise.resolve()
  }
  return new Promise((resolve) => {
    let settled = false
    const done = () => {
      if (settled) return
      settled = true
      resolve()
    }
    video.addEventListener('loadedmetadata', done, { once: true })
    video.addEventListener('error', done, { once: true })
    window.setTimeout(done, fallbackMs)
  })
}

function safeSeek(video, time) {
  if (!video || !Number.isFinite(time)) return
  const d = video.duration
  const clamped = d && !Number.isNaN(d) ? Math.min(Math.max(time, 0), Math.max(d - 0.04, 0)) : Math.max(time, 0)
  if (Math.abs((video.currentTime || 0) - clamped) < 0.012) return
  try {
    video.currentTime = clamped
  } catch {
    /* seek race while loading */
  }
}

export default function ScrollFilm() {
  const sectionRef = useRef(null)
  const v1Ref = useRef(null)
  const v2Ref = useRef(null)
  const progressRef = useRef(null)
  const chapterIndexRef = useRef(0)
  const [activeChapter, setActiveChapter] = useState(0)

  useGSAP(
    () => {
      const section = sectionRef.current
      const v1 = v1Ref.current
      const v2 = v2Ref.current
      if (!section || !v1 || !v2) return

      const mm = gsap.matchMedia()
      let st
      let raf = 0
      let cancelled = false

      // Smooth playhead scroll sets target, rAF eases toward it (avoids hard frame pops)
      const playhead = { t: 0, target: 0 }

      mm.add('(prefers-reduced-motion: reduce)', () => {
        v1.pause()
        v2.pause()
        safeSeek(v1, 0)
        gsap.set(v1, { autoAlpha: 1 })
        gsap.set(v2, { autoAlpha: 0 })
        setActiveChapter(0)
      })

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        let ready = false

        const durations = () => {
          const d1 = v1.duration && !Number.isNaN(v1.duration) ? v1.duration : 10
          const d2 = v2.duration && !Number.isNaN(v2.duration) ? v2.duration : 16
          return { d1, d2, total: d1 + d2 }
        }

        const paint = (t) => {
          const { d1, d2 } = durations()
          // Soft crossfade around the shared door frame (~0.35s)
          const blend = 0.35
          const fadeStart = Math.max(d1 - blend, 0)

          if (t < fadeStart) {
            safeSeek(v1, t)
            safeSeek(v2, 0)
            gsap.set(v1, { autoAlpha: 1 })
            gsap.set(v2, { autoAlpha: 0 })
          } else if (t <= d1) {
            const p = (t - fadeStart) / blend
            safeSeek(v1, t)
            safeSeek(v2, Math.max(0, t - d1 + 0.001))
            gsap.set(v1, { autoAlpha: 1 - p })
            gsap.set(v2, { autoAlpha: p })
          } else {
            const t2 = Math.min(d2, t - d1)
            safeSeek(v1, d1)
            safeSeek(v2, t2)
            gsap.set(v1, { autoAlpha: 0 })
            gsap.set(v2, { autoAlpha: 1 })
          }
        }

        const tick = () => {
          if (cancelled) return
          // Ease factor: higher = snappier follow, still continuous
          playhead.t += (playhead.target - playhead.t) * 0.22
          if (Math.abs(playhead.target - playhead.t) > 0.0005) {
            paint(playhead.t)
          } else {
            playhead.t = playhead.target
            paint(playhead.t)
          }
          raf = requestAnimationFrame(tick)
        }

        const onScrollProgress = (progress) => {
          if (!ready || cancelled) return
          const { total } = durations()
          playhead.target = progress * total

          if (progressRef.current) {
            gsap.set(progressRef.current, { scaleX: progress })
          }

          const chapterIndex = CHAPTERS.findIndex(
            (c) => progress >= c.from && progress < c.to,
          )
          const next = chapterIndex === -1 ? CHAPTERS.length - 1 : chapterIndex
          if (next !== chapterIndexRef.current) {
            chapterIndexRef.current = next
            setActiveChapter(next)
          }
        }

        gsap.set(v1, { autoAlpha: 1 })
        gsap.set(v2, { autoAlpha: 0 })
        setActiveChapter(0)

        Promise.all([waitForMeta(v1), waitForMeta(v2)]).then(() => {
          if (cancelled) return

          v1.pause()
          v2.pause()
          // Helps some browsers decode ahead for scrubbing
          v1.playbackRate = 1
          v2.playbackRate = 1
          safeSeek(v1, 0)
          safeSeek(v2, 0)
          ready = true
          playhead.t = 0
          playhead.target = 0

          // Faster scroll: ~2.4 viewports total (was ~7+)
          const scrollDistance = () => Math.round(window.innerHeight * 2.4)

          st = ScrollTrigger.create({
            trigger: section,
            start: 'top top',
            end: () => `+=${scrollDistance()}`,
            pin: true,
            // Slight lag so playhead eases instead of hard-stepping frames
            scrub: 0.35,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => onScrollProgress(self.progress),
          })

          onScrollProgress(0)
          raf = requestAnimationFrame(tick)
          ScrollTrigger.refresh()
        })
      })

      return () => {
        cancelled = true
        cancelAnimationFrame(raf)
        st?.kill()
        mm.revert()
      }
    },
    { scope: sectionRef },
  )

  const chapter = CHAPTERS[activeChapter]

  return (
    <section className="scroll-film" id="top" ref={sectionRef}>
      <div className="scroll-film__stage" aria-hidden="true">
        <video
          ref={v1Ref}
          className="scroll-film__video scroll-film__video--1"
          src="/Video1-scroll.mp4"
          muted
          playsInline
          preload="auto"
        />
        <video
          ref={v2Ref}
          className="scroll-film__video scroll-film__video--2"
          src="/video2-scroll.mp4"
          muted
          playsInline
          preload="auto"
        />
        <div className="scroll-film__shade" />
      </div>

      <div className="scroll-film__ui">
        <div className="container">
          <div className="scroll-film__panel" key={chapter.id}>
            <p className="section__eyebrow">{chapter.eyebrow}</p>
            <h1
              className={`scroll-film__title${chapter.id === 'arrive' ? ' scroll-film__title--brand' : ''}`}
            >
              {chapter.title}
            </h1>
            {chapter.body ? (
              <p className="scroll-film__body seo-speakable">{chapter.body}</p>
            ) : null}
            {chapter.stats ? (
              <div className="scroll-film__stats">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="stat__value">{s.value}</div>
                    <div className="stat__label">{s.label}</div>
                  </div>
                ))}
              </div>
            ) : null}
            {chapter.id === 'arrive' ? (
                <div className="scroll-film__ctas">
                  <a className="btn btn--primary" href="#contact">
                    Book free consultation
                  </a>
                  <a className="btn btn--ghost" href="#lab">
                    Explore Creation Lab
                  </a>
                </div>
            ) : null}
          </div>
        </div>

        <div className="scroll-film__hint">
          <span>Scroll to enter</span>
          <span className="scroll-film__hint-line" aria-hidden="true" />
        </div>

        <div className="scroll-film__progress" aria-hidden="true">
          <div className="scroll-film__progress-bar" ref={progressRef} />
        </div>
      </div>
    </section>
  )
}
