import cx from 'classnames'
import Link from 'next/link'
import { ReactNode } from 'react'

export interface ICardProps {
  href?: string
  children?: ReactNode
  className?: string
}

const Card = ({ href = '', children, className }: ICardProps) => (
  <Link
    className={cx('block rounded p-6 shadow-lg', { 'cursor-default': !href }, className)}
    href={href}
  >
    {children}
  </Link>
)

export default Card
