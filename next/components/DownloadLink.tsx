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
      download={fileName && fileName.length ? fileName : true}
      target="_blank"
      className={cx('w-full text-left flex justify-between group', className)}
      rel="noopener noreferrer"
    >
      <div className="font-bold group-hover:underline break-all">{text}</div>
      <DownloadIcon className="w-4 h-4 flex-shrink-0 mt-1 ml-2" />
    </a>
  )
}

export default DownloadLink
