import DownloadLink from './DownloadLink';
import Button from './Button';
import cx from 'classnames';

export interface IGrantCardProps {
  title: string;
  href?: string;
  text?: string;
  files?: Array<{ name: string; url: string }>;
  className?: string;
}

const GrantCard = ({
  href,
  title,
  text,
  files = [],
  className,
}: IGrantCardProps) => {
  return (
    <div className={cx('flex flex-col space-y-4', className)}>
      <div className="h-[110px]">
        <div className="font-semibold min-h-[3.2em] flex items-center justify-center text-xl border-2 rounded-md text-center border-dark-gray-color py-2 px-6 mb-4">
          <span>{title}</span>
        </div>
      </div>
      <div className="h-full">
        <div className="w-full mb-2">{text}</div>
        <div className="flex flex-wrap gap-2">
          {files.map((file, index) => (
            <DownloadLink
              text={file.name}
              fileName={file.name}
              fileUrl={file.url}
              key={index}
            />
          ))}
        </div>
      </div>

      <Button
        disabled={!href}
        href={href}
        variant="primary"
        className="rounded py-2"
      >
        Požiadať o grant
      </Button>
    </div>
  );
};

export default GrantCard;
