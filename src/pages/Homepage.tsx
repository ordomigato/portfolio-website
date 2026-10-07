import Hero from '../components/Hero'
import Projects from '../components/Projects'
import CursorGlow from '../components/CursorGlow'
import Nav from '../components/Nav'
import About from '../components/About'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import styles from './Homepage.module.css'

function Homepage() {
  return (
    <>
      <CursorGlow />
      <Nav />
      <main className={styles.main}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default Homepage
