import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<main className="h-screen w-screen bg-white flex">
			<div className="max-md:w-full md:min-w-[500px] xl:min-w-[600px] flex flex-col items-center p-5">
				<div className="flex justify-between items-center w-full">
					<Link
						href="/"
						className="focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-[#1EA6CC] focus-visible:rounded"
					>
						<Image src="/logo-svg.svg" alt="" width={40} height={40} />
					</Link>
					<Link
						href="/sign-up"
						className="text-[#1EA6CC] font-medium rounded px-4 py-2 active:bg-[#1ea6cc31] focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-[#1EA6CC] focus-visible:rounded"
					>
						Sign Up
					</Link>
				</div>
				<form className="w-full h-full flex flex-col gap-5 justify-center md:max-w-[500px]">
					<h1 className="text-3xl font-semibold tracking-wide text-[#1EA6CC] mb-6">
						Sign In
					</h1>
					<label
						htmlFor="UserEmail"
						className="relative block overflow-hidden rounded-md border border-gray-400 px-3 pt-3 shadow-sm focus-within:border-[#1EA6CC] focus-within:ring-1 focus-within:ring-[#1EA6CC]"
					>
						<input
							autoFocus
							type="email"
							id="UserEmail"
							placeholder="Email"
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
							placeholder="password"
							className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
						/>

						<span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs peer-focus:text-[#1EA6CC]">
							Password
						</span>
					</label>
					<div className="flex justify-center">
						<button className="rounded  w-full bg-[#1EA6CC] px-8 py-2 text-base font-medium text-white hover:bg-[#13B1DD] drop-shadow-[8px_8px_16px_0_rgba(19,177,221,40%)] focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-[#1EA6CC]">
							Sign In
						</button>
					</div>
					<p className="text-gray-500 text-sm font-light">
						Don{"'"}t have an account?{' '}
						<Link
							href="/sign-up"
							className="text-[#1EA6CC] font-medium hover:text-[#13B1DD] active:text-[#216F97] focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-[#1EA6CC] focus-visible:rounded"
						>
							Get Started
						</Link>
					</p>
				</form>
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
				/>
			</div>
		</main>
	)
}
