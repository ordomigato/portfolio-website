import { useEffect, useRef } from 'react'
import styles from './VideoDialog.module.css'

type Props = {
  videoId: string
  title: string
  onClose: () => void
}

/**
 * Native <dialog> so Esc-to-close, focus trapping and the backdrop come from the platform.
 * Mounted only while open, so the YouTube iframe is never requested until someone asks for
 * it — keeps the embed off the initial page load, and off the wire entirely for most visitors.
 */
function VideoDialog({ videoId, title, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!el.open) el.showModal()

    // Esc fires `cancel`/`close` natively; mirror that back into React state.
    const onCloseEvent = () => onClose()
    el.addEventListener('close', onCloseEvent)
    return () => el.removeEventListener('close', onCloseEvent)
  }, [onClose])

  return (
    <dialog
      ref={ref}
      className={styles.dialog}
      aria-label={`${title} demo video`}
      // The dialog element itself is the backdrop area; the inner panel stops propagation.
      onClick={() => ref.current?.close()}
    >
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        <div className={styles.bar}>
          <p className={styles.label}>{title} · demo</p>
          <button type="button" className={styles.close} onClick={() => ref.current?.close()}>
            Close ✕
          </button>
        </div>
        <div className={styles.frame}>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
            title={`${title} demo video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </dialog>
  )
}

export default VideoDialog
