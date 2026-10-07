import { useEffect, useRef } from 'react'
import styles from './CursorGlow.module.css'

function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    let raf = 0
    let x = 0
    let y = 0

    const onMove = (e: PointerEvent) => {
      glow.style.opacity = '1'
      x = e.clientX
      y = e.clientY
      if (!raf) {
        raf = requestAnimationFrame(() => {
          glow.style.left = `${x}px`
          glow.style.top = `${y}px`
          raf = 0
        })
      }
    }
    const onLeave = () => {
      glow.style.opacity = '0'
    }

    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerleave', onLeave)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={glowRef} className={styles.glow} />
}

export default CursorGlow
