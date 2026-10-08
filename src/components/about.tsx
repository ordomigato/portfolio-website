import { useReveal } from '../utils/useReveal'
import styles from './About.module.css'

type Entry = { role: string; detail: string; href?: string }

const timeline: { year: string; entries: Entry[] }[] = [
  {
    year: '2016',
    entries: [
      { role: 'Freelance WordPress builds', detail: 'Client sites, plus basic apps on the side' },
    ],
  },
  {
    year: '2020',
    entries: [
      { role: 'GameShelf', detail: 'Lockdown build for my game collection' },
      { role: 'SecurePark', detail: 'First client app, parking permits in Go & Vue' },
    ],
  },
  {
    year: '2021',
    entries: [
      {
        role: 'LoginID - Passkeys',
        href: 'https://loginid.ai/',
        detail: 'Biometric auth & payments',
      },
    ],
  },
  {
    year: 'Now',
    entries: [
      {
        role: 'LoginID - Identity & AI',
        detail: 'Scope widened past simple user auth into agentic authentication and payments',
      },
    ],
  },
]

function About() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section id="about" ref={ref} className={`${styles.about} reveal ${visible ? 'in' : ''}`}>
      <div className="wrap">
        <p className="eyebrow" style={{ color: 'var(--hot-dim)' }}>01 — About</p>
        <div className={styles.grid}>
          <div>
            <h2 className={styles.statement}>
              Turning <em>product briefs</em> into shipped software: the service underneath, the
              interface on top, and the pipeline that deploys both.
            </h2>
            <div className={styles.paras}>
              <p className={styles.para}>
                I'm a software developer first, and a tinkerer second. Driven by a need to keep
                learning and improving, I stumbled into the world of development almost by
                accident while pursuing a degree in psychology, and landed my first fulltime tech job at a
                company specializing in authentication, identity, and payments a few years later.
              </p>
              <p className={styles.para}>
                Since then, I spend my days obsessing over the user experience, experimenting
                with design, and bridging what product needs with what the rest of the
                engineering team can build.
              </p>
              <p className={styles.para}>
                On my own time, I'm continually taking on projects to hone my skills, or at least
                have something to show that isn't behind an NDA 😅. Most of the projects below
                are exactly that.
              </p>
            </div>
          </div>
          <ol className={styles.timeline}>
            {timeline.map((group) => (
              <li key={group.year} className={styles.group}>
                <span className={styles.year}>{group.year}</span>
                <ul className={styles.entries}>
                  {group.entries.map((entry) => (
                    <li key={entry.role} className={styles.entry}>
                      <p className={styles.role}>
                        {entry.href ? (
                          <a href={entry.href} target="_blank" rel="noopener noreferrer">
                            {entry.role} ↗
                          </a>
                        ) : (
                          entry.role
                        )}
                      </p>
                      <p className={styles.detail}>{entry.detail}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default About
