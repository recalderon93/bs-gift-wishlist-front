import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import AdminListItem from "../../components/list-item/admin-list-item";
import ScreenWrapper from "../../components/screen-wrapper/screen-wrapper";
import { useAppContext } from "../../context/provider";
import styles from '../../styles/user-gift-list.module.scss';

export default function AdminGiftListScreen() {
	const { data, deleteItem } = useAppContext();
	const navigate = useNavigate();

	return (<ScreenWrapper className={""}>
			<div className={styles.wrapper}>
			<h1 className={styles.label_blue}>
				Gift List
			</h1>
			<div className={styles.content}>
				{ data.giftList.map((item, index) => (
					<AdminListItem
						index={index+1}
						name={item.name}
						quantity={item.quantity}
						link={item.link}
						// @ts-ignore
						key={item._id}
						isSelected={false}
						editHandler={() => {
						// @ts-ignore
							navigate(`/admin/edit-item?_id=${item._id}`);
						}}
						removeHandler={() => {
							//@ts-ignore
							//@ts-ignore
							deleteItem({_id:item._id})
						}}
						/>
						))}
		</div>
			<div className={styles.bottom}>
				<Button big colorSchema="orange" onClick={()=>{navigate('/admin/add-item')}}>
					<p>Add Item</p>
				</Button>
			</div>
		</div>
	</ScreenWrapper>)
}