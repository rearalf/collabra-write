'use client'
import { ChangeEvent, useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'
import InputText from '@/components/inputs-text'

const ClientFormSignUp = () => {
	const [userSignUp, setUserSignUp] = useState<{
		full_name: string
		email: string
		password: string
		password2: string
	}>({
		full_name: '',
		email: '',
		password: '',
		password2: '',
	})

	const supabase = createClientComponentClient()

	const handleSingUp = async (e: any) => {
		e.preventDefault()
		try {
			const { data, error } = await supabase.auth.signUp({
				email: userSignUp.email,
				password: userSignUp.password,
				options: {
					emailRedirectTo: `${location.origin}/auth/callback`,
					data: {
						full_name: userSignUp.full_name,
					},
				},
			})
		} catch (error) {
			console.log(error)
		}
	}

	const handleChangeInputs = (e: ChangeEvent<HTMLInputElement>) =>
		setUserSignUp({
			...userSignUp,
			[`${e.target.name}`]: e.target.value,
		})

	return (
		<form className="w-full h-full flex flex-col gap-5 justify-center md:max-w-[500px]">
			<h1 className="text-3xl font-semibold tracking-wide text-[#1EA6CC] mb-6">Sign Up</h1>

			<InputText
				autoFocus
				type="text"
				name="full_name"
				label="Full name"
				value={userSignUp.full_name}
				onChange={handleChangeInputs}
			/>

			<InputText
				type="email"
				name="email"
				label="Email"
				value={userSignUp.email}
				onChange={handleChangeInputs}
			/>

			<InputText
				type="password"
				name="password"
				label="Password"
				value={userSignUp.password}
				onChange={handleChangeInputs}
			/>

			<InputText
				type="password"
				name="password2"
				label="Confirm password"
				value={userSignUp.password2}
				onChange={handleChangeInputs}
			/>

			<div className="flex justify-center">
				<button
					className="rounded  w-full bg-[#1EA6CC] px-8 py-2 text-base font-medium text-white hover:bg-[#13B1DD] drop-shadow-[8px_8px_16px_0_rgba(19,177,221,40%)] focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-[#1EA6CC]"
					onClick={handleSingUp}
				>
					Sign Up
				</button>
			</div>
			<p className="text-gray-500 text-sm font-light">
				Do have an account?{' '}
				<Link
					href="/"
					className="text-[#1EA6CC] font-medium hover:text-[#13B1DD] active:text-[#216F97] focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-[#1EA6CC] focus-visible:rounded"
				>
					Sign In
				</Link>
			</p>
		</form>
	)
}

export default ClientFormSignUp
