import cx from 'classnames';

interface ITagProps {
  text: string;
  onClick?: () => unknown;
  variant?: 'active' | 'inactive' | 'passive';
  size?: 'small' | 'large';
  className?: string;
}

const Tag = ({
  text,
  onClick,
  className,
  variant = 'passive',
  size = 'small',
}: ITagProps) => (
  <div
    onClick={onClick}
    onKeyPress={onClick}
    role="button"
    tabIndex={0}
    className={cx(
      'flex justify-center  border-2 border-solid text-center',
      {
        'rounded-sm py-1 px-2 text-sm': size === 'small',
        'rounded py-2 px-3 text-xl font-semibold': size === 'large',
        'border-primary text-primary': variant === 'active',
        'border-dark-gray-color text-dark-gray-color': variant === 'inactive',
        'cursor-default text-gray-universal-100': variant === 'passive',
      },
      className
    )}
  >
    {text}
  </div>
);

export default Tag;
