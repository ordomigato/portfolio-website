import React from 'react'
import styles from './Button.module.css'

type ButtonProps = {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  variant?: 'primary' | 'secondary'
  target?: '_blank' | '_self' | '_parent' | '_top'
  rel?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  variant = 'primary',
  target,
  rel,
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={`${styles.btn} ${styles[variant]} ${className}`}
        onClick={onClick}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
      >
        {children}
      </a>
    )
  }
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${styles.btn} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
