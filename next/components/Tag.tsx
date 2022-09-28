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
      'flex justify-center  text-center border-solid border-2',
      {
        'text-sm rounded-sm py-1 px-2': size === 'small',
        'text-xl rounded py-2 px-3 font-semibold': size === 'large',
        'text-primary border-primary': variant === 'active',
        'text-dark-gray-color border-dark-gray-color': variant === 'inactive',
        'text-gray-universal-100 cursor-default': variant === 'passive',
      },
      className
    )}
  >
    {text}
  </div>
);

export default Tag;
