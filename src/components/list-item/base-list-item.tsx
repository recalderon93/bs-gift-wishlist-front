import React from 'react';
import styles from '../../styles/list-item.module.scss';
import Button from '../button/Button';

type BaseListItemProps = React.PropsWithChildren<{
	index: number;
	name: string;
	quantity: number;
	link?: string;
	isSelected?: boolean;
	disabled?: boolean;
	selectHandler?: () => void;
}>

export default function BaseListItem({
	index,name, quantity, isSelected, disabled, selectHandler, link}: BaseListItemProps) {
	const href = link && link.match('http') ? link : undefined;
	return <div className={styles.wrapper}>
		<div className={styles.row}>
			<p>{index}</p>
			<a className={styles.name_label} href={href} target="_blank" rel="noreferrer">
				<p>{name}</p>
			</a>
			<p>Qty: {quantity}</p>
			<div className={styles.buttons}>
			<Button disabled={disabled} colorSchema={isSelected ? 'primary_inverted' : 'primary'} onClick={selectHandler}>
					<p>
					{isSelected ? 'Selected Gift' : 'Select Gift'}
					</p>
			</Button>
			</div>
		</div>
	</div>
}