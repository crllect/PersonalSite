import { useEffect, useState } from 'preact/hooks';

type Link = { label: string; href: string; external?: boolean };

const MobileNav = ({
	links,
	pathname
}: {
	links: Link[];
	pathname: string;
}) => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
		const onKey = (e: KeyboardEvent) =>
			e.key === 'Escape' && setOpen(false);
		window.addEventListener('keydown', onKey);
		return () => {
			document.body.style.overflow = '';
			window.removeEventListener('keydown', onKey);
		};
	}, [open]);

	const isActive = (href: string) =>
		href.startsWith('/') &&
		!href.startsWith('/#') &&
		(pathname === href || pathname.startsWith(`${href}/`));

	return (
		<div class="md:hidden">
			<button
				type="button"
				class="nav-icon-btn"
				aria-label={open ? 'Close menu' : 'Open menu'}
				aria-expanded={open}
				onClick={() => setOpen(o => !o)}
			>
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
				>
					{open ? (
						<path d="M6 6l12 12M18 6 6 18" />
					) : (
						<path d="M3 6h18M3 12h18M3 18h18" />
					)}
				</svg>
			</button>

			<div
				class={`mobile-drawer ${open ? 'is-open' : ''}`}
				aria-hidden={!open}
			>
				<button
					type="button"
					class="mobile-scrim"
					aria-label="Close menu"
					tabIndex={open ? 0 : -1}
					onClick={() => setOpen(false)}
				></button>
				<nav class="mobile-panel" aria-label="Mobile">
					<ul>
						{links.map(l => (
							<li key={l.href}>
								<a
									href={l.href}
									class={`mobile-link ${isActive(l.href) ? 'is-active' : ''}`}
									target={l.external ? '_blank' : undefined}
									rel={l.external ? 'noreferrer' : undefined}
									onClick={() => setOpen(false)}
								>
									{l.label}
									{l.external ? (
										<svg
											width="15"
											height="15"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											aria-hidden="true"
										>
											<path d="M7 17 17 7M8 7h9v9" />
										</svg>
									) : null}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default MobileNav;
