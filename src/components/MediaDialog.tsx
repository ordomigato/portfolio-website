import { useEffect, useRef } from 'react'
import styles from './MediaDialog.module.css'

export type Media =
  | { kind: 'video'; id: string }
  | { kind: 'image'; src: string; caption?: string }

type Props = {
  media: Media
  title: string
  onClose: () => void
}

/**
 * Native <dialog> so Esc-to-close, focus trapping and the backdrop come from the platform.
 * Mounted only while open, so the YouTube iframe (or full-size image) is never requested until
 * someone asks for it — keeps it off the initial page load, and off the wire for most visitors.
 */
function MediaDialog({ media, title, onClose }: Props) {
  const label = media.kind === 'video' ? `${title} demo video` : title

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
      aria-label={label}
      // The dialog element itself is the backdrop area; the inner panel stops propagation.
      onClick={() => ref.current?.close()}
    >
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        <div className={styles.bar}>
          <p className={styles.label}>{media.kind === 'video' ? `${title} · demo` : title}</p>
          <button type="button" className={styles.close} onClick={() => ref.current?.close()}>
            Close ✕
          </button>
        </div>
        {media.kind === 'video' ? (
          <div className={styles.frame}>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${media.id}?autoplay=1`}
              title={label}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        ) : (
          <figure className={styles.figure}>
            <img src={media.src} alt={title} />
            {media.caption && <figcaption className={styles.caption}>{media.caption}</figcaption>}
          </figure>
        )}
      </div>
    </dialog>
  )
}

export default MediaDialog
