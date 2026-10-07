import { useMemo, useState } from 'react'
import { projects, type ProjectType } from '../data/projects'
import { useReveal } from '../utils/useReveal'
import styles from './Projects.module.css'

type Filter = 'all' | ProjectType

const filters: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Web Apps', value: 'Web App' },
  { label: 'Websites', value: 'Website' },
  { label: 'Design', value: 'Design' },
]

function Projects() {
  const { ref, visible } = useReveal<HTMLElement>()
  const [filter, setFilter] = useState<Filter>('all')

  const shown = useMemo(
    () => projects.filter((p) => filter === 'all' || p.type === filter),
    [filter]
  )

  return (
    <section id="projects" ref={ref} className={`${styles.projects} reveal ${visible ? 'in' : ''}`}>
      <div className="wrap">
        <div className={styles.head}>
          <div>
            <p className="eyebrow" style={{ color: 'var(--lilac)' }}>03 — Projects</p>
            <h2 className={styles.heading}>Selected work</h2>
          </div>
          <p className={styles.count}>{shown.length} shown · 2020 – 2024</p>
        </div>

        <div className={styles.filters}>
          {filters.map((f) => (
            <button
              key={f.value}
              className={`${styles.filterBtn} ${filter === f.value ? styles.active : ''}`}
              onClick={() => setFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {shown.map((project, i) => (
            <article key={project.title} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.index}>{String(i + 1).padStart(2, '0')} / {project.year}</span>
                <span className={styles.type}>{project.type}</span>
              </div>
              <div className={styles.cover}>
                <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
              </div>
              <p className={styles.title}>{project.title}</p>
              <div className={styles.tech}>
                {project.tech.map((t) => (
                  <span key={t} className={`chip ${styles.techChip}`}>{t}</span>
                ))}
              </div>
              <div className={styles.links}>
                {project.website && (
                  <a href={project.website} target="_blank" rel="noopener noreferrer">Visit site ↗</a>
                )}
                {project.code && (
                  <a href={project.code} target="_blank" rel="noopener noreferrer">Source ↗</a>
                )}
                {project.external && (
                  <a href={project.external.href} target="_blank" rel="noopener noreferrer">{project.external.label} ↗</a>
                )}
                {project.note && <span className={styles.disabled}>{project.note}</span>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
