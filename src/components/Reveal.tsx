import { motion, useReducedMotion } from 'framer-motion';
import type { ComponentChildren } from 'preact';

type RevealProps = {
	children: ComponentChildren;
	delay?: number;
	y?: number;
	class?: string;
};

const Reveal = ({
	children,
	delay = 0,
	y = 22,
	class: className
}: RevealProps) =>
	useReducedMotion() ? (
		<div class={className}>{children}</div>
	) : (
		<motion.div
			class={`reveal-init${className ? ` ${className}` : ''}`}
			initial={{ opacity: 0, y }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.25 }}
			transition={{ duration: 0.6, ease: [0.2, 0.9, 0.2, 1], delay }}
		>
			{children}
		</motion.div>
	);

export default Reveal;
