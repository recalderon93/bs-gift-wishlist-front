import Button from '../button/Button';
import styles from '../../styles/list-item.module.scss';
import React from 'react';

type AdminListItemProps = React.PropsWithChildren<{
	index: number;
	name: string;
	quantity: number;
	isSelected?: boolean;
	disabled?: boolean;
}>;

export default function AdminListItem({index, name, quantity, isSelected, disabled }: AdminListItemProps) {
	return <div className={styles.wrapper}>
		<div className={`${styles.row} ${styles.spaced}`}>
			<p>{index}</p>
			<p>{name}</p>
			<p>Qty: {quantity}</p>
			<p className={isSelected ? styles.selected : styles.unselected}>{isSelected ? 'selected' : 'unselected'}</p>
		</div>
		<div className={styles.row}>
			<div className={`${styles.buttons} ${styles.centered}`}>
				<Button colorSchema='primary_inverted'><p>Edit Gift</p></Button>
				<Button colorSchema='orange'><p>Remove Gift</p></Button>
			</div>
		</div>
	</div>
}