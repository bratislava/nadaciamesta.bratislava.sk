import React, { Dispatch, SetStateAction } from 'react';
import Tag from './Tag';
import { ReactComponent as CancelIcon } from '../assets/icons/cancel.svg';
import cx from 'classnames';
import Button from './Button';

export interface ITagGroupSingleProps {
  tags: Array<{ name: string }>;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  clearable?: boolean;
  uppercase?: boolean;
}

const TagGroupSingle = ({
  tags,
  value,
  setValue,
  clearable = false,
  uppercase = false,
}: ITagGroupSingleProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4 items-center">
      {tags.map((tag, index) => (
        <Tag
          text={tag.name}
          key={index}
          variant={value === tag.name ? 'active' : 'inactive'}
          onClick={() => setValue(tag.name)}
          className={cx({ uppercase: uppercase })}
        />
      ))}
      {clearable && (
        <div className="w-6">
          {value && (
            <Button
              onClick={() => setValue(undefined)}
              className={'border-none py-1 px-1 w-full'}
            >
              <CancelIcon stroke="var(--font-color)" />
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default TagGroupSingle;
