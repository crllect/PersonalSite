export const profile = {
	email: 'leonardo.glorioso@gmail.com'
} as const;

export type NavLink = {
	label: string;
	href: string;
	external?: boolean;
};

export const nav: NavLink[] = [
	{ label: 'Home', href: '/' },
	{ label: 'Projects', href: '/projects' },
	{ label: 'Contact', href: '/contact' },
	{ label: 'GitHub', href: 'https://github.com/crllect', external: true }
];

export type ProjectLink = {
	label: string;
	href: string;
};

export type Project = {
	slug: string;
	name: string;
	role: string;
	period: string;
	summary: string;
	description: string[];
	highlights: string[];
	metric?: { value: string; label: string };
	tags: string[];
	links: ProjectLink[];
	featured: boolean;
};

export const projects: Project[] = [
	{
		slug: 'night-network',
		name: 'Night Network',
		role: 'Co-owner · Developer',
		period: '2023 — Present',
		summary:
			'A privacy- and access-focused web organization partnering with TitaniumNetwork. Developed Space, DaydreamX, and more.',
		description: [
			'Night Network is a web organization I co-own and help run. We build and operate a family of privacy- and access-focused web apps including Space and DaydreamX. We partner with TitaniumNetwork, and run several sub-organizations.',
			'At peak we serve hundreds of thousands of users a day across our sites. My work spans product and frontend engineering, infrastructure and deployment, and helping coordinate development across the team. Our sites live on GitLab, with other projects on GitHub.'
		],
		highlights: [
			'Co-own the organization and build across its products',
			'Partner with TitaniumNetwork and run multiple sub-orgs',
			'Build and maintain frontends, backends, and deployment at scale'
		],
		tags: ['Leadership', 'Astro', 'TypeScript', 'Infrastructure'],
		links: [{ label: 'night-x.com', href: 'https://night-x.com/' }],
		featured: true
	},
	{
		slug: 'daydreamx',
		name: 'DaydreamX',
		role: 'Co-developer',
		period: '2024 — Present',
		summary:
			'A browser inside a browser — extensions, themes, tab groups, multi-profile support and cloud sync, all built from scratch.',
		description: [
			'DaydreamX is, in short, a browser that runs inside a browser. It gives people a full, customizable browsing surface with the kind of features you expect from a native browser.',
			'As a co-developer I worked on the extension system, theming engine, bookmarks, tab groups, vertical tabs, multi-profile support, and cloud sync. The site is built on NightmareJS, our custom framework, with React and TypeScript on Bun. It runs under Night Network and reaches 500k+ daily users at peak.'
		],
		highlights: [
			'Extension system, themes, bookmarks, tab groups, vertical tabs',
			'Multi-profile support and cloud sync built from scratch',
			'Co-developer; 500k+ daily users at peak'
		],
		metric: { value: '500k+', label: 'daily users at peak' },
		tags: ['NightmareJS', 'React', 'TypeScript', 'Bun'],
		links: [
			{ label: 'daydreamx.pro', href: 'https://daydreamx.pro' },
			{
				label: 'gitlab.com/nightnetwork/daydreamx',
				href: 'https://gitlab.com/nightnetwork/daydreamx'
			}
		],
		featured: true
	},
	{
		slug: 'space',
		name: 'Space',
		role: 'Co-developer',
		period: '2023 — Present',
		summary:
			'A privacy-focused web app with steady traffic across the US and internationally.',
		description: [
			'Space is a privacy-focused web app I co-develop and maintain under Night Network. It sees steady traffic across the US and internationally, reaching 200k+ daily users at peak.',
			'The live site is vanilla JavaScript on pnpm; a v2 rewrite in React, TypeScript, and Bun is in development. I work across the frontend and the pieces that keep it fast and reliable for a broad, always-on audience.'
		],
		highlights: [
			'Co-developed and maintained under Night Network',
			'Steady US and international traffic',
			'v2 rewrite (React, TypeScript, Bun) in development'
		],
		metric: { value: '200k+', label: 'daily users at peak' },
		tags: ['JavaScript', 'pnpm'],
		links: [
			{ label: 'gointospace.app', href: 'https://gointospace.app' },
			{
				label: 'gitlab.com/nightnetwork/space',
				href: 'https://gitlab.com/nightnetwork/space'
			}
		],
		featured: true
	},
	{
		slug: 'aspine',
		name: 'Aspine v3',
		role: 'Developer · Maintainer',
		period: '2024 — Present',
		summary:
			'An open-source, modern frontend for my school district\'s Aspen grade system.',
		description: [
			'Aspine is an open-source, modern frontend for my school district\'s Aspen student information system — a much nicer way for students to view grades than the stock interface.',
			'I work on the v3 rewrite. The project is currently dormant and being picked back up.'
		],
		highlights: [
			'Modern, open-source grade frontend for a real school system',
			'Built for actual students',
			'v3 rewrite — being revived'
		],
		tags: ['JavaScript', 'TypeScript', 'Open source'],
		links: [
			{
				label: 'github.com/Aspine/aspine3',
				href: 'https://github.com/Aspine/aspine3'
			}
		],
		featured: false
	},
	{
		slug: 'harvard-market',
		name: 'Harvard Market',
		role: 'Designer · Developer',
		period: '2025',
		summary:
			'A polished online-ordering site for a neighborhood Cambridge market — light/dark, cart, and order flow.',
		description: [
			'A from-scratch online-ordering site for Harvard Market, a neighborhood market and kitchen in Cambridge. Browse the menu, build a cart, and place a pickup order — pay in person.',
			'Built with Next.js and Tailwind: editorial light/dark theming, an accessible cart, and an order flow that emails the kitchen. A compact end-to-end product build.'
		],
		highlights: [
			'Full menu, cart, and pickup-order flow',
			'Editorial light/dark design system',
			'Order submission wired to email'
		],
		tags: ['Next.js', 'React', 'Tailwind'],
		links: [
			{
				label: 'harvardmarket.vercel.app',
				href: 'https://harvardmarket.vercel.app/'
			},
			{
				label: 'github.com/crllect/HarvardMarket',
				href: 'https://github.com/crllect/HarvardMarket'
			}
		],
		featured: false
	}
];

