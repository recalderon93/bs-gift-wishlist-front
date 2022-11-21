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
	function goToCard(error:boolean) {
		if (!error) {

			navigate('/card')
		} else {
			alert('Ha ocurrido un Error, asegurese de que su IP no este registrada previamente')
		}
	}
	function buttonHandler() {
		if (selected) {
			selectItem({ _id: selected },goToCard);

		} else {
			alert('Por favor selecciona un Regalo Primero')
		}
	}
	return (
		<ScreenWrapper className={styles.void}>
			<div className={styles.wrapper}>
			<h1 className={styles.label_blue}>
				Gift List
			</h1>
			<div className={styles.content}>
					{data.giftList.map((item, index) => (
						<BaseListItem
							index={index + 1}
							name={item.name}
							link={item.link}
							quantity={item.quantity}
							//@ts-ignore
							key={item._id}
							//@ts-ignore
							isSelected={!item.quantity > 0||item._id===selected}
							//@ts-ignore
							selectHandler={() => {
								if (!selected) {
							//@ts-ignore
									setSelected(item._id)
								} else {
									setSelected(null)
								}
							}}
						/>
						))}
		</div>
			<div className={styles.bottom}>
				<Button big colorSchema="orange" onClick={buttonHandler}>
					<p>Confirmar Selección</p>
				</Button>
			</div>
		</div>
		</ScreenWrapper>
	)
}
