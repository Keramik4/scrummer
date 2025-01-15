import { JSX } from 'react'
import { geistSans } from 'sm/features/shared/fonts'
import { LogoIcon } from 'sm/features/shared/icons/LogoIcon'

export const TitleSection = (): JSX.Element => {
  return (
    <div className="pt-40 pb-10">
      <div className="flex justify-center">
        <h1 className={`${geistSans.className} text-3xl pr-2`}>Scrummer</h1>
        <LogoIcon size="medium" />
      </div>
      <p className="text-center">The simplest scrum poker</p>
    </div>
  )
}
