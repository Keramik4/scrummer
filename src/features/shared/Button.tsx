import { JSX } from 'react'
import { IconProps } from 'sm/features/shared/icons/iconProps'

type ButtonProps = {
  text?: string
  Icon?: (props: IconProps) => JSX.Element
  iconSize?: IconProps['size']
}

export const ActionButton = ({
  text,
  Icon,
  iconSize = 'small',
}: ButtonProps): JSX.Element => {
  const styles = `
    text-gray-900
    bg-white border 
    border-gray-300 
    focus:outline-none 
    hover:bg-gray-100 
    focus:ring-4 
    focus:ring-gray-100 
    font-medium rounded-lg 
    text-sm 
    ${text ? 'px-5' : 'px-2'}
    py-2.5  
    dark:bg-gray-800 
    dark:text-white 
    dark:border-gray-600 
    dark:hover:bg-gray-700 
    dark:hover:border-gray-600 
    dark:focus:ring-gray-700
    inline-flex`

  return (
    <button className={styles}>
      {Icon ? <Icon size={iconSize} /> : null}
      {text ? <span className="pl-2">{text}</span> : null}
    </button>
  )
}
