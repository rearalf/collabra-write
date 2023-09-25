import { InputTextInterface } from '@/types/components'
import { FiEye, FiEyeOff } from 'react-icons/fi'

interface ClientInputTextProps extends InputTextInterface {
	showPassword: boolean
	handleChange: (e: any) => void
}

const ClientInputText = (props: ClientInputTextProps) => (
	<label
		htmlFor={props.name}
		className="relative block overflow-hidden rounded-md border border-gray-400 px-3 pt-3 shadow-sm focus-within:border-[#1EA6CC] focus-within:ring-1 focus-within:ring-[#1EA6CC]"
	>
		{props.autoFocus ? (
			<input
				autoFocus
				id={props.name}
				name={props.name}
				type={
					props.type === 'password'
						? props.showPassword
							? 'text'
							: 'password'
						: props.type
				}
				value={props.value}
				onChange={props.onChange}
				placeholder={props.placeholder || ''}
				className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
			/>
		) : (
			<input
				id={props.name}
				type={
					props.type === 'password'
						? props.showPassword
							? 'text'
							: 'password'
						: props.type
				}
				name={props.name}
				value={props.value}
				onChange={props.onChange}
				placeholder={props.placeholder || ''}
				className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
			/>
		)}
		<span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs peer-focus:text-[#1EA6CC]">
			{props.label}
		</span>
		{props.type === 'password' && (
			<button
				onClick={props.handleChange}
				className="absolute right-4 top-2 rounded-full px-1 py-1 focus-visible:outline focus-visible:outline-offset-1 focus-visible:outline-[#1EA6CC] hover:bg-gray-600/20 active:bg-[#1EA6CC]/30"
			>
				{props.showPassword ? (
					<FiEyeOff size={20} color="#9ca3af" />
				) : (
					<FiEye size={20} color="#9ca3af" />
				)}
			</button>
		)}
	</label>
)

export default ClientInputText
