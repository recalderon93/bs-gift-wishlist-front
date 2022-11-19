import React from 'react';

interface InputProps extends React.ComponentPropsWithoutRef<'input'>{
	label?: string;
}

export default function Input({
	label,
	type,
	name,
	...props
}: InputProps) {
	return <div>
		<label htmlFor={name}>{label}</label>
		<input type="text" name={name}  {...props} />
	</div>
}