import { ChangeEvent, HTMLInputTypeAttribute } from 'react'

export interface InputTextInterface {
	name: string
	value: string
	label: string
	autoFocus?: boolean
	placeholder?: string
	type: HTMLInputTypeAttribute
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
