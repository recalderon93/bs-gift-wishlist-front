import Button from '../button/Button';
import styles from '../../styles/list-item.module.scss';
import React from 'react';

type AdminListItemProps = React.PropsWithChildren<{
	index: number;
	name: string;
	quantity: number;
	link?: string;
	isSelected?: boolean;
	disabled?: boolean;
	editHandler: () => void;
	removeHandler: () => void;
}>;

export default function AdminListItem({index, link, name, quantity, isSelected, disabled, removeHandler, editHandler }: AdminListItemProps) {
	const href=link&&link.match('http')?link:undefined

	return <div className={styles.wrapper}>
		<div className={`${styles.row} ${styles.spaced}`}>
			<p>{index}</p>
		<a href={href} target="_blank" rel="noreferrer">
			<p>{name}</p>
		</a>
			<p>Qty: {quantity}</p>
			<p className={isSelected ? styles.selected : styles.unselected}>{isSelected ? 'selected' : 'unselected'}</p>
		</div>
		<div className={styles.row}>
			<div className={`${styles.buttons} ${styles.centered}`}>
				<Button colorSchema='primary_inverted' onClick={editHandler}><p>Edit Gift</p></Button>
				<Button colorSchema='orange' onClick={removeHandler}><p>Remove Gift</p></Button>
			</div>
		</div>
	</div>
}