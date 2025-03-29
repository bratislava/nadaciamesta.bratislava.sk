import cx from 'classnames'

import Button from './Button'
import DownloadLink from './DownloadLink'

export interface IGrantCardProps {
  title: string
  href?: string
  text?: string
  files?: Array<{ name: string; url: string }>
  className?: string
}

const GrantCard = ({ href, title, text, files = [], className }: IGrantCardProps) => {
  return (
    <div className={cx('flex flex-col space-y-4', className)}>
      <div className="md:h-[350px] lg:h-[160px] xl:h-[130px]">
        <img src={`/grants/${title}.png`} className="mb-4 flex w-full" />
      </div>
      <div className="h-full">
        <div className="mb-2 w-full">{text}</div>
        <div className="flex flex-wrap gap-2">
          {files.map((file, index) => (
            <DownloadLink text={file.name} fileName={file.name} fileUrl={file.url} key={index} />
          ))}
        </div>
      </div>

      <Button disabled={!href} href={href} variant="primary" className="rounded py-2">
        Požiadať o grant
      </Button>
    </div>
  )
}

export default GrantCard
