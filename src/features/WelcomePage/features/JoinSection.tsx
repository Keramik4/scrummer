import { JSX } from 'react'
import { ActionButton } from 'sm/features/shared/Button'
import { SendIcon } from 'sm/features/shared/icons/SendIcon'
import { TextInput } from 'sm/features/shared/Input'

export const JoinSection = (): JSX.Element => (
  <div className="py-10 flex justify-center">
    <TextInput placeholder="insert room id" />
    <div className="pl-2">
      <ActionButton Icon={SendIcon} text="Join" />
    </div>
  </div>
)
