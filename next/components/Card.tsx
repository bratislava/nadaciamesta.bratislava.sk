import { ReactNode } from 'react';
import cx from 'classnames';
import Link from 'next/link';

export interface ICardProps {
  href?: string;
  children?: ReactNode;
  className?: string;
}

const Card = ({ href = '', children, className }: ICardProps) => (
  <Link href={href}>
    <a
      className={cx(
        'block rounded shadow-lg p-6',
        { 'cursor-default': !href },
        className
      )}
      href={href}
    >
      {children}
    </a>
  </Link>
);

export default Card;
