import { useEffect, useRef } from 'react'
import styles from './CursorGlow.module.css'

const TRAIL = 0.06
const INTERACTIVE_SELECTOR = 'a, button, [role="button"]'

function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const current = { ...target }
    let raf = 0
    let hoveringInteractive = false
    let insideWindow = false

    const setScale = () => {
      glow.style.setProperty('--glow-scale', insideWindow && !hoveringInteractive ? '1' : '0')
    }

    const tick = () => {
      current.x += (target.x - current.x) * TRAIL
      current.y += (target.y - current.y) * TRAIL
      glow.style.left = `${current.x}px`
      glow.style.top = `${current.y}px`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX
      target.y = e.clientY
      if (!insideWindow) {
        insideWindow = true
        setScale()
      }
    }
    const onLeave = () => {
      insideWindow = false
      setScale()
    }
    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.closest(INTERACTIVE_SELECTOR)) {
        hoveringInteractive = true
        setScale()
      }
    }
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.closest(INTERACTIVE_SELECTOR)) {
        hoveringInteractive = false
        setScale()
      }
    }

    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerleave', onLeave)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={glowRef} className={styles.glow} />
}

export default CursorGlow
