import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import ScreenWrapper from "../../components/screen-wrapper/screen-wrapper";
import { useAppContext } from "../../context/provider";
import useQuery from "../../hooks/useQuery";
import CloudIcon from "../../icons/cloud-icon";
import LeftIcon from "../../icons/left-icon";
import RightIcon from "../../icons/right-icon";
import styles from '../../styles/select-gift-screen.module.scss';

export default function SelectGiftScreen() {
	const query = useQuery();
	const { selectItem } = useAppContext();
	const name = query.get('name');
	const _id = query.get('_id');
	const description = query.get('description');
	const quantity = query.get('quantity');
	const [qty, setQty] = useState(1);
	const navigate = useNavigate();

	function selectMore() {
		setQty(st => {
			const newSt = st + 1;
			const maxQty = parseInt(quantity||'0');
			if (maxQty < newSt) {
				return st;
			} else {
				return newSt;
			}
		});
	}

	function selectMinus() {
		setQty(st => {
			if (st > 1) {
				return st - 1;
			}
			return st;
		})
	}

	function buttonHandler() {
		if (_id) {
			selectItem({ _id, qty }, (error) => {
				if (error) {
					alert('Ha ocurrido un Error, asegurese de que su IP no este registrada previamente')
					navigate(-1);
				} else {
					navigate('/card');
				}
			})
		}
	}
	if (
		name === null || _id === null
		|| description === null
		|| quantity === null
	) {
		navigate('/gift-wishlist');
	}

	return <ScreenWrapper className={styles.wrapper}>
		<h1 className={styles.label_blue}>Gift</h1>
		<div className={styles.cloud}>
			<CloudIcon width={400} />
			<h2>{name}</h2>
		</div>
		<p className={styles.description}>{description}</p>
		<div className={styles.quantity}>
			<div className={qty===1?styles.disabled:undefined} onClick={selectMinus}>
			<LeftIcon />
			</div>
			<p>{qty}</p>
			<div className={qty+1>parseInt(quantity||'0')?styles.disabled:undefined} onClick={selectMore}>
			<RightIcon />
			</div>
		</div>
		<div className={styles.buttons}>
			<Button big onClick={buttonHandler}><p>Confirmar Selección</p></Button>
			<Button big colorSchema="primary_inverted" onClick={()=>navigate(-1)}><p>Cancelar Selección</p></Button>
		</div>
	</ScreenWrapper>
}