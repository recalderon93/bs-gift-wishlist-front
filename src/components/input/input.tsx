import React from 'react';
import styles from '../../styles/inputs.module.scss';

interface InputProps extends React.ComponentPropsWithoutRef<'input'>{
	label?: string;
}

export default function Input({
	label,
	type,
	name,
	...props
}: InputProps) {
	return <div className={styles.wrapper}>
		<label htmlFor={name}>{label}</label>
		<input type="text" name={name}  {...props} />
	</div>
}