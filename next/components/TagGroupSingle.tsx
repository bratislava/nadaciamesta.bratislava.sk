import cx from 'classnames'
import React, { Dispatch, SetStateAction } from 'react'

import CancelIcon from '../assets/icons/cancel.svg'
import Button from './Button'
import Tag from './Tag'

export interface ITagGroupSingleProps {
  tags: Array<{ name: string }>
  value: string
  setValue: Dispatch<SetStateAction<string>>
  clearable?: boolean
  uppercase?: boolean
}

const TagGroupSingle = ({
  tags,
  value,
  setValue,
  clearable = false,
  uppercase = false,
}: ITagGroupSingleProps) => {
  return (
    <div className="mb-4 flex flex-wrap items-center gap-2">
      {tags.map((tag, index) => (
        <Tag
          text={tag.name}
          key={index}
          variant={value === tag.name ? 'active' : 'inactive'}
          onClick={() => setValue(tag.name)}
          className={cx({ uppercase })}
        />
      ))}
      {clearable && (
        <div className="w-6">
          {value && (
            <Button onClick={() => setValue('')} className="w-full border-none p-1">
              <CancelIcon stroke="var(--font-color)" />
            </Button>
          )}
        </div>
      )}
    </div>
  )
}

export default TagGroupSingle
