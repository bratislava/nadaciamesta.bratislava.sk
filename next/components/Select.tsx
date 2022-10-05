import { ComponentProps } from 'react'
import ReactSelect, { components } from 'react-select'
import ChevronDown from '../assets/icons/chevron-down.svg'
import ChevronUp from '../assets/icons/chevron-up.svg'
import CancelIcon from '../assets/icons/cancel.svg'

export interface IOption {
  value: string
  label: string
}

export interface ISelectProps {
  id: string
  placeholder?: string
  value?: IOption
  options: IOption[]
  name?: string
  className?: string
  onChange: (value: IOption) => unknown
}

const DropdownIndicator = (props: ComponentProps<typeof components.DropdownIndicator>) => {
  return (
    <components.DropdownIndicator {...props}>
      {props.selectProps.menuIsOpen ? <ChevronUp /> : <ChevronDown />}
    </components.DropdownIndicator>
  )
}

const ClearIndicator = (props: ComponentProps<typeof components.DropdownIndicator>) => {
  return (
    <components.ClearIndicator className="p-1" {...props}>
      <CancelIcon stroke="var(--font-color)" />
    </components.ClearIndicator>
  )
}

const styles = {
  control: (_, state) => {
    return {
      borderRadius: '0.125rem',
      display: 'flex',
      borderColor: state.selectProps.menuIsOpen ? 'var(--primary-color)' : 'var(--dark-gray-colo)',
      borderWidth: '2px',
      outline: 'none',
      padding: '2px 12px 2px 0.5rem',
      cursor: 'pointer',
    }
  },
  menu: (provided) => {
    return {
      ...provided,
      borderColor: 'var(--dark-gray-color)',
      borderWidth: '2px',
      borderRadius: '0.125rem',
    }
  },
  option: (provided, { isSelected }) => {
    return {
      backgroundColor: isSelected ? 'var(--primary-color) !important' : 'white',
      color: isSelected ? 'white' : 'var(--font-color)',
      padding: '2px 12px 2px 20px',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#e2e2e2',
      },
    }
  },
  indicatorSeparator: () => {
    return {
      display: 'none',
    }
  },
  valueContainer: (provided) => {
    return { ...provided, padding: '0' }
  },
  indicatorsContainer: (provided) => {
    return { ...provided, padding: '0' }
  },
  clearIndicator: (provided) => {
    return { ...provided, paddingTop: '6px', paddingBottom: '6px' }
  },
}

const Select = ({ placeholder = 'Placeholder', value, options, className, id, onChange }: ISelectProps) => (
  <ReactSelect
    placeholder={placeholder}
    styles={styles}
    options={options}
    isClearable={true}
    className={className}
    components={{ DropdownIndicator, ClearIndicator }}
    instanceId={id}
    onChange={onChange}
    value={value}
  />
)

export default Select
