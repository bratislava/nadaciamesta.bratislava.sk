import cx from 'classnames';
import Link from 'next/link';
import { ReactNode } from 'react';

interface IButtonProps {
  children?: ReactNode;
  onClick?: () => unknown;
  variant?: 'regular' | 'primary' | 'secondary';
  disabled?: boolean;
  className?: string;
  size?: 'base' | 'xl';
  href?: string;
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
      'flex rounded-sm text-center justify-center font-semibold border-solid border-2 select-none',
      {
        'text-font border-font hover:text-primary hover:border-primary':
          variant === 'regular',
        'text-primary border-primary hover:text-secondary hover:bg-primary hover:border-primary':
          variant === 'primary',
        'text-secondary border-secondary hover:text-accent hover:bg-secondary':
          variant === 'secondary',
        'px-3 py-0.5 text-lg': size === 'base',
        'px-10 py-3 text-xl': size === 'xl',
        'opacity-50 pointer-events-none cursor-not-allowed': disabled === true,
      },
      className
    ),
  };

  return href && href.length ? (
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
  );
};

export default Button;
