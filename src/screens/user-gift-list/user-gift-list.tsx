import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import BaseListItem from '../../components/list-item/base-list-item';
import ScreenWrapper from '../../components/screen-wrapper/screen-wrapper';
import { useAppContext } from '../../context/provider';
import styles from '../../styles/user-gift-list.module.scss';

export default function UserGiftList() {
	const { selectItem } = useAppContext();
	const [selected, setSelected] = useState<string | null>(null);
	const { data } = useAppContext();
	const navigate = useNavigate();

	return (
		<ScreenWrapper className={styles.void}>
			<div className={styles.wrapper}>
			<h1 className={styles.label_blue}>
				Gift List
			</h1>
			<div className={styles.content}>
					{data.giftList
						// .filter((item, index) => index < 5)
						.map((item, index) => (
						<BaseListItem
							index={index + 1}
							name={item.name}
							link={item.link}
							quantity={item.quantity}
							//@ts-ignore
							key={item._id}
							//@ts-ignore
							// isSelected={!item.quantity > 0||item._id===selected}
							disabled={item.quantity<1}
							//@ts-ignore
							selectHandler={() => {
								//@ts-ignore
								navigate(`/select-item?quantity=${item.quantity}&_id=${item._id}&link=${item.link}&description=${item.description}&name=${item.name}`)
							}}
						/>
						))}
		</div>
		</div>
		</ScreenWrapper>
	)
}
