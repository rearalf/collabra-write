'use client'
import { useState } from 'react'
import { InputTextInterface } from '@/types/components'
import ClientInputText from './server-input-text'

const InputText = (props: InputTextInterface) => {
	const [showPassword, setshowPassword] = useState<boolean>(false)

	const handleChange = (e: any) => {
		e.preventDefault()
		setshowPassword(!showPassword)
	}

	return <ClientInputText {...props} handleChange={handleChange} showPassword={showPassword} />
}

export default InputText
