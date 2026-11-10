import React from 'react'
import { Position } from '../types'
import { AccessibilityIcon } from './AccessibilityIcon'

interface FloatingButtonProps {
	onClick: () => void
	isOpen: boolean
	position: Position
	primaryColor: string
	ariaLabel: string
}

export const FloatingButton = ({
	onClick,
	isOpen,
	position,
	primaryColor,
	ariaLabel,
}: FloatingButtonProps) => {
	const getPositionStyles = (): React.CSSProperties => {
		const base: React.CSSProperties = {
			position: 'fixed',
			bottom: '15px',
			width: '64px',
			height: '64px',
			borderRadius: '50%',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: '#ffffff',
			boxShadow: '0 12px 30px rgba(0,0,0,0.2)',
			zIndex: 999999,
			border: 'none',
			transition:
				'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
			padding: 0,
		}

		if (position === 'bottom-left') {
			base.left = '15px'
		} else if (position === 'bottom-center') {
			base.left = '50%'
			base.transform = 'translateX(-50%)'
		} else {
			base.right = '15px'
		}

		return base
	}

	return (
		<button
			onClick={onClick}
			style={getPositionStyles()}
			onMouseEnter={(e) => {
				const translate =
					position === 'bottom-center' ? 'translateX(-50%) ' : ''
				e.currentTarget.style.transform = `${translate}scale(1.1)`
			}}
			onMouseLeave={(e) => {
				const translate =
					position === 'bottom-center' ? 'translateX(-50%) ' : ''
				e.currentTarget.style.transform = `${translate}scale(1)`
			}}
			aria-label={ariaLabel}
			aria-expanded={isOpen}
		>
			<AccessibilityIcon background={primaryColor} />
		</button>
	)
}
