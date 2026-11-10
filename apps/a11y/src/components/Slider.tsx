import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface SliderProps {
	label: string
	value: number
	min: number
	max: number
	step: number
	unit?: string
	onChange: (val: number) => void
	primaryColor: string
}

export const Slider = ({
	label,
	value,
	min,
	max,
	step,
	unit = '',
	onChange,
	primaryColor,
}: SliderProps) => {
	const handleStepChange = (direction: 'dec' | 'inc') => {
		const delta = direction === 'inc' ? step : -step
		const next = Math.min(max, Math.max(min, value + delta))
		onChange(Number(next.toFixed(4)))
	}

	return (
		<div className='mb-4'>
			<div className='flex justify-between items-center mb-1'>
				<span className='text-sm font-bold text-gray-700'>{label}</span>
				<span className='text-xs font-mono bg-gray-100 px-2 py-0.5 rounded text-gray-600'>
					{value}
					{unit}
				</span>
			</div>
			<div className='flex items-center gap-3'>
				<button
					type='button'
					onClick={() => handleStepChange('dec')}
					className='w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 active:bg-gray-200 transition-colors'
					aria-label={`${label} verringern`}
				>
					<ChevronLeft size={16} />
				</button>
				<input
					type='range'
					min={min}
					max={max}
					step={step}
					value={value}
					onChange={(e) => onChange(parseFloat(e.target.value))}
					className='flex-1 h-[2px] bg-gray-200 rounded-lg appearance-none cursor-grab active:cursor-grabbing'
					style={{ accentColor: primaryColor }}
				/>
				<button
					type='button'
					onClick={() => handleStepChange('inc')}
					className='w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 active:bg-gray-200 transition-colors'
					aria-label={`${label} erhöhen`}
				>
					<ChevronRight size={16} />
				</button>
			</div>
		</div>
	)
}
