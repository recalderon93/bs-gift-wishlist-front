import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import Counter from "../../components/counter/counter";
import ScreenWrapper from "../../components/screen-wrapper/screen-wrapper";
import RocketIcon from "../../icons/rocket-icon";
import styles from '../../styles/landing-screen.module.scss';

export default function Landing() {
	const navigate = useNavigate();
	function goToGiftList() {
		navigate('/gift-wishlist')
	}

	return (<ScreenWrapper className={styles.wrapper}>
		<div>
		<h2 className={styles.label_purple}>Baby Shower</h2>
		<h2 className={styles.label_blue}>Francisco</h2>
		</div>
		<div className={styles.rocket}>
		<RocketIcon width={'20vh'} />
		</div>
		<Counter />
		<div style={{ position: 'fixed', bottom: 0, marginBottom:'5vh', }}>
		<Button big onClick={goToGiftList}>
			<p>Select Gift</p>
		</Button>
		</div>
	</ScreenWrapper>);
}