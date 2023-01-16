export function load() {
	return {
		navigation: {
			links: [
				{
					title: 'Home',
					link: '/'
				},
				{
					title: 'About',
					link: '/about'
				},
				{
					title: 'Services',
					link: '/services'
				},
				{
					title: 'Portfolio',
					link: '/portfolio'
				},
				{
					title: 'Contact',
					link: '/contact'
				}
			]
		},
		footer: {
			title: 'What are you waiting for?',
			description:
				"Ready to take your online presence to the next level with professional web design? Click the button below to request a quote and see how our team of experts can help your business succeed. Don't wait any longer to start building your dream website – take the first step today!",
			button: {
				title: 'Discuss Your Project',
				link: '/'
			},
			info: {
				description:
					'Let Phoenix Tech Lab rebuild your website, rising from the ashes to a stronger, more effective online presence.',
				links: {
					facebook: 'https://www.facebook.com/yourbusiness',
					twitter: 'https://twitter.com/yourbusiness',
					instagram: 'https://www.instagram.com/yourbusiness'
				}
			},
			lists: [
				{
					title: 'Menu',
					items: [
						{
							title: 'Home',
							link: '/'
						},
						{
							title: 'About',
							link: '/about'
						},
						{
							title: 'Services',
							link: '/services'
						},
						{
							title: 'Portfolio',
							link: '/portfolio'
						},
						{
							title: 'Contact',
							link: '/contact'
						}
					]
				},
				{
					title: 'Services',
					items: [
						{
							title: 'Web Design',
							link: '/services/web-design'
						},
						{
							title: 'SEO',
							link: '/services/seo'
						},
						{
							title: 'Hosting',
							link: '/services/hosting'
						},
						{
							title: 'Logo Design',
							link: '/services/logo-design'
						}
					]
				},
				{
					title: 'Contact Us',
					items: [
						{
							title: 'PO Box 1106<br />Phoenix, AZ 85001',
							link: 'https://www.google.com/maps/place/1234+Street+Name',
							icon: '<svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5.375 16.2803C4.875 15.5511 4.30208 14.7282 3.65625 13.8115C3.03125 12.8949 2.58333 12.249 2.3125 11.874C2.04167 11.499 1.72917 11.0407 1.375 10.499C1.02083 9.93652 0.78125 9.54069 0.65625 9.31152C0.552083 9.08236 0.427083 8.79069 0.28125 8.43652C0.15625 8.08236 0.0729167 7.78027 0.03125 7.53027C0.0104167 7.25944 0 6.94694 0 6.59277C0 4.92611 0.583333 3.50944 1.75 2.34277C2.91667 1.17611 4.33333 0.592773 6 0.592773C7.66667 0.592773 9.08333 1.17611 10.25 2.34277C11.4167 3.50944 12 4.92611 12 6.59277C12 6.94694 11.9792 7.25944 11.9375 7.53027C11.9167 7.78027 11.8333 8.08236 11.6875 8.43652C11.5625 8.79069 11.4375 9.08236 11.3125 9.31152C11.2083 9.54069 10.9792 9.93652 10.625 10.499C10.2708 11.0407 9.95833 11.499 9.6875 11.874C9.41667 12.249 8.95833 12.8949 8.3125 13.8115C7.6875 14.7282 7.125 15.5511 6.625 16.2803C6.47917 16.4886 6.27083 16.5928 6 16.5928C5.72917 16.5928 5.52083 16.4886 5.375 16.2803ZM4.21875 8.37402C4.71875 8.85319 5.3125 9.09277 6 9.09277C6.6875 9.09277 7.27083 8.85319 7.75 8.37402C8.25 7.87402 8.5 7.28027 8.5 6.59277C8.5 5.90527 8.25 5.32194 7.75 4.84277C7.27083 4.34277 6.6875 4.09277 6 4.09277C5.3125 4.09277 4.71875 4.34277 4.21875 4.84277C3.73958 5.32194 3.5 5.90527 3.5 6.59277C3.5 7.28027 3.73958 7.87402 4.21875 8.37402Z" fill="#333333"/> </svg>'
						},
						{
							title: '(888) 757-8785',
							link: 'tel:8887578785',
							icon: '<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.5312 11.9053C15.8438 12.0303 16 12.2594 16 12.5928C16 12.6553 15.9896 12.7074 15.9688 12.749L15.2188 15.999C15.1979 16.1032 15.1458 16.1969 15.0625 16.2803C15 16.3844 14.9167 16.4574 14.8125 16.499C14.7083 16.5615 14.6042 16.5928 14.5 16.5928C10.5 16.5928 7.08333 15.1761 4.25 12.3428C1.41667 9.50944 0 6.09277 0 2.09277C0 1.98861 0.0208333 1.88444 0.0625 1.78027C0.125 1.67611 0.197917 1.59277 0.28125 1.53027C0.385417 1.44694 0.489583 1.39486 0.59375 1.37402L3.84375 0.624023C3.88542 0.60319 3.9375 0.592773 4 0.592773C4.33333 0.592773 4.5625 0.749023 4.6875 1.06152L6.1875 4.56152C6.22917 4.64486 6.25 4.73861 6.25 4.84277C6.25 5.07194 6.15625 5.26986 5.96875 5.43652L4.09375 6.96777C4.57292 8.00944 5.35417 9.07194 6.4375 10.1553C7.52083 11.2386 8.58333 12.0199 9.625 12.499L11.1562 10.624C11.3229 10.4365 11.5208 10.3428 11.75 10.3428C11.8542 10.3428 11.9479 10.3636 12.0312 10.4053L15.5312 11.9053Z" fill="#333333"/> </svg>'
						},
						{
							title: 'info@phoenixtechlab.com',
							link: 'mailto:info@phoenixtechlab.com',
							icon: '<svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.6875 4.56152C15.75 4.49902 15.8125 4.48861 15.875 4.53027C15.9583 4.57194 16 4.63444 16 4.71777V11.0928C16 11.5094 15.8542 11.8636 15.5625 12.1553C15.2708 12.4469 14.9167 12.5928 14.5 12.5928H1.5C1.08333 12.5928 0.729167 12.4469 0.4375 12.1553C0.145833 11.8636 0 11.5094 0 11.0928V4.71777C0 4.63444 0.03125 4.58236 0.09375 4.56152C0.177083 4.51986 0.25 4.51986 0.3125 4.56152C1 5.08236 2.60417 6.25944 5.125 8.09277C5.16667 8.13444 5.30208 8.24902 5.53125 8.43652C5.78125 8.62402 5.97917 8.76986 6.125 8.87402C6.27083 8.95736 6.45833 9.07194 6.6875 9.21777C6.91667 9.34277 7.13542 9.43652 7.34375 9.49902C7.57292 9.56152 7.79167 9.59277 8 9.59277C8.1875 9.59277 8.375 9.57194 8.5625 9.53027C8.75 9.46777 8.92708 9.40527 9.09375 9.34277C9.26042 9.25944 9.4375 9.15527 9.625 9.03027C9.8125 8.90527 9.96875 8.80111 10.0938 8.71777C10.2188 8.61361 10.3646 8.49902 10.5312 8.37402C10.6979 8.24902 10.8125 8.15527 10.875 8.09277C13.3333 6.32194 14.9375 5.14486 15.6875 4.56152ZM8 8.59277C7.83333 8.59277 7.625 8.54069 7.375 8.43652C7.14583 8.31152 6.95833 8.20736 6.8125 8.12402C6.66667 8.01986 6.44792 7.86361 6.15625 7.65527C5.88542 7.42611 5.73958 7.31152 5.71875 7.31152C3.17708 5.45736 1.36458 4.11361 0.28125 3.28027C0.09375 3.13444 0 2.93652 0 2.68652V2.09277C0 1.67611 0.145833 1.32194 0.4375 1.03027C0.729167 0.738607 1.08333 0.592773 1.5 0.592773H14.5C14.9167 0.592773 15.2708 0.738607 15.5625 1.03027C15.8542 1.32194 16 1.67611 16 2.09277V2.68652C16 2.93652 15.9062 3.13444 15.7188 3.28027C14.6979 4.07194 12.8854 5.41569 10.2812 7.31152C10.2604 7.31152 10.1042 7.42611 9.8125 7.65527C9.54167 7.86361 9.33333 8.01986 9.1875 8.12402C9.04167 8.20736 8.84375 8.31152 8.59375 8.43652C8.36458 8.54069 8.16667 8.59277 8 8.59277Z" fill="#333333"/> </svg>'
						}
					]
				}
			]
		}
	};
}