export type SkillItem = {
	label: string;
	href?: string;
};

export type SkillGroup = {
	title: string;
	items: SkillItem[];
};

export const skills: SkillGroup[] = [
	{
		title: 'Languages',
		items: [{ label: 'TypeScript' }, { label: 'JavaScript' }]
	},
	{
		title: 'Frameworks & UI',
		items: [
			{ label: 'Astro', href: 'https://astro.build' },
			{ label: 'React', href: 'https://react.dev' },
			{ label: 'Preact', href: 'https://preactjs.com' },
			{ label: 'Next.js', href: 'https://nextjs.org' },
			{ label: 'Tailwind', href: 'https://tailwindcss.com' },
			{ label: 'SCSS / CSS', href: 'https://sass-lang.com' }
		]
	},
	{
		title: 'Tooling',
		items: [
			{ label: 'Bun', href: 'https://bun.sh' },
			{ label: 'npm', href: 'https://www.npmjs.com' },
			{ label: 'Git', href: 'https://git-scm.com' },
			{ label: 'GitHub', href: 'https://github.com' },
			{ label: 'GitLab', href: 'https://gitlab.com' },
			{ label: 'Figma', href: 'https://figma.com' }
		]
	},
	{
		title: 'Focus',
		items: [
			{ label: 'UI/UX design', href: 'https://figma.com' },
			{ label: 'Full-stack', href: 'https://preactjs.com' },
			{ label: 'Web performance', href: 'https://astro.build' }
		]
	}
];

export type Recognition = {
	title: string;
	org: string;
	period: string;
	note?: string;
};

export const recognition: Recognition[] = [
	{
		title: '1st place',
		org: 'HacKnight',
		period: '2024 – 2025',
		note: 'Hack Club–affiliated learnathon & hackathon.'
	},
	{
		title: 'Most technically complex project',
		org: 'Hack Club Wonderland \'24',
		period: '2024',
		note: '48-hour constrained build hackathon.'
	},
	{
		title: 'Participant',
		org: 'MIT Blueprint \'25',
		period: '2025',
		note: 'Weekend learnathon & hackathon for high-schoolers.'
	},
	{
		title: 'Security research',
		org: 'School district IT',
		period: 'Ongoing',
		note: 'Responsibly disclosed device and network findings and helped patch them (some details kept confidential).'
	}
];

export const education = {
	school: 'Cambridge Rindge and Latin School',
	location: 'Cambridge, MA',
	detail: 'Expected June 2027'
} as const;

export type ContactLink = {
	label: string;
	value: string;
	href: string;
	kind: 'email' | 'github' | 'gitlab' | 'site' | 'discord' | 'linkedin';
	copy?: string;
};

export const contactLinks: ContactLink[] = [
	{
		label: 'Email',
		value: profile.email,
		href: `mailto:${profile.email}`,
		kind: 'email'
	},
	{
		label: 'Discord',
		value: '@crllect',
		href: 'https://discord.com/users/713488984596021291',
		kind: 'discord'
	},
	{
		label: 'Night Network',
		value: 'night-x.com',
		href: 'https://night-x.com/',
		kind: 'site'
	},
	{
		label: 'Night Network GitLab',
		value: 'gitlab.com/nightnetwork',
		href: 'https://gitlab.com/nightnetwork',
		kind: 'gitlab'
	},
	{
		label: 'Night Network GitHub',
		value: 'github.com/Night-N3twork',
		href: 'https://github.com/Night-N3twork',
		kind: 'github'
	},
	{
		label: 'GitHub',
		value: 'github.com/crllect',
		href: 'https://github.com/crllect',
		kind: 'github'
	}
];

export const repo = {
	owner: 'crllect',
	name: 'CS-Portfolio',
	url: 'https://github.com/crllect/CS-Portfolio'
} as const;
