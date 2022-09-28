import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';
import cx from 'classnames';
import { MutableRefObject } from 'react';

interface ISearchBarProps {
  query?: string;
  onQueryChange?: (query: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  className?: string;
  inputRef?: MutableRefObject<HTMLInputElement>;
}

const SearchBar = ({
  query,
  onQueryChange,
  className,
  onFocus,
  onBlur,
  inputRef,
}: ISearchBarProps) => {
  return (
    <div className={cx('relative bg-white rounded', className)}>
      <input
        ref={inputRef}
        onFocus={onFocus}
        onBlur={onBlur}
        type="text"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Vyhľadávanie"
        className="relative z-10 pl-11 border-dark-gray-color flex-1 rounded w-full h-12 bg-transparent "
      />
      <div className="text-black absolute left-0 top-0 w-12 h-12 flex items-center justify-center">
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchBar;
