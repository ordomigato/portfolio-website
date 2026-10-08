import Button from './Button'
import styles from './Hero.module.css'

const stack = ['JavaScript', 'TypeScript', 'React', 'Vue', 'Svelte', 'Lit', 'Node.js', 'Tauri', 'PostgreSQL', 'MongoDB', 'Firebase', 'MySQL', 'REST', 'Express', 'GraphQL', 'Go', 'C#', 'Docker', 'Netlify', 'Git', 'CI/CD']
const headline = ['Software Developer', 'Dashboards', 'WebApps', 'Websites']

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.top}>
        <div>
          <div className={styles.nameRow}>
            <p className={styles.name}>JEREMY&nbsp;GERVAIS</p>
            <span className={styles.badge}>
              <span className={styles.dot} />
              Open to opportunities
            </span>
          </div>
          <p className={styles.loc}>// Ontario, Canada</p>
        </div>
        <p className="eyebrow" style={{ color: 'var(--hot)' }}>00 — Hello World</p>
      </div>

      <div className={`${styles.marqueeWrap}`}>
        <div className={styles.marquee}>
          <div className={styles.track}>
            {[...headline, ...headline].map((word, i) => (
              <span key={i} className={i % 2 === 1 ? styles.accent : undefined}>{word}</span>
            ))}
          </div>
        </div>

        <div className={styles.ticker}>
          <div className={styles.tickerTrack}>
            {Array.from({ length: 8 }, () => stack).flat().map((word, i) => (
              <span key={i}>{word}</span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.sub}>
          Software developer with <strong>6+ years</strong> of professional and over a decade of freelance experience building full-stack <strong>websites, web-based applications, and SaaS products</strong>.
        </p>
        <div className={styles.cta}>
          <Button href="#contact">Get in touch</Button>
          <Button variant="secondary" href="#projects">View projects</Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
