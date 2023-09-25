'use client'
import { ChangeEvent, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'

const ClientFormSignUp = () => {
	const [userSignUp, setUserSignUp] = useState<{
		name: string
		email: string
		password: string
		password2: string
	}>({
		name: '',
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
						name: userSignUp.name,
					},
				},
			})
			console.log({ data })
			console.log({ error })
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

			<label
				htmlFor="name"
				className="relative block overflow-hidden rounded-md border border-gray-400 px-3 pt-3 shadow-sm focus-within:border-[#1EA6CC] focus-within:ring-1 focus-within:ring-[#1EA6CC]"
			>
				<input
					autoFocus
					type="text"
					id="name"
					name="name"
					placeholder="Full name"
					value={userSignUp.name}
					onChange={handleChangeInputs}
					className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
				/>
				<span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs peer-focus:text-[#1EA6CC]">
					Full name
				</span>
			</label>

			<label
				htmlFor="email"
				className="relative block overflow-hidden rounded-md border border-gray-400 px-3 pt-3 shadow-sm focus-within:border-[#1EA6CC] focus-within:ring-1 focus-within:ring-[#1EA6CC]"
			>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Email"
					value={userSignUp.email}
					onChange={handleChangeInputs}
					className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
				/>
				<span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs peer-focus:text-[#1EA6CC]">
					Email
				</span>
			</label>

			<label
				htmlFor="password"
				className="relative block overflow-hidden rounded-md border border-gray-400 px-3 pt-3 shadow-sm focus-within:border-[#1EA6CC] focus-within:ring-1 focus-within:ring-[#1EA6CC]"
			>
				<input
					type="password"
					id="password"
					name="password"
					placeholder="password"
					value={userSignUp.password}
					onChange={handleChangeInputs}
					className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
				/>
				<span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs peer-focus:text-[#1EA6CC]">
					Password
				</span>
			</label>

			<label
				htmlFor="password2"
				className="relative block overflow-hidden rounded-md border border-gray-400 px-3 pt-3 shadow-sm focus-within:border-[#1EA6CC] focus-within:ring-1 focus-within:ring-[#1EA6CC]"
			>
				<input
					type="password"
					id="password2"
					name="password2"
					placeholder="password"
					value={userSignUp.password2}
					onChange={handleChangeInputs}
					className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
				/>
				<span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs peer-focus:text-[#1EA6CC]">
					Confirm password
				</span>
			</label>

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
