import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import Input from '../../components/input/input';
import ScreenWrapper from '../../components/screen-wrapper/screen-wrapper';
import { useAppContext } from '../../context/provider';
import useQuery from '../../hooks/useQuery';
import styles from '../../styles/form.module.scss';

type Props = React.PropsWithChildren<{
	type: 'edit_item' | 'add_item';
}>
export default function AdminEditItemScreen({
	type
}:Props) {
	const query= useQuery();
	const [name, setName] = useState<string>('');
	const [link, setLink] = useState<string>('');
	const [quantity, setQuantity] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const navigate = useNavigate();
	const title=type==='add_item'?'Add New Item':"Edit Item"
	const buttonLabel = type === 'edit_item' ? 'Edit Item' : 'Confirm New Item';
	const {data, addNewItem, updateNewItem} = useAppContext();
	console.log('params',query.get('_id'));
	function formVerification() {
		let qty = 0;
		try {
			qty = parseInt(quantity);
		} catch (e) {
			console.log(e);
			alert('Invalid Quantity');
		}
		if (name) {
			return { verification: true, qty };
		}
		return { verification: false, qty: 0 }
	}

	function buttonHandler() {
		const { verification, qty } = formVerification();
		if (type === 'add_item') {
			if (verification) {
				addNewItem({ name, quantity: qty, description, link }, (error) => {
					if (!error) {
						navigate('/admin/gift-wishlist');
					}
				})
			}
		} else if (type === 'edit_item') {
			const _id=query.get('_id')
			if (verification&&_id) {
				updateNewItem(_id, { name, quantity: qty, description, link }, (error) => {
					if (error) {
						alert('An Error updating component');
					}
					navigate('/admin/gift-wishlist')
				})
			}
		}
		
	}

	useEffect(() => {
		const _id = query.get('_id');
		if (data.giftList && _id) {
			//@ts-ignore
			const item=data.giftList.find(item=>item._id===_id)
			if (item) {
				setName(item.name);
				setLink(item.link||'');
				setDescription(item.description||'')
				setQuantity(item.quantity.toString())

			}
		}
	},[data.giftList, query])

	if (type === 'edit_item' && !query.get('_id')) {
		navigate('/admin/gift-wishlist');
	}
	return (
		<ScreenWrapper className={styles.wrapper}>
			<h1>{title}</h1>
			<Input label="Name" value={name} onChange={e=>{setName(e.target.value)}} />
			<Input label="Link" value={link} onChange={e=>setLink(e.target.value)} />
			<Input label="Quantity" value={quantity} onChange={e=>setQuantity(e.target.value)} />
			<Input label="Description" value={description} onChange={e=>setDescription(e.target.value)} />
		<div className={styles.bottom}>
			<Button big onClick={buttonHandler}>
					<p>{buttonLabel}</p>
			</Button>
		</div>
		</ScreenWrapper>
	);
}