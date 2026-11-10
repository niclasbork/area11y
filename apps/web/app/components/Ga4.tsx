import Script from 'next/script'

export default function Ga4() {
	return (
		<>
			<Script
				src='https://www.googletagmanager.com/gtag/js?id=G-JF8WRGSPVV'
				strategy='afterInteractive'
			/>
			<Script id='ga4' strategy='afterInteractive'>
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-JF8WRGSPVV', {
						anonymize_ip: true
					});
				`}
			</Script>
		</>
	)
}
