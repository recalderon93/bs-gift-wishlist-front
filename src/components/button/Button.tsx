import React from 'react';
import styles from '../../styles/buttons.module.scss';

interface ButtonProps extends React.ComponentPropsWithoutRef<"button">{
	href?: string;
	big?: boolean
	colorSchema?:
	| 'primary'
	| 'secondary'
	| 'orange'
	| 'purple'
	| 'primary_inverted'
	| 'secondary_inverted'
	| 'orange_inverted'
	| 'purple_inverted';
}

export default function Button({ children,big, style,className, colorSchema="primary", ...props }: ButtonProps) {
	return <button className={`${styles.button} ${big && styles.big} ${styles[colorSchema]}`} {...props}>
		{children}
	</button>
}