import React from 'react'

// Helper function to lighten a hex color
const lightenColor = (hex: string, percent: number) => {
	let f = parseInt(hex.slice(1), 16),
		t = percent < 0 ? 0 : 255,
		p = percent < 0 ? percent * -1 : percent,
		c = '#',
		i = 0,
		rgb = []

	for (let component = 0; component < 3; component++) {
		let val = (f >> (8 * (2 - component))) & 0xff
		val = Math.round((0xff - val) * p) + val
		rgb.push(val)
	}

	// Ensure 6-digit hex output
	for (let j = 0; j < 3; j++) {
		c += ('00' + rgb[j].toString(16)).slice(-2)
	}

	return c
}

interface ToggleProps {
	active: boolean
	onClick: () => void
	icon: React.ReactNode
	label: string
	primaryColor: string
	disabled?: boolean
}

export const Toggle = ({
	active,
	onClick,
	icon,
	label,
	primaryColor,
	disabled = false,
}: ToggleProps) => {
	const lightPrimaryColor = lightenColor(primaryColor, 0.4) // 40% lighter for example

	return (
		<button
			type='button'
			disabled={disabled}
			onClick={() => {
				if (disabled) return
				onClick()
			}}
			className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all w-full text-left mb-2 setting-btn ${
				active
					? `bg-[${primaryColor}] border-[${primaryColor}] shadow-md`
					: 'bg-white border-gray-100 text-gray-700 hover:border-gray-300'
			} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
			aria-disabled={disabled}
		>
			<div className='flex items-center gap-3'>
				<span style={{ color: primaryColor }}>{icon}</span>
				<span
					className='text-sm font-bold max-w-full md:max-w-[calc(100%-35px)]'
				>
					{label}
				</span>
			</div>
			<div
				className={`min-w-10 h-5 rounded-full relative transition-colors`}
				style={{ backgroundColor: active ? primaryColor : '#e2e8f0' }} // Using a gray from Tailwind's default palette for inactive state
			>
				<div
					className='absolute top-1 w-3 h-3 rounded-full bg-white transition-all shadow-sm'
					style={{ left: active ? '22px' : '4px' }}
				/>
			</div>
		</button>
	)
}
