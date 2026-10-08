import { useReveal } from '../utils/useReveal'
import styles from './Skills.module.css'

function Chips({ items }: { items: string[] }) {
  return (
    <div className={styles.chips}>
      {items.map((item) => (
        <span key={item} className={`chip ${styles.skillChip}`}>{item}</span>
      ))}
    </div>
  )
}

function Skills() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section id="skills" ref={ref} className={`${styles.skills} reveal ${visible ? 'in' : ''}`}>
      <div className="wrap">
        <div className={styles.head}>
          <h2>The stack</h2>
          <p className="eyebrow" style={{ color: 'var(--hot-dim)' }}>02 — Skills</p>
        </div>

        <div className={styles.cols}>
          <div className={styles.col}>
            <h3>Backend &amp; APIs</h3>
            <p className={styles.overview}>Services, data, and everything that keeps them running.</p>
            <div className={styles.sub}>
              <p className={styles.st}>Languages &amp; frameworks</p>
              <Chips items={['Go', 'Gin', 'Fiber', 'Node / Express', 'Sequelize', 'JWT']} />
            </div>
            <div className={styles.sub}>
              <p className={styles.st}>Databases</p>
              <Chips items={['Postgres', 'MySQL', 'MongoDB', 'Firebase']} />
            </div>
            <div className={styles.sub}>
              <p className={styles.st}>API styles</p>
              <Chips items={['REST', 'GraphQL', 'WebSockets', 'SSE']} />
            </div>
            <div className={styles.sub}>
              <p className={styles.st}>Hosting &amp; deploy</p>
              <Chips items={['Docker', 'Digital Ocean', 'Heroku', 'Nginx']} />
            </div>
          </div>

          <div className={styles.col}>
            <h3>Application &amp; Front-End</h3>
            <p className={styles.overview}>State, data fetching, UI, accessibility.</p>
            <div className={styles.sub}>
              <p className={styles.st}>Languages</p>
              <Chips items={['TypeScript', 'JavaScript', 'C#', 'SQL']} />
            </div>
            <div className={styles.sub}>
              <p className={styles.st}>Frameworks</p>
              <Chips items={['React', 'Vue', 'Lit', 'Redux / Vuex', 'Pinia', 'Three.js']} />
            </div>
            <div className={styles.sub}>
              <p className={styles.st}>Styling</p>
              <Chips items={['Tailwind', 'SASS', 'Material UI']} />
            </div>
            <div className={styles.sub}>
              <p className={styles.st}>Accessibility</p>
              <Chips items={['a11y', 'WAVE']} />
            </div>
          </div>

          <div className={styles.col}>
            <h3>Testing &amp; Delivery</h3>
            <p className={styles.overview}>The practices that keep the first two columns shippable.</p>
            <div className={styles.sub}>
              <p className={styles.st}>Testing</p>
              <Chips items={['Jest', 'Playwright', 'Selenium', 'Mocha']} />
            </div>
            <div className={styles.sub}>
              <p className={styles.st}>Source &amp; process</p>
              <Chips items={['Git', 'Jira', 'Confluence', 'Asana']} />
            </div>
            <p className={styles.alsoLine}>
              Also comfortable with: Figma, Adobe CC, and WordPress / Contentful / Strapi for
              client-site work.
            </p>
          </div>

          <div className={`${styles.col} ${styles.aiCol}`}>
            <div className={styles.aiHead}>
              <h3>AI &amp; Agentic Workflows</h3>
              <span className={styles.aiTag}>// new terrain</span>
            </div>
            <p className={styles.overview}>
              The newest part of the stack, and the one I'm still actively figuring out, but
              already shipping with it.
            </p>
            <div className={styles.sub}>
              <Chips items={['Agentic Engineering', 'Context Engineering', 'Agent Orchestration']} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
