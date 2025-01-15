export type IconProps = {
  size: IconSize
}

type IconSize = 'very-small' | 'small' | 'medium'

export const mapSizeToClassName = (size: IconSize): string => {
  switch (size) {
    case 'very-small':
      return 'size-4'
    case 'small':
      return 'size-6'
    default:
      return 'size-8'
  }
}
