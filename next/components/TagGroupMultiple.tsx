import React, { Dispatch, SetStateAction } from 'react';

import Tag from './Tag';

export interface ITagGroupMultipleProps {
  tags: Array<{ name: string }>;
  values: Array<string>;
  setValues: Dispatch<SetStateAction<Array<string>>>;
}

const TagGroupMultiple = ({
  tags,
  values,
  setValues,
}: ITagGroupMultipleProps) => {
  return (
    <div className="mb-4 flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <Tag
          text={tag.name}
          key={index}
          variant={values.includes(tag.name) ? 'active' : 'inactive'}
          onClick={() => {
            values.includes(tag.name)
              ? setValues(values.filter((item) => item !== tag.name))
              : setValues([...values, tag.name]);
          }}
        />
      ))}
    </div>
  );
};

export default TagGroupMultiple;
