import React from 'react'
import ReactDOM from 'react-dom/client'

const container = document.getElementById('root')

if (container) {
	ReactDOM.createRoot(container).render(
		<React.StrictMode>
			<main
				style={{
					minHeight: '100vh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					background: '#f6f6f6',
					color: '#111',
					fontFamily:
						'"Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
				}}
			>
				<div style={{ textAlign: 'center' }}>
					<p
						style={{
							fontSize: '12px',
							letterSpacing: '0.2em',
							textTransform: 'uppercase',
							marginBottom: '16px',
							color: '#6b6b6b',
						}}
					>
						area11y Engine
					</p>
					<h1 style={{ fontSize: '28px', margin: 0 }}>
						area11y Engine running
					</h1>
					<p style={{ marginTop: '12px', color: '#4b4b4b' }}>
						Loader and core assets are ready.
					</p>
				</div>
			</main>
		</React.StrictMode>
	)
}
