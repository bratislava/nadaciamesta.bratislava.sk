import cx from 'classnames'

import DownloadIcon from '../assets/icons/download.svg'

interface IDownloadLinkProps {
  text: string
  fileUrl: string
  fileName?: string
  className?: string
}

const DownloadLink = ({ text, fileUrl, fileName, className }: IDownloadLinkProps) => {
  return (
    <a
      href={fileUrl}
      download={fileName && fileName.length > 0 ? fileName : true}
      target="_blank"
      className={cx('group flex w-full justify-between text-left', className)}
      rel="noopener noreferrer"
    >
      <div className="break-all font-bold group-hover:underline">{text}</div>
      <DownloadIcon className="ml-2 mt-1 h-4 w-4 shrink-0" />
    </a>
  )
}

export default DownloadLink
