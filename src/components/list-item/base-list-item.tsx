import React from 'react';
import styles from '../../styles/list-item.module.scss';
import Button from '../button/Button';

type BaseListItemProps = React.PropsWithChildren<{
	index: number;
	name: string;
	quantity: number;
	isSelected?: boolean;
	disabled?: boolean;
}>

export default function BaseListItem({
	index,name, quantity, isSelected, disabled
 }: BaseListItemProps) {
	return <div className={styles.wrapper}>
		<div className={styles.row}>
			<p>{index}</p>
			<p>{name}</p>
			<p>Qty: {quantity}</p>
			<div className={styles.buttons}>
			<Button colorSchema={isSelected ? 'primary_inverted' : 'primary'}>
					<p>
					{isSelected ? 'Selected Gift' : 'Select Gift'}
					</p>
			</Button>
			</div>
		</div>
	</div>
}