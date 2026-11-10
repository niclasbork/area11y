'use client'

import React from 'react'

export default function RGBVennFluid() {
	return (
		<div
			style={{
				width: '100%',
				maxWidth: '350px', // optional
			}}
		>
			{/* Aspect wrapper */}
			<div
				style={{
					position: 'relative',
					width: '100%',
					aspectRatio: '1 / 1',
				}}
			>
				{/* Blue */}
				<div
					style={{
						position: 'absolute',
						width: '58%',
						aspectRatio: '1 / 1',
						borderRadius: '50%',
						backgroundColor: '#1D75BE',
						top: '8%',
						left: '21%',
						mixBlendMode: 'multiply',
					}}
				/>

				{/* Yellow */}
				<div
					style={{
						position: 'absolute',
						width: '58%',
						aspectRatio: '1 / 1',
						borderRadius: '50%',
						backgroundColor: '#FEF100',
						top: '44%',
						left: '2%',
						mixBlendMode: 'multiply',
					}}
				/>

				{/* Red */}
				<div
					style={{
						position: 'absolute',
						width: '58%',
						aspectRatio: '1 / 1',
						borderRadius: '50%',
						backgroundColor: '#EE1B24',
						top: '44%',
						left: '40%',
						mixBlendMode: 'multiply',
					}}
				/>
			</div>
		</div>
	)
}
