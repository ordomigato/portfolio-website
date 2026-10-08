import { useCallback, useState } from 'react'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import CursorGlow from '../components/CursorGlow'
import Nav from '../components/Nav'
import About from '../components/About'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import styles from './Homepage.module.css'

function Homepage() {
  // Clicking a skill in the Stack filters Projects down to the work that used it.
  const [tech, setTech] = useState<string | null>(null)

  const pickTech = useCallback((skill: string) => {
    setTech(skill)
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <>
      <CursorGlow />
      <Nav />
      <main className={styles.main}>
        <Hero />
        <About />
        <Skills onPickTech={pickTech} />
        <Projects tech={tech} onClearTech={() => setTech(null)} />
        <Contact />
      </main>
    </>
  )
}

export default Homepage
