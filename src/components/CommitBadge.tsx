import { useEffect, useState } from 'preact/hooks';

type CommitBadgeProps = {
	owner: string;
	name: string;
	url: string;
};

const CommitBadge = ({ owner, name, url }: CommitBadgeProps) => {
	const [sha, setSha] = useState<string | null>(null);

	useEffect(() => {
		let alive = true;
		fetch(`https://api.github.com/repos/${owner}/${name}/commits/main`, {
			headers: { Accept: 'application/vnd.github+json' }
		})
			.then(r => (r.ok ? r.json() : null))
			.then(d => {
				alive && d?.sha && setSha(String(d.sha).slice(0, 7));
			})
			.catch(() => {});
		return () => {
			alive = false;
		};
	}, [owner, name]);

	return (
		<a
			class="commit-badge mono"
			href={url}
			target="_blank"
			rel="noreferrer"
			title="Latest commit - view source on GitHub"
		>
			<span class="commit-dot" aria-hidden="true"></span>
			{sha ? `#${sha}` : '#·······'}
		</a>
	);
};

export default CommitBadge;
