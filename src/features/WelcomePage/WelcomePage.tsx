import { JSX } from 'react'
import { CreateSection } from 'sm/features/WelcomePage/features/CreateSection'
import { JoinSection } from 'sm/features/WelcomePage/features/JoinSection'
import { TitleSection } from 'sm/features/WelcomePage/features/TitleSection'

export const WelcomePage = (): JSX.Element => {
  return (
    <>
      <TitleSection />
      <CreateSection />
      <JoinSection />
    </>
  )
}
