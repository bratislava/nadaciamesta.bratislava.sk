import cx from 'classnames'
import Link from 'next/link'
import { ReactNode } from 'react'

interface IButtonProps {
  children?: ReactNode
  onClick?: () => unknown
  variant?: 'regular' | 'primary' | 'secondary'
  disabled?: boolean
  className?: string
  size?: 'base' | 'xl'
  href?: string
}

const Button = ({
  children,
  disabled,
  onClick,
  className,
  variant = 'regular',
  size = 'base',
  href,
}: IButtonProps) => {
  const props = {
    className: cx(
      'flex select-none justify-center rounded-sm border-2 border-solid text-center font-semibold',
      {
        'border-font text-font hover:border-primary hover:text-primary': variant === 'regular',
        'border-primary text-primary hover:border-primary hover:bg-primary hover:text-secondary':
          variant === 'primary',
        'border-secondary text-secondary hover:bg-secondary hover:text-accent':
          variant === 'secondary',
        'px-3 py-0.5 text-lg': size === 'base',
        'px-10 py-3 text-xl': size === 'xl',
        'pointer-events-none cursor-not-allowed opacity-50': disabled === true,
      },
      className,
    ),
  }

  return href && href.length > 0 ? (
    <Link href={href}>
      <a href={href} {...props}>
        {children}
      </a>
    </Link>
  ) : (
    <div
      role="button"
      onClick={!disabled && onClick}
      onKeyPress={!disabled && onClick}
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      {children}
    </div>
  )
}

export default Button
