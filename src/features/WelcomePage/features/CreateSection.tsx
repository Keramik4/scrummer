import { JSX } from 'react'
import { ActionButton } from 'sm/features/shared/Button'
import { RocketIcon } from 'sm/features/shared/icons/RocketIcon'

export const CreateSection = (): JSX.Element => (
  <div className=" text-center py-10">
    <ActionButton text="Create fresh room" Icon={RocketIcon} />
  </div>
)
