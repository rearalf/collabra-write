import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ClientFormSignUp from './client-form-sign-up'

function SignUp() {
	return (
		<main className="h-screen w-screen bg-white flex">
			<div className="max-md:w-full md:min-w-[500px] xl:min-w-[600px] flex flex-col items-center p-5">
				<div className="flex justify-between items-center w-full">
					<Link
						href="/"
						className="focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-[#1EA6CC] focus-visible:rounded"
					>
						<Image
							src="/logo-svg.svg"
							alt=""
							width={40}
							height={40}
							style={{ height: '40px', width: '40px' }}
						/>
					</Link>
					<Link
						href="/"
						className="text-[#1EA6CC] font-medium rounded px-4 py-2 active:bg-[#1ea6cc31] focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-[#1EA6CC] focus-visible:rounded"
					>
						Sign In
					</Link>
				</div>

				<ClientFormSignUp />
			</div>
			<div className="flex-1 bg-[#1EA6CC] w-full h-full max-md:hidden flex flex-col md:p-10 xl:p-32">
				<Image
					src="/taking_notes_re_bnaf.svg"
					alt=""
					width={200}
					height={160}
					sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
					style={{ height: '100%', width: '100%' }}
					priority
				/>
			</div>
		</main>
	)
}

export default SignUp
