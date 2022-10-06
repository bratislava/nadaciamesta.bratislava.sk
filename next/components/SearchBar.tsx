import cx from 'classnames'
import { MutableRefObject } from 'react'

import SearchIcon from '../assets/icons/search.svg'

interface ISearchBarProps {
  query?: string
  onQueryChange?: (query: string) => void
  onFocus?: () => void
  onBlur?: () => void
  className?: string
  inputRef?: MutableRefObject<HTMLInputElement>
}

const SearchBar = ({ query, onQueryChange, className, onFocus, onBlur, inputRef }: ISearchBarProps) => {
  return (
    <div className={cx('relative rounded bg-white', className)}>
      <input
        ref={inputRef}
        onFocus={onFocus}
        onBlur={onBlur}
        type="text"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Vyhľadávanie"
        className="relative z-10 h-12 w-full flex-1 rounded border-dark-gray-color bg-transparent pl-11 "
      />
      <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center text-black">
        <SearchIcon />
      </div>
    </div>
  )
}

export default SearchBar
