import { Dispatch, SetStateAction } from 'react'

import Tag from './Tag'

export interface ITagGroupMultipleProps {
  tags: { name: string }[]
  values: string[]
  setValues: Dispatch<SetStateAction<string[]>>
}

const TagGroupMultiple = ({ tags, values, setValues }: ITagGroupMultipleProps) => {
  return (
    <div className="mb-4 flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <Tag
          text={tag.name}
          key={index}
          variant={values.includes(tag.name) ? 'active' : 'inactive'}
          onClick={() => {
            setValues(
              values.includes(tag.name)
                ? values.filter((item) => item !== tag.name)
                : [...values, tag.name],
            )
          }}
        />
      ))}
    </div>
  )
}

export default TagGroupMultiple
